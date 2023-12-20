export class URLRequest {
    url;
    config;
    constructor(url: string, config = {}) {
        this.url = url;
        this.config = config;
    }
    compareRequest(body: any) {
        return true
    }
}

class GithubRepos extends URLRequest {
    constructor(url: string, config = {}) {
        super(url, config)
    }
    compareRequest(body: any) {
        if (body.length > 0) {
            return true
        } else {
            return false
        }

    }
}

export class TripAdvisor extends URLRequest {
    constructor(url: string, config = {}) {
        super(url, config)
    }
    compareRequest(body: any) {
        if (body.message === "Success") {
            if (body.data.data.length > 0) {
               if (body.data.data[0].locationId > 0)
               return true 
            else {
                return false
            }
            } else {
                return false
            }
        } else {
            return false
        }
    }
}



const githubRepos = new GithubRepos('https://api.github.com/orgs/nodejs/repos')
const netflixRepos = new GithubRepos('https://api.github.com/users')
const tripAdvisor = new TripAdvisor('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=60750', { headers: { 'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7', 'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com' } })
const twitterRepos = new GithubRepos('https://api.github.com/orgs/twitter/repos')

export const requests: URLRequest[] = [githubRepos, netflixRepos, tripAdvisor, twitterRepos]