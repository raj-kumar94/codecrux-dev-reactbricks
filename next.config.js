module.exports = {
  i18n: {
    locales: ['en'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/product-customiser-react',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
