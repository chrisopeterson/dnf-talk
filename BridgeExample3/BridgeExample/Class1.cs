using Bridge;
using Bridge.Html5;

namespace BridgeExample
{
    public class App
    {
        [Ready]
        public static void Main()
        {
            // Build interface for adding tasks
            var div = new DivElement() {
                Id = "container"
            };

            var list = new UListElement() {
                Id = "taskList",
                ClassName = "myTaskClass"
            };

            var textbox = new InputElement()
            {
                Id = "task",
                Type = InputType.Text,
                Placeholder = "Enter a task"
            };

            var btn = new ButtonElement() 
            {
                Id = "addTask",
                InnerHTML = "Add Task"
            };

            // Add event listeners
            btn.AddEventListener(EventType.Click, AddTaskClick);

            // add elements to div then document
            div.AppendChild(list);
            div.AppendChild(textbox);
            div.AppendChild(btn);

            Document.Body.AppendChild(div);
        }

        private static void AddTaskClick(Event e)
        {
            e.PreventDefault(); // event won't propogate anyway - just an example

            UListElement ul = Document.GetElementById("taskList") as UListElement;
            InputElement tb = Document.GetElementById("task") as InputElement;

            ul.AppendChild(new LIElement() { InnerHTML = tb.Value });
        }
    }
}
