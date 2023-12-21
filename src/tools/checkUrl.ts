import axios from 'axios';
import { UrlRequest } from '../urlRequestClasses/urlRequest';

// export allows the function to be used anywhere in the repo
export const checkUrl = async (request: UrlRequest): Promise<void> => {
    try {
        console.time(request.url);
        const response = await axios.get(request.url, request.config);
        const body = await response.data;
        if (response.status === 200) {
            const compareResult = request.compareRequest(body);
            if (compareResult === true) {
                console.log(request.url, 'Looks good!');
            } else {
                console.log(request.url, 'Looks bad!');
            }
        }
        console.log(response.status);
        console.timeEnd(request.url);
    } catch (e: any) {
        console.log(request.url, e.code, 'Looks bad!');
    }
};