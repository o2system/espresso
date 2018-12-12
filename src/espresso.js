'use strict';

/**
 * O2System Namespace
 */
if(typeof O2System === 'undefined') {
    var O2System = {};
}

// ------------------------------------------------------------------------

// jQuery Replacement
if (typeof $ !== 'undefined') {
    $.o2system = O2System;
}

// ------------------------------------------------------------------------

/**
 * Espresso
 * O2System Javascript Framework
 * 
 * @author  Steeven Andrian Salim
 * @version 1.0.0
 */
O2System.Espresso = class {
    /**
     * Constructor
     */
    constructor() {
        uri.string = window.location.pathname.substr(1);
        this.uri.segments = this.uri.string.split('/');

        this.server.queryString = window.location.search.substring(1);
        this.server.queryParams = this.server.queryString.split('&');

        if (this.server.queryParams.length > 0) {
            for (var i = 0; i < this.server.queryParams.length; i++) {
                var xParams = this.server.queryParams[i].split('=');
                this.input.getParams[xParams[0]] = xParams[1];

                // unset xParams
                delete xParams;
            }
        }
    }

    // ------------------------------------------------------------------------

    /**
     * URI Object
     */
    uri = {
        string: null,
        segments: null,

        getString: function () {
            return this.string;
        },

        getSegments: function () {
            return this.segments;
        },

        getSegment: function (n) {
            if (this.segments.hasOwnProperty(n - 1)) {
                return this.segments[n - 1];
            }

            return null;
        }
    };

    // ------------------------------------------------------------------------

    /**
     * URL Helpers Object
     */
    url = {
        base: function (uri) {
            if (uri == undefined) {
                return window.location.protocol + '//' + window.location.hostname + '/';
            }
            return window.location.protocol + '//' + window.location.hostname + '/' + uri;
        },
        current: function () {
            return window.location.protocol + '//' + window.location.hostname + window.location.pathname;
        }
    };

    // ------------------------------------------------------------------------

    /**
     * Server Object
     */
    server = {
        queryString: null,
        queryParams: null,
        getQueryString: function () {
            return this.queryString;
        },
        getQueryParams: function () {
            return this.queryParams
        }
    };

    // ------------------------------------------------------------------------

    /**
     * Input Object
     */
    input = {
        getParams: [],
        get: function (index) {
            if (index == undefined) {
                return this.getParams;
            } else if (this.getParams.hasOwnProperty(index)) {
                return this.getParams[index];
            }

            return false;
        },
        hash: function () {
            return window.location.hash;
        },
        buildQuery: function (queryParams) {
            if (queryParams == undefined) {
                queryParams = this.getParams;
            }

            var queryString = '?';
            $.each(queryObject, function (key, value) {
                if (value !== 'undefined' && value !== '' && key !== '') {
                    queryString = queryString + key + '=' + value + '&';
                }
            });

            return queryString.substring(0, (queryString.length - 1));
        }
    };

    // ------------------------------------------------------------------------

    /**
     * Validate Object
     */
    validate = {
        url: function (string) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(string);
        },
        domain: function (string) {
            var regexp = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
            return regexp.test(string);
        },
        alphaNumeric: function (string) {
            var regexp = /^([a-zA-Z0-9-]+)$/;
            return regexp.test(string);
        },
        empty: function (string) {
            if (string.trim()) {
                return true;
            }
            return false;
        }
    };

    // ------------------------------------------------------------------------

    /**
     * O2System Sanitize Helper
     */
    sanitize = function (string) {
        var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

        var tagOrComment = new RegExp(
            '<(?:'
            // Comment body.
            + '!--(?:(?:-*[^->])*--+|-?)'
            // Special "raw text" elements whose content should be elided.
            + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
            // Regular name
            + '|/?[a-z]'
            + tagBody
            + ')>',
            'gi');

        var oldString;
        do {
            oldString = string;
            string = string.replace(tagOrComment, '');
        } while (string !== oldString);
        return string.replace(/</g, '&lt;');
    };

    // ------------------------------------------------------------------------

    /**
     * O2System Window Helpers Object
     */
    window = {
        open: function (url, title, width, height) {
            // Fixes dual-screen position Most browsers Firefox
            var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
            var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

            screenWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            screenHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

            var left = ((screenWidth / 2) - (width / 2)) + dualScreenLeft;
            var top = ((screenHeight / 2) - (height / 2)) + dualScreenTop;
            var newWindow = window.open(url, title, 'toolbar=no, menubar=no, resizable=no, copyhistory=no, location=no, directories=no, status=no, addressbar=0, scrollbars=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);

            // Puts focus on the newWindow
            if (window.focus) {
                newWindow.focus();
            }
        }
    };

    // ------------------------------------------------------------------------

    /**
     * O2System Format Helpers Object
     */
    format = {
        number: function (number) {
            return ("" + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function ($1) {
                return $1 + "."
            });
        }
    };

    // ------------------------------------------------------------------------

    /**
     * O2System Cache Object
     */
    cache = localStorage;

    // ------------------------------------------------------------------------

    /**
     * O2System Session Object
     */
    session = sessionStorage;
}