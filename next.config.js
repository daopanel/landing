/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO Not sure how we want to handle this. We can't add every possible
    // domain here for, say, ENS avatars.
    domains: [],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
   webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      // https://github.com/vercel/next.js/issues/7755#issuecomment-937721514
      config.resolve.fallback.fs = false;
    }
    return config;
  }
};


module.exports = nextConfig;
