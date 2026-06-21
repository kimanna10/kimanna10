import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");
/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dbqsb90lj/**", // Ваш ID облака из ошибки
      },
    ],
  },
};

// Оборачиваем весь конфиг в плагин
export default withNextIntl(nextConfig);
