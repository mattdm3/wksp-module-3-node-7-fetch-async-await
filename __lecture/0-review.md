# 3.7.0 - Review Promises

---

```js
const pauseFunction = () => {
    return new Promise(function(resolve, reject) {
        console.log('entering the promise(d) land');
        resolve('resolve');
        console.log('...in limbo...');
        reject('reject');
        console.log('shuffling off...');
    });
}

the problem here is that it will always resolve here. 
```

---

Let's make it pause now...

```js
const pauseFunction = () => {
    return new Promise(function(resolve, reject) {
        console.log('entering the promise(d) land');
        resolve('resolve');
        console.log('...in limbo...');
        reject('reject');
        console.log('shuffling off...');
    });
}

// i think it's:  pauseFunction().then(data => console.log(datat));
```

---

<img src='./assets/promise.png' style='width:100%;' />


---

[Next lecture: Async / Await](../lecture-1-async-await)