1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    1a.) Concat
    1a.) const
    1a.) Pure functions
    1b.) Object.create()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    `actions`   conducts the actual changes that take place within the application, as well as the data associated with those changes
    `reducers`  pure functions that take the current state of the application and an action and then return a new state
    `store`     contains our state for our application

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state       the entire contents of its memory, roughly
    Component state         rerenders the page once the state has changed

4.  What is middleware?

    A middleware function is a function that returns a function that returns a function.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    It provides the ability to have our action creators return functions that have direct access to the dispatch() method of the Redux Store. We can return a function.

6.  Which `react-redux` method links up our `components` with our `redux store`?

    `{ applyMiddleware }`