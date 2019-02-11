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

import EventListener from './Html/EventListener';
import Input from './Kernel/Input';
import ServerRequest from './Kernel/Http/Message/ServerRequest';

// Helpers
import Url from './Helpers/Url';

// ------------------------------------------------------------------------

/**
 * Class Espresso
 */
export default class Espresso {
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
        
        this.helpers = {
            url: new Url()
        }
    }
}
