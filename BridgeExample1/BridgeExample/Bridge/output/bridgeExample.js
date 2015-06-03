/* global Bridge */

Bridge.define('BridgeExample.App', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            // just an alert to confirm everything is working.
            window.alert("hello javascript");
        }
    }
});