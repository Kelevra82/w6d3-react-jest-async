# w6d3-react-jest-async

1. Created a new React app using Vite.
   - `npm create vite w6d3-react-jest-async`

2. Installed dependencies:
   - `npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom`

3. Added test script to `package.json`:
   - `"test": "vitest"`

4. Added test properties to `vite.config.js`:

```js
   test: {
    environment: "jsdom",
    globals: true,
   },
```

5. Created `apiService.js` and added test to `apiService.test.js`

6. Run tests with `npm test`

## Screenshot path

`/docs/fetchData-results.png`