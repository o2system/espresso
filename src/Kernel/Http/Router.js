/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

import Uri from "./Message/Uri";

/**
 * Class Router
 * 
 * @package Kernel/Http
 */
export default class Router {
    construct() {
        this.uri = new Uri();
    }

    parseRequest(uriRequest) {
        if (uriRequest instanceof Uri) {
            this.uri = uriRequest;
        }
    }
}