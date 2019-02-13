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

import Mustache from "mustache";

/**
 * Class View
 * 
 * @package Html
 */
export default class View {
    
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
     * View.withPartial
     * 
     * @param string name 
     * @param string template 
     * 
     * @return View
     */
    withPartial(name, template) {
        if(typeof this.partials == "undefined") {
            this.partials = new Object();
        }

        if(typeof template == "string") {
            this.partials[name] = template;
        }
        
        return this;
    }

    // ------------------------------------------------------------------------

    /**
     * View.__toString
     * 
     * @return string
     */
    __toString() {
        let output = "";

        if(typeof this.template == "string" && Array.isArray(this.vars)) {
            if (this.partials instanceof Object) {
                output = Mustache.to_html(this.template, this.vars, this.partials);
                delete this.partials;
            } else {
                output = Mustache.to_html(this.template, this.vars);
            }
        }

        delete this.template;
        delete this.vars;

        return output;
    }
}