export class Request {
    url = ''
    config = {}
    constructor(url: string, config = {}) {
        this.url = url;
        this.config = config;
    }
    compare(body: any): boolean {
        return true
    }
}

export class GitHubRepos extends Request {
    constructor(url: string, config = {}) {
        super(url, config)
    }
    compare(body: any): boolean {
        const reposWithIds = body.filter((repo: any) => repo.id)
        return body.length === reposWithIds.length
    }
}

const gitHubRepos = new GitHubRepos('https://api.github.com/orgs/nodejs/repos')
const tripAdvisor = new Request('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=', {
                headers: {
                    'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                }})

const gitHubUsers = new Request('https://api.github.com/users')

export const requests: Request[] = [gitHubRepos, gitHubUsers, tripAdvisor]

// export interface IRequest {
//     url: string;
//     config?: any;
// }

// export const requests: IRequest[] = [
//     {
//         url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=', config: {
//             headers: {
//                 'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
//                 'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
//             }
//         }
//     },
// ];

