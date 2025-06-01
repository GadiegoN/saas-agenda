import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { Plus } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Doctors() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos da sua clínica.</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus /> Adicionar médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Médicos</h1>
      </PageContent>
    </PageContainer>
  );
}
