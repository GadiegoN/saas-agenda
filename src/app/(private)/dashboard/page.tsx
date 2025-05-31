import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "./_components/sign-out-button";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersToClinicsTable } from "@/db/schema";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <Image
        src={session?.user?.image || "/default-avatar.png"}
        alt="User Avatar"
        width={100}
        height={100}
        className="mt-4 rounded-full border border-gray-300 shadow-sm"
        loading="lazy"
      />

      <p className="mt-4 text-gray-600">
        {session ? `Bem-vindo, ${session.user.name}!` : "Você não está logado."}
      </p>

      <SignOutButton />
    </div>
  );
}
