using Bridge;
using Bridge.Html5;

namespace BridgeExample
{
    public class App
    {
        [Ready]
        public static void Main()
        {
            // just an alert to confirm everything is working.
            Window.Alert("hello javascript");
        }
    }
}
