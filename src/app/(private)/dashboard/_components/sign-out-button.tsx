"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    authClient.signOut();

    router.push("/authentication");
  };

  return <Button onClick={handleSignOut}>Sair</Button>;
}
