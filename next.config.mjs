/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  experimental: {
    // Conditional optimizations based on Turbopack usage
    ...(process.env.TURBOPACK !== '1' && {
      optimizePackageImports: ['@chakra-ui/react', 'framer-motion', 'react-icons'],
      typedRoutes: true,
    }),
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      '@': './src',
    },
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // Conditional modular imports based on Turbopack usage
  ...(process.env.TURBOPACK !== '1' && {
    modularizeImports: {
      '@chakra-ui/react': {
        transform: '@chakra-ui/react/{{member}}',
      },
      'react-icons': {
        transform: 'react-icons/{{member}}',
      },
    },
  }),
  bundlePagesRouterDependencies: true,
  // Conditional webpack config (only for webpack builds, not Turbopack)
  ...(process.env.ANALYZE === 'true' && process.env.TURBOPACK !== '1' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')();
        config.plugins.push(new BundleAnalyzerPlugin());
      }
      return config;
    },
  }),
};

export default nextConfig;
