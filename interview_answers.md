# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

<!-- //////////////////////////////////////////ANSWER ONE/////////////////////////////////////////////////////////// -->
1. What problem does the context API help solve?
sharing state down a component tree because prop drilling sucks.
<!-- //////////////////////////////////////////ANSWER TWO/////////////////////////////////////////////////////////// -->
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions carry info about type and payload and are dispatched by the reducers

<!-- //////////////////////////////////////////ANSWER THREE/////////////////////////////////////////////////////////// -->
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
thunk is a middleware it lets you setup async for apps with redux. example my api call in actions index.js

<!-- //////////////////////////////////////////ANSWER FOUR/////////////////////////////////////////////////////////// -->
4. What is your favorite state management system you've learned and this sprint? Please explain why!
I'd say redux even though the obvious answer would be context apis. The reason being is Redux is probably more commonplace in the workspace in larger older sites.
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////// --->

(by the way this is in the README and i almost didn't realize this was posted in both places? sort of confusing)