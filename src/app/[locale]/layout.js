import Navbar from "@/components/ui/Navbar";
import { Source_Code_Pro } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata = {
  title: "KIM ANNA | Choreographer",
  description: "Direction | Choreography ",
};

export default async function RootLayout({ children, params }) {
  // Ждем разрешения промиса params
  const { locale } = await params;

  // Получаем сообщения (они автоматически подхватят locale из контекста запроса)
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${sourceCodePro.variable} antialiased font-source`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
