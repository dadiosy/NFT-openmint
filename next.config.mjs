/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // includes files from the monorepo base two directories up
        outputFileTracingRoot: path.join(__dirname, 'collections'),
    },
};

export default nextConfig;
