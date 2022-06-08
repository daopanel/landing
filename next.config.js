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
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
