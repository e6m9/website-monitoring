// import axios from 'axios';

// // const url = 'https://api.github.com/orgs/nodejs/repos';

// // function checkUrl()_{} is the same as const checkUrl = () +> {} whcih is called an 'arrow function'
// // need async for await
// // try checks for errors and logs the error code
// const checkUrl = async (url: string) => {
//     try {
//         const response = await axios.get(url);
//         await response.data;
//         if (response.status === 200) {
//             console.log(url, 'OK');
//         }
//         console.log(response.status);
//     } catch (e: any) {
//         console.log(url, e.code);
//     }
// };

// map is more or less the same as a for loop 
// for(let i = 0; i < urls.length; i++) {
// console.log(urls[i]);
// }

import { checkUrl } from "./src/tools/checkUrl";
import { IRequest, requests } from "./src/tools/requests"

const checkUrls = async (requests: IRequest[]) : Promise<void> => {
    await Promise.all(
        requests.map(async (request) => {
            await checkUrl(request.url, request.config);
        })
    );
};

checkUrls(requests);