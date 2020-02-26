# 3.6.1 - Async / Await

---

<blockquote>
    Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more _enjoyable_ and _easier to understand_.
    - It is built on top of Promises
    - is compatible with all existing Promise-based APIs.
</blockquote>

---

```js
const newPauseFunction = (sec) => {
    return new Promise(function(resolve) {
        console.log(`${sec}s pause`);
        setTimeout(() => resolve('resolved!'), sec * 1000);
    });
}

newPauseFunction(1)
    .then(() => newPauseFunction(2))
    .then(() => newPauseFunction(3))
    .then(() => newPauseFunction(3)
    .then(data => console.log(data));
```

_let's convert it to async/await_

```js
const doIt = async () => {
    await newPauseFunction(1); 
    await newPauseFunction(2); 
    await newPauseFunction(3); 
    await newPauseFunction(3); 
    console.log('no more "awaits"')

}

doIt();
```
---

### Exercise

Convert the following to async/await

```js
transformText(string)
    .then((str) => allCaps(str))
    .then((str) => trimFirst(str))
    .then((str) => trimLast(str))
    .then((str) => replaceWithX(str))
    .then((str) => {
        console.log(str);
        return str;
    })
    .catch((err) => console.log(err));
```

_let's convert it to async/await_

```js

const transformText = async (string) => {
    await function (str) { allCaps(str)}; 
    await function (str) { trimFirst(str)}; 
    await function (str) { trimLast(str)}; 
    await function (str) { replaceWithX(str)}; 
    await function (str) {
        console.log(str); 
        return str; 
    }
    .catch((err) => console.log(err))
}

// or

const transformText = async (string) => {
    let str = await  allCaps(str); 
    let str1 = await  trimFirst(str); 
    let str2 = await  trimLast(str); 
    let str3 = await  replaceWithX(str); 
    let str4 = await  ... 
    
}


```

---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
    try {
        console.log('Go');
        await newPauseFunction(1);
        await newPauseFunction(2);
        await newPauseFunction(3);
        await newPauseFunction(3);
        console.log('Stop');
    } catch (err) { console.log(err) }
}
asyncPause();
```

---