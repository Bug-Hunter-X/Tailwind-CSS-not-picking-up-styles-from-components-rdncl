```javascript
const path = require('path');
const glob = require('glob');

module.exports = {
  content: [
    './index.html',
    ...glob.sync(path.join(__dirname, './src/**/*.{js,ts,jsx,tsx}')) // This line is now correct
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```