import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { doctorsTable } from "@/db/schema";

dayjs.extend(utc);
dayjs.locale("pt-br");

function parseTime(time: string) {
  const [hour, minute, second = "0"] = time.split(":");
  return {
    hour: Number(hour),
    minute: Number(minute),
    second: Number(second),
  };
}

function getDateTime(weekDay: number, time: string) {
  const { hour, minute, second } = parseTime(time);
  return dayjs()
    .utc()
    .day(weekDay)
    .set("hour", hour)
    .set("minute", minute)
    .set("second", second)
    .local();
}

export const getAvailability = (doctor: typeof doctorsTable.$inferSelect) => {
  const from = getDateTime(
    doctor.availableFromWeekDay,
    doctor.availableFromTime,
  );
  const to = getDateTime(doctor.availableToWeekDay, doctor.availableToTime);
  return { from, to };
};
