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

/**
 * Class Validation
 * 
 * @package Security/Filters
 */
class Validation {
    url(string) {
        let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(string);
    }

    domain(string) {
        let regexp = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
        return regexp.test(string);
    }

    alphaNumeric(string) {
        let regexp = /^([a-zA-Z0-9-]+)$/;
        return regexp.test(string);
    }

    empty(string) {
        if (string.trim()) {
            return true;
        }
        return false;
    }
}