(function() {
    "use strict";
    function trim(string) {
        return string.replace(/^\s+|\s+$/gm,'');
    }

    console.log(trim(" Hello Samuel "));
})()