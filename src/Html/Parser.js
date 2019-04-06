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

import Template7 from "template7";

/**
 * Image Helper
 */
Template7.registerHelper('img', function(src, attr){
    let imgAttr = '';

    if(typeof attr == 'object') {
        for(let name in attr) {
            imgAttr = imgAttr + ' ' + name + '="' + attr[name] + '"';
        }
    }

    let img = '<img src="' + src + '" ' + imgAttr + '>';
});

/**
 * Link Helper
 */
Template7.registerHelper('link', function (href, attr) {
    let imgAttr = '';

    if (typeof attr == 'object') {
        for (let name in attr) {
            imgAttr = imgAttr + ' ' + name + '="' + attr[name] + '"';
        }
    }

    let img = '<a href="' + href + '" ' + imgAttr + '>';
});

/**
 * Class Parser
 * 
 * @package Kernel/Http
 */
class Parser {

    /**
     * Parser.parse
     * 
     * @param {string} string 
     * @param {object} vars 
     */
    parse(string, vars) {
        let output = "";

        if (typeof string == "string" && vars instanceof Object) {
            let compiler = Template7.compile(string);
            output = compiler(vars);
        }

        return output;
    }
}

let EspressoParser = window.EspressoParser = new Parser();
export default EspressoParser;