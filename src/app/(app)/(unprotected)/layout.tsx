import Nav from "@/components/Nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang='en' suppressHydrationWarning>
      {/* Header with Login/Signup */}
      <Nav />
      {children}
    </div>
  );
}
