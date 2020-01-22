const withOffline = require('next-offline');

const nextConfig = {
    workboxOpts: {
        swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
        globPatterns: ['static/**/*'],
        globDirectory: '.',

        runtimeCaching: [
            serviceWorkerBase(/.*\.(?:css|scss|less)/, 'StaleWhileRevalidate', 'css-cache', 20, 12 * 60 * 60),
            serviceWorkerBase(/.*\.(?:png|jpg|jpeg|svg|gif).*/, 'StaleWhileRevalidate', 'image-cache', 500, 24 * 60 * 60),
            serviceWorkerBase(/.*\.(?:mp4|webm).*/, 'StaleWhileRevalidate', 'media-cache', 30, 24 * 60 * 60),
            serviceWorkerBase(/.*\.(?:avatars1.githubusercontent.com).*/, 'StaleWhileRevalidate', 'html-cache', 50, 24 * 60 * 60),
            serviceWorkerBase(/.*\.(?:js|jsx|ts)/, 'StaleWhileRevalidate', 'script-cache', 20, 24 * 60 * 60),
            serviceWorkerBase(/.*\.(?:woff|woff2|ttf|eot|otf)/, 'StaleWhileRevalidate', 'font-cache', 20, 24 * 60 * 60),
        ]
    }
}

function serviceWorkerBase(pattern, cacheType, cacheName, maxEntries, maxAgeSeconds = 24 * 60 * 60) {
    return {
        urlPattern: pattern,
        handler: cacheType,
        options: {
            cacheName,
            expiration: { maxEntries, maxAgeSeconds },
            cacheableResponse: { statuses: [0, 200] }
        }
    };
}

module.exports = withOffline(nextConfig);