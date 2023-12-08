import axios from 'axios';

// export allows the function to be used anywhere in the repo
export const checkUrl = async (url: string): Promise<void> => {
    try {
        const response = await axios.get(url);
        await response.data;
        if (response.status === 200) {
            console.log(url, 'OK');
        }
        console.log(response.status);
    } catch (e: any) {
        console.log(url, e.code);
    }
};