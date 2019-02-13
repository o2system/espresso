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

// Kernel Helpers
import Input from './Kernel/Input';
import ServerRequest from './Kernel/Http/Message/ServerRequest';

// Html Helpers
import EventListener from './Html/EventListener';
import View from './Html/View';

// Common Helpers
import Url from './Helpers/Url';

// ------------------------------------------------------------------------

/**
 * Class Espresso
 */
export default class Espresso {
    constructor() {
        this.input = new Input();
        this.serverRequest = new ServerRequest();
        this.listener = new EventListener();
        this.view = new View();

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
