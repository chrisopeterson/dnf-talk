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

            // Add event listeners
            btn.addEventListener("click", BridgeExample.App.addTaskClick);

            // add elements to div then document
            div.appendChild(list);
            div.appendChild(textbox);
            div.appendChild(btn);

            document.body.appendChild(div);
        },
        addTaskClick: function (e) {
            e.preventDefault(); // event won't propogate anyway - just an example

            var ul = Bridge.as(document.getElementById("taskList"), HTMLUListElement);
            var tb = Bridge.as(document.getElementById("task"), HTMLInputElement);

            ul.appendChild(Bridge.merge(document.createElement('li'), {
                innerHTML: tb.value
            } ));
        }
    }
});