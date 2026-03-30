/** @type {import('next').NextConfig} */
const nextConfig = () => {
  const env = {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    NEXT_PUBLIC_2GIS_API_KEY: process.env.NEXT_PUBLIC_2GIS_API_KEY,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_STORAGE_PREFIX: process.env.NEXT_PUBLIC_STORAGE_PREFIX,
  };
  const isProd = process.env.NODE_ENV === 'production';
  return {
    output: 'standalone',
    reactStrictMode: false,
    poweredByHeader: false,
    productionBrowserSourceMaps: true,
    env,
    compress: isProd,
    compiler: {
      // Remove `console.*` output except `console.error`
      removeConsole: isProd
        ? {
            exclude: ['error', 'info'],
          }
        : false,
      // Uncomment this to suppress all logs.
      // removeConsole: true,
    },
    i18n: {
      locales: ['en', 'de', 'zh'],
      defaultLocale: 'en',
    },
  };
};

export default nextConfig;
