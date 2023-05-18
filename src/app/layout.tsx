import "./globals.css";

export const metadata = {
  title: "IFOOD",
  description: "Generated by MetLife",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
