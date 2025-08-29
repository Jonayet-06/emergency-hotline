1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById provides us a single element by its unique ID.
getElementsByClassName gives us a live collection (HTMLCollection) of all elements with a given class.
querySelector provides us the first matching element for any CSS selector.
querySelectorAll gives us a static NodeList of all matches.

2. How do you **create and insert a new element into the DOM**?

Answer:
We can use document.createElement("tagName") to create a new element.
We can use prepend() / append() / insertBefore() / appendChild() to insert it into the DOM.

3. What is **Event Bubbling** and how does it work?

Answer:

It works from the innermost element to the outermost element in the DOM tree.

4. What is **Event Delegation** in JavaScript? Why is it useful? write it 2 lines. 

Answer:
Event Delegation is a procedure where you add a single event listener to a parent element to handle events on its child elements.
It is useful why I am explaning this below:
1. Improves performance,
2. Saves memory,
3. Works for dynamically added elements

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:

preventDefault() is a procedure where stops the browser’s default action. We can use form submit or link opening.

stopPropagation() is a method where stops the event from bubbling up in the DOM.