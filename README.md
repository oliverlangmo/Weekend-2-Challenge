# Weekend-2-Challenge
# Description


I created a new JSON data file, inside it, you will find an array of objects. Each object, is each one of you!

https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json

You first task is to make an AJAX call from the client side app.js, using the .ajax method and access the json data through the url above. When successful, it should bring the data back down. You will then need to combine that with what you have learned about parsing objects and arrays to complete the challenge.

Ajax reference: https://github.com/devjanaprime/2.4-jQueryAjaxJSON/blob/master/scripts/getJsonExample.js

What I would like to see on the DOM, is one person at a time represented - the info for the first person in the json data. One the screen should also be Prev and Next buttons, that when pressed, show the information for the appropriate person. These should wrap - prev when on the first person should wrap around to show the last person and vice versa.

Also on the dom should be a display showing the number of people and which is being currently viewed (eg. 2/20)

When a person is displayed, show their name, their city, and their piece of shoutout feedback. Only one person should be show cased at any given time.

