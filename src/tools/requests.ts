export interface IRequest {
    url: string;
    config?: any;
}

export const requests: IRequest[] = [
    {url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=', config: {headers: {'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7', 
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'}}},
];

    