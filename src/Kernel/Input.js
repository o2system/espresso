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
 * Class Input
 * 
 * @package Kernel/Http
 */
class Input {
    get(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var url = window.location.href;
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    sanitize(string) {
        let tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

        let tagOrComment = new RegExp(
            '<(?:'
            // Comment body.
            +
            '!--(?:(?:-*[^->])*--+|-?)'
            // Special "raw text" elements whose content should be elided.
            +
            '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*' +
            '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
            // Regular name
            +
            '|/?[a-z]' +
            tagBody +
            ')>',
            'gi');

        let oldString;
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

export default Input;