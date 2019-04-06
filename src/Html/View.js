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

import ActionLoader from "./ActionLoader";
import Parser from "./Parser";

/**
 * Class View
 * 
 * @package Html
 */
export default class View {

    /**
     * View.constructor
     */
    constructor(){
        this.actionLoader = new ActionLoader;
    }

    // ------------------------------------------------------------------------
    
    /**
     * View.loadTemplate
     * 
     * @param string template
     * 
     * @return View 
     */
    loadTemplate(template) {
        this.template = template;

        return this;
    }

    // ------------------------------------------------------------------------

    /**
     * View.withVars
     * 
     * @param array vars 
     * 
     * @return View
     */
    withVars(vars) {
        if(vars instanceof Object) {
            this.vars = vars;
        }
        
        return this;
    }

    // ------------------------------------------------------------------------

    /**
     * View.render
     * 
     * @return string
     */
    render() {
        return Parser.parse(this.template, this.vars);
    }
}