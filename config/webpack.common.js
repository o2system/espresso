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

const path = require("path");

module.exports = {
    module: {
        rules: [
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader"
            }],
            exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.(jpg|jpeg|gif|png|webpm|svg)$/,
            use: [
            {
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]"
                }
            }
            ]
        },
        
        {
            test: /.(woff|woff2|ttf|eot)$/,
            use: [
            {
                loader: "file-loader",
                options: {
                    name: "assets/webfonts/[name].[ext]"
                }
            }
            ]
        },

        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ],
        }

        ],

    }
}
