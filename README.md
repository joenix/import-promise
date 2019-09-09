# Import Promise

Make Polymerization

```bash
npm i import-promise
# or
yarn add import-promise
```

```js
// Import Package
import importPromise from "import-promise";

// Sample List
let list = ["twinkle", "little", "star"];

// Use Import Promise
importPromise(list, name => () => import(`./${name}.js`))
  // Promise Then
  .then(items => console.log(items));
```
