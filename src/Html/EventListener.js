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

import Request from '../Kernel/Http/Request';
import Mustache from 'mustache';

/**
 * Class EventListener
 * 
 * @package Html
 */
export default class EventListener {
    loadFrame(selectors) {
        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function(button){
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

    loadPage(selectors) {
        const buttons = document.querySelectorAll(selectors);
        
        if(buttons.length > 0) {
            buttons.forEach(function(button){
                button.addEventListener('click', (element) => {
                    element.preventDefault();

                    const pageContent = document.querySelector('section[role="page-content"]');
                    if (pageContent) {
                        const request = new Request();
                        const xhr = request.CORS(element.target.href, 'GET');
                        if (xhr) {
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    pageContent.innerHTML = xhr.responseText;
                                }
                            }
                            xhr.onerror = function () {
                                console.error('Cannot load page:' + element.target.href);
                            }
                            xhr.send();
                        }
                    }
                });
            });
        }
    }

    loadData(selectors) {
        const templateElements = document.querySelectorAll('[role="template"]');
        if(templateElements.length > 0) {
            templateElements.forEach(function(templateElement){
                templateElement.style.display = 'none';
            });
        }

        const buttons = document.querySelectorAll(selectors);

        if (buttons.length > 0) {
            buttons.forEach(function(button){
                button.addEventListener('click', (element) => {
                    element.preventDefault();
                    const dataUrl = element.target.getAttribute('data-url');
                    const dataTarget = element.target.getAttribute('data-target');

                    if (typeof dataUrl !== 'undefined') {
                        const request = new Request();
                        const xhr = request.CORS(dataUrl, 'GET');
                        if (xhr) {
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 400) {
                                    let dataJSON = JSON.parse(xhr.responseText);

                                    if (dataJSON.result.length > 0) {
                                        const dataSource = document.querySelector('[data-source="' + dataTarget + '"]');
                                        const dataSourceTemplate = dataSource.querySelector('[role="template"]');

                                        if (dataSource) {
                                            if (!dataSourceTemplate) {
                                                dataSource.innerHTML = Mustache.render(dataSource.innerText, dataJSON.result[0]);
                                            } else {
                                                dataJSON.result.forEach(function (itemData, itemIndex) {
                                                    let itemTemplate = dataSourceTemplate.cloneNode(true);
                                                    itemExists = dataSource.querySelector('[data-index="' + itemIndex + '"]');
                                                    if ( ! itemExists) {
                                                        itemTemplate.setAttribute('data-index', itemIndex);
                                                        itemTemplate.removeAttribute('role');
                                                        itemTemplate.style.display = 'block';
                                                        itemTemplate.innerHTML = Mustache.render(itemTemplate.innerText, itemData);
                                                        dataSource.appendChild(itemTemplate);
                                                    }
                                                });
                                            }
                                        } else {
                                            console.log(dataJSON);
                                        }
                                    }
                                }
                            }
                            xhr.onerror = function () {
                                console.error('Cannot load data:' + dataUrl);
                            }
                            xhr.send();
                        }
                    }
                });
            });
        }
    }
}