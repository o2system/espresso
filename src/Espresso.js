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

import UrlHelper  from './Helpers/Url';
import Input  from './Kernel/Input';
import ServerRequest  from './Kernel/Http/Message/ServerRequest';

// ------------------------------------------------------------------------

export default class Espresso {
    constructor() {
        this.helper = new Object();
        this.helper.url = UrlHelper;

        this.input = Input;
        this.serverRequest = ServerRequest;
    }
}


