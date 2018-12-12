/**
 * O2System Javascript Framework
 * 
 * @author Steeven Andrian Salim
 * @version 1.0.0
 */
const O2System = new Object();

// ------------------------------------------------------------------------

/**
 * O2System Url Class
 */
O2System.Url = class {
    base(uri) {
        if (uri == undefined) {
            return window.location.protocol + '//' + window.location.hostname + '/';
        }
        return window.location.protocol + '//' + window.location.hostname + '/' + uri;
    }

    current() {
        return window.location.protocol + '//' + window.location.hostname + window.location.pathname;
    }
}

// ------------------------------------------------------------------------

/**
 * O2System Input Class
 */
O2System.Input = class {
    get(index) {
        if (index == undefined) {
            return this.getParams;
        } else if (this.getParams.hasOwnProperty(index)) {
            return this.getParams[index];
        }

        return false;
    }

    hash() {
        return window.location.hash;
    }

    buildQuery(queryParams) {
        if (queryParams == undefined) {
            queryParams = this.getParams;
        }

        var queryString = '?';
        jQuery.each(queryObject, function (key, value) {
            if (value !== 'undefined' && value !== '' && key !== '') {
                queryString = queryString + key + '=' + value + '&';
            }
        });

        return queryString.substring(0, (queryString.length - 1));
    }

    sanitize(string) {
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
    }

    formatNumber(number) {
        return ("" + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function ($1) {
            return $1 + "."
        });
    }
}

// ------------------------------------------------------------------------

/**
 * O2System Server Class
 */
O2System.Server = class {
    constructor() {
        this.queryString = window.location.search.substring(1);
        this.queryParams = this.queryString.split('&');

        if (this.queryParams.length > 0) {
            let input = new O2System.Input();

            for (let i = 0; i < this.queryParams.length; i++) {
                let xParams = this.queryParams[i].split('=');
                input.getParams[xParams[0]] = xParams[1];
            }
        }
    }

    get queryString() {
        return this.queryString;
    }

    get queryParams() {
        return this.queryParams
    }
}

// ------------------------------------------------------------------------

/**
 * O2System Uri Class
 */
O2System.Uri = class {
    constructor() {
        this.string = window.location.pathname.substr(1);
        this.segments = this.string.split('/');
    }

    get string() {
        return this.string;
    }

    set string(uriString) {
        this.string = uriString;
    }

    get segments() {
        return this.segments;
    }

    set segments(uriSegments) {
        this.segments = uriSegments;
    }

    segment(index) {
        if (this.segments.hasOwnProperty(index - 1)) {
            return this.segments[index - 1];
        }

        return null;
    }
}

// ------------------------------------------------------------------------

/**
 * O2System Validate Class
 */
O2System.Validate = class {
    url(string) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(string);
    }

    domain(string) {
        var regexp = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
        return regexp.test(string);
    }

    alphaNumeric(string) {
        var regexp = /^([a-zA-Z0-9-]+)$/;
        return regexp.test(string);
    }

    empty(string) {
        if (string.trim()) {
            return true;
        }
        return false;
    }
}

// ------------------------------------------------------------------------

O2System.Espresso = class {
    constructor() {
        this.url = new O2System.Url();
        this.input = new O2System.Input();
        this.server = new O2System.Server();
        this.uri = new O2System.Uri();
        this.validate = new O2System.Validate();
    }
}

// ------------------------------------------------------------------------

if (typeof $ !== 'undefined') {
    $.o2system = new O2System.Espresso();
}