import { db } from "@/db";
import { appointmentsTable } from "@/db/schema";
import { sendAppointmentEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      patientId,
      doctorId,
      clinicId,
      date,
      appointmentPriceInCents,
      email,
    } = data;
    if (
      !patientId ||
      !doctorId ||
      !clinicId ||
      !date ||
      !appointmentPriceInCents ||
      !email
    ) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }

    const doctor = await db.query.doctorsTable.findFirst({
      where: (d, { eq }) => eq(d.id, doctorId),
    });

    if (!doctor) {
      return NextResponse.json(
        { error: "Médico não encontrado" },
        { status: 404 },
      );
    }

    await db.insert(appointmentsTable).values({
      patientId,
      doctorId,
      clinicId,
      date: new Date(date),
      appointmentPriceInCents,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await sendAppointmentEmail(email, date, doctor.name);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro no POST /api/appointments:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
