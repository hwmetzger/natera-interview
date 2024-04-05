import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto mt-6">{children}</div>
      </body>
    </html>
  );
}
