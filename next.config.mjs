import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // includes files from the monorepo base two directories up
        outputFileTracingRoot: path.join(process.cwd(), 'collections'),
    },
};

export default nextConfig;
