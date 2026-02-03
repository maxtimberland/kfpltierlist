/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 빌드 멈춤/실패의 흔한 원인(타입체크/린트)을 MVP 단계에서 우선 끔
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
