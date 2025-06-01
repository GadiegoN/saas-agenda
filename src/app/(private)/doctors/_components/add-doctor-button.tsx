"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import UpsertDoctorForm from "./upsert-doctor-form";

export function AddDoctorButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus /> Adicionar médico
        </Button>
      </DialogTrigger>

      <UpsertDoctorForm />
    </Dialog>
  );
}
