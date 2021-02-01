1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
3. How would you track down a performance issue in production? Have you ever had to do this?
4. How would you improve the API that you just used?
5. Please describe yourself using JSON.

### Answer 1:

I totally spend 6-7 hours for doing what I have finished. I would add following things if I get more time. 1. First thing I will add caching for some search results so we can serve the results fast for repeated search queries. 2. Right now I am able to fetch 20 results for a city query. so if the user use filter option then it will filter from top 20 results only. if they want more options then they have to add more results manually by clicking "show more" button. That issue needs to be address. 3. The API have optin to get all the cuisines for perticular city so we can use that to populate a list of cuisines and allow user to choose one of that for filtering. 3. I would definitely add more unit test.4. It will be a good idea to add infinite scroll and more filters. 5. I would add better styling too.

### Answer 2:

I know of two new features of the javaScript.

1. Nullish coalescing operator e.g. let myTime = 0; let myWatch = myTime ?? 100; console.log(myWatch) // output 0
2. Optional chaining operator e.g. const myObj = {a:{b:1}}; myObj.a?.b?.c // does not throw error if the property 'c' is not present it returns undefined

### Answer 3:

I would look into the parts where the issue is occuring the memory use, Image optimizing, and database queries. It can be third party API calls that are being slow sometimes. so It is good to take step by step approach to resolve performance issue. I have not done this before.

### Answer 4:

In the API you can not send a query directly you have to have city ID or cuisine ID or longitude-latitude. so you have to send consecutive request to get the actual data for search query. I think there should be a option of directly searching for a query string.

### Answer 5:

JSON is realy useful format while working with javaScript. It is a javascript object like syntax so you can use various object methods to access nested data.
