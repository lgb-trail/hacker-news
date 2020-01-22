const { createServer } = require('https');
const { join } = require('path');
const { parse } = require('url');
const next = require('next');

const fs = require('fs');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('./certificates/localtest.com.key'),
    cert: fs.readFileSync('./certificates/localtest.com.crt')
};

app.prepare()
    .then(() => {
        createServer(httpsOptions, (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname } = parsedUrl;

            // handle GET request to /service-worker.js
            if (pathname === '/service-worker.js') {
                const filePath = join(__dirname, '.next', pathname);

                app.serveStatic(req, res, filePath);
            } else {

                handle(req, res, parsedUrl);
            }
        })
            .listen(3000, () => {
                console.log(`> Ready on https://www.localtest.com:${3000}`);
            })
    })
// const next = require('next');
// const http2 = require('http2');
// const fs = require('fs');
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// // Init the Next app:
// const app = next({ dev });
// // Create the secure HTTPS server:
// // Don't forget to create the keys for your development
// const server = http2.createSecureServer({
//     key: fs.readFileSync('./certificates/cert.key'),
//     cert: fs.readFileSync('./certificates/cert.crt'),
// });

// app.prepare().then(() => {
//     server.on('error', err => console.error(err));
//     // Process the various routes based on `req`
//     // `/`      -> Render index.js
//     // `/about` -> Render about.js
//     server.listen(port);
//     console.log(`Listening on HTTPS port https://localhost:${port}`);
// });