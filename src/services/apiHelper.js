import Axios from 'axios';
// import ls from 'local-storage';

const callApiHelper = (baseUrl, serviceEndpoint, params, requestMethod, requestBody, headers, addOns = {}) => {
    const accessToken = localStorage.getItem('access_token');
    const axiosInstance = Axios.create({
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            ...headers
        },
        baseURL: baseUrl,
        ...addOns
    });

    switch (requestMethod) {
        case 'GET':
            return axiosInstance
                .get(serviceEndpoint, { params })
                .then(response => response)
                .catch(error => {
                    throw error
                });
        case 'POST':
            return axiosInstance
                .post(serviceEndpoint, requestBody)
                .then(response => response)
                .catch(error => {
                    throw error
                });
        case 'PUT':
            return axiosInstance
                .put(serviceEndpoint, requestBody)
                .then(response => response)
                .catch(error => {
                    throw error
                });
        case 'DELETE':
            return axiosInstance
                .delete(serviceEndpoint, { params })
                .then(response => response)
                .catch(error => {
                    throw error
                });
    }
};

export default callApiHelper;
