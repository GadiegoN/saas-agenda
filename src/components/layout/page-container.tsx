export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="h-lvh w-full space-y-6 p-6">{children}</div>;
}

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center justify-between">{children}</div>
  );
}

export function PageHeaderContent({ children }: { children: React.ReactNode }) {
  return <div className="w-full space-y-1">{children}</div>;
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}

export function PageDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}

export function PageActions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>;
}

export function PageContent({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 pb-10">{children}</div>;
}
