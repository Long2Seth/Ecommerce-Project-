const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'hips.hearstapps.com',
      'i.pinimg.com',
      'fakestoreapi.com',
      'images.unsplash.com',
      'i.imgur.com',
      'store.istad.co',
      'via.placeholder.com',
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "store.istad.couser"
    ],
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'store.istad.co/*'
      }
    ]
  }
};

export default nextConfig;
