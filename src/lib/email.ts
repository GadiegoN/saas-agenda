import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAppointmentEmail(
  to: string,
  date: string,
  professional: string,
) {
  await resend.emails.send({
    from: "Agendamentos <noreply@seusite.com>",
    to,
    subject: "Confirmação de Agendamento",
    html: `
      <h1>Olá!</h1>
      <p>Seu agendamento está confirmado para <strong>${date}</strong> com <strong>${professional}</strong>.</p>
    `,
  });
}
