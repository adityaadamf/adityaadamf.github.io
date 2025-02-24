/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "", // Kosongkan basePath agar tidak ada subpath
  assetPrefix: "",
};

export default nextConfig;
