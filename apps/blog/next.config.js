/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

const withTranspilation = require("next-transpile-modules")([
  "@turborepo/utils"
])

module.exports = withTranspilation(nextConfig)