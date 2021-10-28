import axios from 'axios';
import config from './service_config';

export const getCustomerInfo = async (phone) => {
    if (!phone) {
        throw new Error('Phone not be null or undefined!')
    }
    let requestConfig = {
        url: `${config.BaseURL}/getCustomerInfo/${phone}`,
        method: 'GET',
    }
    try {
        let result = await axios(requestConfig);
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