# Fetch API - Dog Info

>Using the Fetch API to get a information on dogs from the Dog API.


## Tech & Dependencies

- JavaScript
- [Dog API](https://dog.ceo/dog-api/)


## Install & Run

- Download zip file and install
- Open `index.html` in a browser
 


## Notes

- The Fetch API is native to the browser
- Using the Fetch API is simpler than using AJAX, XHR or JQuery
- Asynchronous means to update a webpage with information from the server without doing a complete re-page load.
- Fetch API uses JavaScript Promises to handle the results returned from the server.
- Asynchronous JavaScript And XML (AJAX) uses XML Http Request (XHR) object to request data from a web server.
- Fetch method, `fetch('myapi.com/endpoint)`
```js
    fetch('https://dog.ceo/api/breeds/image/random')
```

- Get the data with fetch(), then convert it to a json file, then log  the message endpoint to the console.

```js
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())      
    .then(data => console.log(data.message))
```

## Sources

- [Treehouse Tutorial: Working with the Fetch API](https://teamtreehouse.com/library/working-with-the-fetch-api)
- [Dog API](https://dog.ceo/dog-api/)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [How to Use the JavaScript Fetch API](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- [Introduction to the Fetch API](https://www.sitepoint.com/introduction-to-the-fetch-api/)
- [Fetch Polyfill](https://github.com/github/fetch)
- [MDN: Response Methods](https://developer.mozilla.org/en-US/docs/Web/API/Response#Methods)
- [MDN: Sending a Request with Credentials](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Sending_a_request_with_credentials_included)
- [MDN: Sending Cookies with fetch()](https://github.com/github/fetch#sending-cookies)
- [MDN: then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
