import Nav from "@/components/Nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang='en' suppressHydrationWarning>
      <Nav />
      {children}
    </div>
  );
}
