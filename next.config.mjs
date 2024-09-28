/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",        
        pathname: "/**",
      }
    ],
    formats: ["image/avif", "image/webp"], // avif,webp 자동변환
    // domains: ['fakestoreapi.com'], // 여기 도메인을 추가
  },
};

export default nextConfig;
