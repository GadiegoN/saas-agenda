"use client";

import { createClinic } from "@/actions/create-clinic";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const clinicFormSchema = z.object({
  name: z.string().min(1, "Nome da clínica é obrigatório"),
});

export function FormComponent() {
  const form = useForm<z.infer<typeof clinicFormSchema>>({
    resolver: zodResolver(clinicFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof clinicFormSchema>) => {
    try {
      await createClinic(values.name);
      toast.success("Clínica criada com sucesso!");
      form.reset();

      redirect("/dashboard");
    } catch (err) {
      if (isRedirectError(err)) {
        return;
      }
      console.error("Erro ao criar clínica:", err);
      toast.error("Erro ao criar clínica. Tente novamente.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Clínica</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Digite o nome da clínica" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Criar Clínica"
          )}
        </Button>
      </form>
    </Form>
  );
}
