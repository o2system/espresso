"use strict"
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

const UrlHelper = require('./Helpers/Url');
const Input = require('./Kernel/Input');
const ServerRequest = require('./Kernel/Http/Message/ServerRequest');

// ------------------------------------------------------------------------

/**
 * Class Espresso
 */
class Espresso {
    constructor() {
        this.helper = new Object();
        this.helper.url = new UrlHelper();

        this.input = new Input();
        this.serverRequest = new ServerRequest();
    }
}

module.exports = Espresso;
