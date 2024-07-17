/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      isServer && (config.externals = [...config.externals,  'socket.io-client']);
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: "https",
          hostname: "example.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'image.shutterstock.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: "https",
          hostname: "giszpmycryxolyqvmwam.supabase.co",
          port: "",
          pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "icon-library.com",
            port: "",
            pathname: "/**",
        },
      ],
    },
  };

export default nextConfig;
