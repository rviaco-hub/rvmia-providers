import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({ children }: any) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}