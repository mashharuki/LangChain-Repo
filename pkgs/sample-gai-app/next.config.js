/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dgckhpjzelwwirjgsrsz.supabase.co'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
