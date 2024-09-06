// @ts-check
 
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.caseSensitive = false;
        return config
    }
}
   
export default nextConfig