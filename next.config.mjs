/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: process.env.NEXT_EXPORT === 'true' ? 'export' : undefined,
  trailingSlash: process.env.NEXT_EXPORT === 'true' ? true : false,
  images: process.env.NEXT_EXPORT === 'true' ? { unoptimized: true } : {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: false,
    loader: 'default',
    path: '/_next/image',
    domains: [],
    loaderFile: undefined,
    disableStaticImages: false,
  },
  typedRoutes: true,
  experimental: {
    ...(process.env.TURBOPACK !== '1' && {
      optimizePackageImports: [
        '@chakra-ui/react',
        'framer-motion',
        'react-icons',
        'react-hook-form',
        'axios',
        'clsx',
      ],
      optimizeCss: true,
      scrollRestoration: true,
      optimizeServerReact: true,
      webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
    }),
  },
  serverExternalPackages: ['@next/bundle-analyzer'],
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
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  generateEtags: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  ...(process.env.TURBOPACK !== '1' && {
    modularizeImports: {
      '@chakra-ui/react': {
        transform: '@chakra-ui/react/{{member}}',
      },
      'react-icons': {
        transform: 'react-icons/{{member}}',
      },
      'react-icons/bs': {
        transform: 'react-icons/bs/{{member}}',
      },
      'react-icons/hi': {
        transform: 'react-icons/hi/{{member}}',
      },
    },
  }),
  bundlePagesRouterDependencies: true,
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Enhanced code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 30000,
        maxSize: 500000,
        minChunks: 1,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            enforce: true,
            priority: 30,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            minSize: 50000,
            maxSize: 500000,
          },
          chakra: {
            test: /[\\/]node_modules[\\/]@chakra-ui[\\/]/,
            name: 'chakra',
            chunks: 'all',
            priority: 25,
            minSize: 30000,
            maxSize: 300000,
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer',
            chunks: 'all',
            priority: 25,
            minSize: 30000,
            maxSize: 200000,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
            minSize: 30000,
            maxSize: 200000,
          },
        },
      };

      // Add performance hints
      config.performance = {
        hints: 'warning',
        maxEntrypointSize: 400000,
        maxAssetSize: 300000,
      };
    }

    // Add webpack optimizations for all builds
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    return config;
  },
};

export default nextConfig;
