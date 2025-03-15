module.exports = {
  images: {
    domains: ['your-image-source.com'], // Add your image domains here
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/clean-dashboard',
        permanent: false,
      }
    ]
  }
}