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

import Parser from "template7";

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
     * View.render
     * 
     * @return string
     */
    render() {
        let output = "";

        if(typeof this.template == "string" && this.vars instanceof Object) {
            let compiler = Parser.compile(this.template);
            output = compiler(this.vars);
        }

        delete this.template;
        delete this.vars;

        return output;
    }
}