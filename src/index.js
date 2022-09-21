import request from "request";

const BASE_URL="https://dpay.one"

export default function Dpay (){
    const paymentIntents = new PaymentIntents();
    return { paymentIntents };
}

class PaymentIntents {
    constructor(token) {
        this.token = token;
    }
    create(o) {
        const options = {
            method: "POST",
            url: `${BASE_URL}/api/payment/receive`,
            headers: {
                "content-type": "application/json",
            },
            body: o,
            json: true,
        };
        // console.log("options: ", options);
        return new Promise(function (resolve, reject) {
            request(options, (error, response, body) => {
                // if (error) throw new Error(error)
                // console.log(body)
                if (error) {
                    reject(new Error(error));
                }
                resolve(body);
            });
        });
    }
}