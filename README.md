DotNetFringe Conference
=============

## A 10,000 foot view...

* 2 days
* 40ish speakers and talks
* .NET Open Source

## State Is Evil and Big Ideas

* Biggest theme from day one
* Functional ideas (LINQ) continue to creep into other .NET components
* Instead of manipulating state with events use 'transitions'
	* Create a 'state model' for every state the component can be in.
	* Events do not change state, they call a transition which returns the new state
	* Documents and enforces in code what the expected states of the application are
	* Documents and enforces in code what paths users can take to get to new states
	* Creates more code - ideally this is offset by increased clarity
* Memory is cheap, instead of one state, keep all states
	* Comes from the functional idea of not altering objects
	* Save all the states of the application
	* Simplifies application logic, just use the data you already have
	* Can use this to easily implement things like an undo function which are difficult
	* CLR objects are cheap - events are expensive
* Other Things to Check Out
	* Actor Model - Akka.net
	* Functional languages (F#, Haskell)

## Cool Tools and Demo

* Bridge.net - C# to javascript compiler
* Chocolately - Package manager for Windows Applications
* Script CS - C# as a scripting language
* Glimpse Project - Application Diagnostics