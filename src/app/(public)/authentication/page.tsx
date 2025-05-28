import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormLogin } from "./_components/form-login";
import { FormRegister } from "./_components/form-register";

export default function AuthenticationPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <FormLogin />
        </TabsContent>
        <TabsContent value="register">
          <FormRegister />
        </TabsContent>
      </Tabs>
    </div>
  );
}
