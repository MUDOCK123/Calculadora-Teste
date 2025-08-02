import "./globals.css";

export const metadata = {
  title: "Calculadora",
  description: "Criando calculadora nova",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
