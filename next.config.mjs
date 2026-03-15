/** @type {import('next').NextConfig} */
const nextConfig = {
  // اضبط STATIC_EXPORT=true في .env.local لتوليد مجلد out/ لـ Hostinger
  // على Vercel لا تضبط هذا المتغير حتى تعمل API routes
  ...(process.env.STATIC_EXPORT === 'true' ? { output: 'export' } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
