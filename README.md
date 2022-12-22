# MS
MS is a simple to use module that gives you the time

## Installation
```js
npm install @kamkam1_0/ms
```

## Converting a number into a string
```js
    const ms = require("@kamkam1_0/ms")
    let timeInString = ms(26002562)
    //Expected Output: 7 hours and 13 minutes
```

## Converting a string into a number
```js
    const ms = require("@kamkam1_0/ms")
    let timeInString = ms("4d")
    //Expected Output: 345600000
```