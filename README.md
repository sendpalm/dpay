# dpay

## Payment Request API

### Install   
> npm install dpay
### Get auth token    

You need to register an account from our [website](https://dpay.one/dashboard) and then get the token from the [settings page](https://dpay.one/dashboard/setting)

###  Sample Codes   



```js
var dpay = require("dpay")();
var params = {
    auth_token:"YOUR AUTHENTICATION TOKEN",
    order_code:"GENERATE UNIQUE CODE AND STORE IT ON YOUR DATABASE",
    token_address:"YOUR TOKEN ADDRESS",
    amount:"AMOUNT",
};
const result = await dpay.paymentIntents.create(params);
console.log(result)

```