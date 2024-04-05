import "@/styles/global.css";

/**
 * This is the NextJS Root Layout that will be utilized by all routes.
 * @returns React.ReactElement
 */
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
