import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "./_components/sign-out-button";
import { getInitials } from "@/utils/get-initials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  if (session.user.clinic === null) {
    redirect("/clinic-form");
  }

  return (
    <div className="flex h-screen flex-col">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <Avatar className="size-24">
        <AvatarImage src={session?.user?.image as string} />
        <AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>
      </Avatar>

      <p className="mt-4 text-gray-600">
        {session ? `Bem-vindo, ${session.user.name}!` : "Você não está logado."}
      </p>

      <SignOutButton />
    </div>
  );
}
