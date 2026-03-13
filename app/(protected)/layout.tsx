import { NavBar } from "@/widgets/navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/shared/lib/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) redirect("/api/auth/signin");

  return (
        <SessionProvider>
          <NavBar />
          <main className="flex grow relative">{children}</main>
        </SessionProvider>
  );
}
