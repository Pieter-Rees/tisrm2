export default {
  plugins: {
    'postcss-preset-env': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
