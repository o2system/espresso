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

import Parser from "./Parser";
import Axios from "axios";

/**
 * Class ActionLoader
 * 
 * @package Html
 */
export default class ActionLoader {

    /**
     * ActionLoader.constructor
     */
    constructor() {
         this.loadPage('a[data-action="load-page"]');
         this.loadData('a[data-action="load-data"]');
         this.loadIframe('a[data-action="load-iframe"]');

         // onload function calls
         this.onloadFunctionCalls();
    }

    // ------------------------------------------------------------------------

    /**
     * ActionLoader.iframe
     * 
     * @param {*} selectors 
     */
    loadIframe(selectors) {
        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function (button) {
                button.addEventListener('click', (element) => {
                    element.preventDefault();

                    const pageFrame = document.querySelector('iframe[role="page-frame"]');
                    if (pageFrame !== 'null') {
                        pageFrame.setAttribute('src', element.target.href);
                    }
                });
            });
        }
    }

    // ------------------------------------------------------------------------

    /**
     * ActionLoader.loadPage
     * 
     * @param {*} selectors 
     */
    loadPage(selectors) {
        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function (button) {
                button.addEventListener('click', (element) => {
                    element.preventDefault();

                    const pageContent = document.querySelector('section[role="page-content"]');
                    if (pageContent) {
                        fetch(element.target.href)
                        .then((response) => response.text())
                        .then((html) => {
                            pageContent.innerHTML = html;

                            let HtmlDOMParser = new DOMParser();
                            let HtmlDoc = HtmlDOMParser.parseFromString(html, 'text/html');

                            const HtmlDocScripts = HtmlDoc.querySelectorAll('script');
                            if(HtmlDocScripts.length > 0) {
                                HtmlDocScripts.forEach(function(script){
                                    if(script.hasAttribute('src')) {
                                        script.async = true;
                                    } else {
                                        eval(script.innerText);
                                    }
                                });
                            }
                        })
                        .catch((error) => {
                            console.warn(error);
                        });
                    }
                });
            });
        }
    }

    // ------------------------------------------------------------------------

    /**
     * ActionLoader.loadData
     * 
     * @param {*} selectors 
     */
    loadData(selectors) {
        const templateElements = document.querySelectorAll('[role="template"]');
        if (templateElements.length > 0) {
            templateElements.forEach(function (templateElement) {
                templateElement.style.display = 'none';
            });
        }

        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function (button) {
                button.addEventListener('click', (element) => {
                    element.preventDefault();
                    const dataUrl = element.target.getAttribute('data-url');
                    const dataTarget = element.target.getAttribute('data-target');

                    if (typeof dataUrl !== 'undefined') {
                        Axios.get(dataUrl)
                        .then(function(response){
                            const sourceEl = document.querySelector('[data-source="' + dataTarget + '"]');
                            const templateEl = sourceEl.querySelector('template');

                            if (typeof sourceEl !== null) {
                                if ( ! templateEl) {
                                    if(typeof response.data == "string") {
                                        sourceEl.innerHTML = response.data;
                                    } else if (typeof response.data == "object") {
                                        let result = response.data.result;
                                        if (typeof result == "string") {
                                            sourceEl.innerHTML = result;
                                        } else if (Array.isArray(result) && result.length == 1) {
                                            console.log(result[0]);
                                            sourceEl.innerHTML = Parser.parse(sourceEl.innerText, result[0]);
                                        }
                                    }
                                } else {
                                    let result = [];
                                    if(Array.isArray(response.data)) {
                                        result = response.data;
                                    } else {
                                        result = response.data.result;
                                        if( ! Array.isArray(result)) {
                                            result = [];
                                        }
                                    }

                                    if(result.length > 0) {
                                        result.forEach(function (itemData, itemIndex) {
                                            let itemTplContainer = document.createElement('canvas');
                                            itemTplContainer.innerHTML = templateEl.content.firstChild.nextSibling.outerHTML;
                                            itemTplContainer.firstChild.setAttribute('data-index', itemIndex);

                                            let itemTplEl = itemTplContainer.firstChild;
                                            let itemExists = sourceEl.querySelector('[data-index="' + itemIndex + '"]');

                                            if (itemExists == null) {
                                                itemTplEl.innerHTML = Parser.parse(itemTplEl.innerText, itemData);
                                                itemTplEl.setAttribute('data-index', itemIndex);
                                            
                                                sourceEl.appendChild(itemTplEl);
                                            }
                                        });
                                    }
                                }
                            }
                        }).catch(function(error){
                            console.error(error);
                        });
                    }
                });
            });
        }
    }

    // ------------------------------------------------------------------------

    /**
     * ActionLoader.onloadFunctionCalls
     */
    onloadFunctionCalls() {
        const elements = document.querySelectorAll('[onload]');
        const callbacks = this.callbacks;

        if (elements.length > 0) {
            elements.forEach(function (element) {
                let functionName = element.getAttribute('onload');
                let functionArgs = null;

                if (element.hasAttribute('data-args')) {
                    functionArgs = JSON.parse(element.getAttribute('data-args'));
                }

                const functionCallback = callbacks[functionName];

                if (typeof functionCallback == "function") {
                    if (Array.isArray(functionArgs)) {
                        functionCallback.apply(functionArgs);
                    } else {
                        functionCallback();
                    }
                }
            });
        }
    }
}