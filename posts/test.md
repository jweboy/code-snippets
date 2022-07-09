---
title: 迭代器模式
---

```js
var each = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(this, i, arr[i]);
  }
};

each([1, 2, 3], function (i, n) {
  console.log([i, n]);
});

```

