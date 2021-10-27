import axios from 'axios';
export const getCustomerInfo = async (phone) => {
    if (!phone) {
        throw new Error('Phone not be null or undefined!')
    }
    let requestConfig = {
        url: `http://localhost:3001/getCustomerInfo/${phone}`,
        method: 'GET',
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