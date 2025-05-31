import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormComponent } from "./_components/form";

export default function ClinicFormPage() {
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
