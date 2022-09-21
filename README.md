# dpay

## Payment Request API

###  Sample Codes

```js
var dpay = require("dapy")();
var params = {
    auth_token:"YOUR AUTHENTICATION TOKEN",
    order_code:"GENERATE UNIQUE CODE AND STORE IT ON YOUR DATABASE",
    token_address:"YOUR TOKEN ADDRESS",
    amount:"AMOUNT",
};
const result = await dpay.paymentIntents.create(params);
console.log(result)

```