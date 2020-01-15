# ARRAYLIST-TN
---

[![Build Status](https://travis-ci.org/3imed-jaberi/arraylist-tn.svg?branch=master)](https://travis-ci.org/3imed-jaberi/arraylist-tn)

[![Coverage Status](https://coveralls.io/repos/github/3imed-jaberi/arraylist-tn/badge.svg?branch=master)](https://coveralls.io/github/3imed-jaberi/arraylist-tn?branch=master)
### You can now use the arraylist in you typescript and javascript code easily ..


## Installation 
---
- NPM :

```bash
$ npm install arraylist-tn
```

- YARN :

```bash
$ yarn add arraylist-tn
```


## Usage 
---
#### You can use this module like [ArrayList in the JAVA](https://www.w3schools.com/java/java_arraylist.asp) .. you don't need to change any thing ..


## Support Methods : 
----
Please see the list [here](https://github.com/3imed-jaberi/arraylist-tn/blob/master/src/ArrayList.model.ts);


## Example
----
This is a basic example or follow all test cases [here](https://github.com/3imed-jaberi/arraylist-tn/test/ArrayList.spec.ts) : 

```javascript

const ArrayList = require ('arraylist-tn');  // || const { ArrayList } = require ('arraylist-tn'); 

const myList = new ArrayList();
myList.add('imed jaberi');
console.log(myList.getAll()); // [ 'imed jaberi' ]
myList.addAll(['nodejs','js-lover','tunisia','red','CA']); 
console.log(myList.getAll()); // [ 'imed jaberi', 'nodejs', 'js-lover', 'tunisia', 'red', 'CA' ]
myList.remove(4);
console.log(myList.getAll()); // [ 'imed jaberi', 'nodejs', 'js-lover', 'tunisia', 'CA' ]
console.log(myList.size()); // 5
console.log(myList.contains('CA')); // true
console.log(myList.isEmpty()); // false 
myList.removeAll(); 
myList.addAll([100,50,-50,0,-100]);
myList.sort(); // you can add "asc" as params 
console.log(myList.getAll()); // [ -100, -50, 0, 50, 100 ]
myList.sort("desc");
console.log(myList.getAll()); // [ 100, 50, 0, -50, -100 ]

```


#### License
---
[MIT](https://choosealicense.com/licenses/mit/) 