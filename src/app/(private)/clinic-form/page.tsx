import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormComponent } from "./_components/form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ClinicFormPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (session.user.clinic) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Dialog open={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar clínica</DialogTitle>
            <DialogDescription>
              Preencha os detalhes da clínica para adicionar ao seu perfil.
            </DialogDescription>
          </DialogHeader>

          <FormComponent />
        </DialogContent>
      </Dialog>
    </div>
  );
}
