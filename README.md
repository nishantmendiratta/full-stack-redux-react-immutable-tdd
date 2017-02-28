# full-stack-redux-react-immutable-tdd
https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html


==tutorial notes==    

look-up                                                                               

- actions and reducers 
	Actions : Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
	Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.
	
	ref: http://devdocs.io/redux/basics/actions
	
	Reducers: Actions describe the facts that something happend, but don't specify how application state changes in respose. This is the job of a Reducer.

	ref: http://devdocs.io/redux/basics/reducers

- export defualt function :                                       
	If we want to export a single value or to have a fallback value for our module, we could use a default export:

	ref: http://devdocs.io/javascript/statements/export

- switch and case                                                                    
	The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
	
	ref: http://devdocs.io/javascript/statements/switch

- undefined                                                                          
	undefined is a property of the global object, i.e. it is a variable in global scope. The initial value of undefined is the primitive value undefined.
	
	ref: http://devdocs.io/javascript/global_objects/undefined

- const
	Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through re-assignment, and it can't be redeclared.
	ref: http://devdocs.io/javascript/statements/const                                                                    

------------------------------------
Redux
- redux store
	A store holds the whole state tree of your application.

	The only way to change the state inside it is to dispatch an action on it.

	A store is not a class. It's just an object with a few methods on it.

	To create it, pass your root reducing function to createStore.
	
