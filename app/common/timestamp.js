'use strict'

module.exports = function(data) {
    if (!isNaN(Date.parse(data))) {
        return {
            "unix": Date.parse(data),
            "natural": Date.parse(data).toString()
        };
    } else if (!isNaN(+data)) {
        return {
            "unix": data,
            "natural": new Date(data * 1000).toString()
        };
    } else {
        return {
            "unix": null,
            "natural": null
        };
    }
};