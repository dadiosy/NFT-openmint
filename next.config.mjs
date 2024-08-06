import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // includes files from the monorepo base two directories up
        outputFileTracingRoot: path.join('collections'),
    },
};

export default nextConfig;
