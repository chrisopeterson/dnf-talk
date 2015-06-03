/* global Bridge */

Bridge.define('BridgeExample.App', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            // Build interface for adding tasks
            var div = Bridge.merge(document.createElement('div'), {
                id: "container"
            } );

            var list = Bridge.merge(document.createElement('ul'), {
                id: "taskList", 
                className: "myTaskClass"
            } );

            var textbox = Bridge.merge(document.createElement('input'), {
                id: "task", 
                type: "text", 
                placeholder: "Enter a task"
            } );

            var btn = Bridge.merge(document.createElement('button'), {
                id: "addTask", 
                innerHTML: "Add Task"
            } );

            // add elements to div then document
            div.appendChild(list);
            div.appendChild(textbox);
            div.appendChild(btn);

            document.body.appendChild(div);
        }
    }
});