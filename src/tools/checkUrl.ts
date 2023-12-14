import axios from 'axios';

// export allows the function to be used anywhere in the repo
export const checkUrl = async (url: string, config = {}): Promise<void> => {
    try {
        console.time(url);
        const response = await axios.get(url, config);
        await response.data;
        if (response.status === 200) {
            console.log(url, 'Looks good!');
        }
        console.log(response.status);
        console.timeEnd(url);
    } catch (e: any) {
        console.log(url, e.code, 'Looks bad!');
    }
};