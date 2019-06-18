const _ = require('lodash');

var math = {
    addition: function() {
        var somme = 0;
        for(i = 0, lim = arguments.length; i < lim; i++) {
            if(_.isNumber(arguments[i])) {
                somme += arguments[i];
            }
        }
        return somme;
    },
    
    soustraction: function() {
        var soustract = 0;
        if(_.isNumber(arguments[0])) {
            soustract = arguments[0];
        }
        for(i = 1, lim = arguments.length; i < lim; i++) {
            if(_.isNumber(arguments[i])) {
                soustract -= arguments[i];
            }
        };
        return soustract;
    },

    multiplication: function() {
        var multi = 1;
        for(i = 0, lim = arguments.length; i < lim; i++) {
            if(_.isNumber(arguments[i])) {
                multi *= arguments[i];
            }
        };
        return multi;
    },

    division: function() {
        var div = 0;
        if(_.isNumber(arguments[0])) {
            div = arguments[0];
        }
        for(i = 1, lim = arguments.length; i < lim; i++) {
            if(_.isNumber(arguments[i]) && arguments[i] !== 0) {
                div /= arguments[i];
            }
        };
        return div;
    }

}

exports.math = math;
