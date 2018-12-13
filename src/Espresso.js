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

const EventListener = require('./Html/EventListener');
const Input = require('./Kernel/Input');
const ServerRequest = require('./Kernel/Http/Message/ServerRequest');

// ------------------------------------------------------------------------

/**
 * Class Espresso
 */
class Espresso {
    constructor() {
        this.listener = new EventListener();
        this.input = new Input();
        this.serverRequest = new ServerRequest();

        /**
         * Initialize EventListener
         */
        this.listener.loadPage('a[data-action="load-page"]');
        this.listener.loadData('a[data-action="load-data"]');
        this.listener.loadFrame('a[data-action="load-frame"]');
    }
}

module.exports = Espresso;
