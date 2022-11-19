/**
 * @type {import('next').NextConfig}
 */
// const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { i18n } = require('./next-i18next.config')

const withMDX = require('@next/mdx')()

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_BOT_TOKEN: process.env.NEXT_PUBLIC_BOT_TOKEN,
        NEXT_PUBLIC_FILE_SERVER: process.env.NEXT_PUBLIC_FILE_SERVER,
        NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    },
    images: {
        domains: [
            'firebasestorage.googleapis.com',
            'gitarist.shop',
            'chamala.tatar',
        ],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    formats: ['image/avif', 'image/webp'],
    i18n,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}
module.exports = withMDX(nextConfig)
// module.exports = withPWA(withMDX(nextConfig))
