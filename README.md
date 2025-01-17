# IPL-social
## Author
-   FÉTU Thimoté => thimote.fetu@student.vinci.be

## Link to Repository
-   https://github.com/thimote-fetu-vinci/IPL-social.git

## Code explanation
-   The `functions` folder contains the `passwordChecker.js` file which verifies the strength of a password using the `isValidPassword` function.
-   The `spec` folder contains the `passwordChecker.test.js` file which verifies `isValidPassword` is correctly executed.

## Tests commands
-   `npm test` or `npm run test` 

## Utilisation Example
-   To check the strength of a password, you can use the `isValidPassword` function from the `passwordChecker.js` file. Here is an example:

```javascript
const { isValidPassword } = require('./functions/passwordChecker');

const password = 'YourPassword123!';
const isValid = isValidPassword(password);

console.log(`Is the password valid? ${isValid}`);
```