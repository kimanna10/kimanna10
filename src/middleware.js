import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Обязательно экспортируем результат работы функции как default
export default createMiddleware(routing);

// Экспортируем config, чтобы Next.js знал, к каким путям применять мидлвар
export const config = {
  // Matcher: применять ко всем путям, кроме статики, API и т.д.
  matcher: ["/", "/(ru|en|kr|kz)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
