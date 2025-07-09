/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['api.lingomasters.ir'],
        unoptimized: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/, // Target .svg files
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true, // Optimize for icon usage (default size = 1em x 1em)
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
