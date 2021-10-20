# jessica-mitchell-js2-ca

FEU 2 JavaScript course assignment

## UML

- download and install strapi-js2-ca-main from github &&&&
- bootstrap & axios cdn &&&&
- html pages; index & favorites page &&&&
- index:
  -- make a GET request to fetch a list of resources from the API &&&& (index.js)
  -- create HTML for each item & display at least 3 properties for each &&&& (index.js)
  -- each item should also display a button or icon. Clicking on this button should toggle the item in and out of an array stored in localStorage.
  -- There should be a text input on the page that filters the array of results on one of the properties.
- favorites page:
  -- the page should fetch the array of items stored in localStorage and display them or display a message that there are no items
  -- there should be a "clear all" button that clears localStorage (or just a specific key in localStorage) and reloads the display. Don't reload the page, just redraw the HTML.
