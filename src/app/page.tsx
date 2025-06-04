import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-10 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-700">
          Bem-vindo ao SaaS Agenda
        </h1>
        <p className="mb-8 text-gray-600">
          Organize seus compromissos de forma simples, eficiente e segura.
          Gerencie sua agenda online, acesse de qualquer lugar e aumente sua
          produtividade!
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/dashboard">
            <Button className="w-full">Entrar na Dashboard</Button>
          </Link>
          <Link href="/authentication">
            <Button variant="outline" className="w-full">
              Fazer Login / Cadastro
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
