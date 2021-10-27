import axios from 'axios';
export const getSubscriptionOrders = async (subscriptionId) => {
    if (!subscriptionId) {
        throw new Error('Subscription Id not be null or undefined!')
    }
    let requestConfig = {
        url: `http://localhost:3001/getSubscriptionOrders/${subscriptionId}`,
        method: 'POST',
    }
    try {
        let result = await axios(requestConfig);
        console.info("Result:", result);
        return {
            status: true,
            data: result.data,
            code: "SUCCESS"
        }
    } catch (err) {
        let errResponse = {
            status: false,
            data: null,
            code: ""
        }
        if (err.response?.status === 403) {
            errResponse.code = "NOT_FOUND"
        } else {
            errResponse.code = "SERVICE_ERROR"
        }
        return errResponse;
    }
}