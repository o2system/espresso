/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------
import express from "express";

const server = express();
const webpack = require("webpack");
const config = require("../config/webpack.dev.js");
const compiler = webpack(config)

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
console.info('Middleware enabled');

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})