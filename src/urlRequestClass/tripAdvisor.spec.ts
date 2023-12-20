import { TripAdvisor } from "./UrlRequest"
describe('TripAdvisor', () => {
    it('Has success in the response', () => {
        const mockResponse = {
            "message": "Success",
            "data": {
                data: [{
                    "restaurantsId": "Restaurant_Review-g60750-d23155398-Reviews-Tommy_Bahama_Marlin_Bar_Store-San_Diego_California",
                }]
            }
        }
        const tripAdvisor = new TripAdvisor('tripadvisor-url')
        expect(tripAdvisor.compareRequest(mockResponse)).toEqual(true)
    })
    it('Has failed in the response', () => {
        const mockResponse = {
            "message": "Failed"
        }
        const tripAdvisor = new TripAdvisor('tripadvisor-url')
        expect(tripAdvisor.compareRequest(mockResponse)).toEqual(false)
    })
    it('Passes when data array is not empty', () => {
        const mockResponse = {
            "message": "Success",
            "data": {
                data: [{
                    "restaurantsId": "Restaurant_Review-g60750-d23155398-Reviews-Tommy_Bahama_Marlin_Bar_Store-San_Diego_California",
                }]
            }
        }
        const tripAdvisor = new TripAdvisor('tripadvisor-url')
        expect(tripAdvisor.compareRequest(mockResponse)).toEqual(true)
    })
    it('Fails when data array is empty', () => {
        const mockResponse = {
            "message": "Success",
            "data": {
                data: []
            }
        }
        const tripAdvisor = new TripAdvisor('tripadvisor-url')
        expect(tripAdvisor.compareRequest(mockResponse)).toEqual(false)
    })
    it('Passes when data array has location id', () => {
        const mockResponse = {
            "message": "Success",
            "data": {
                data: [{
                    "restaurantsId": "Restaurant_Review-g60750-d23155398-Reviews-Tommy_Bahama_Marlin_Bar_Store-San_Diego_California",
                    "locationId": 23155398,
                }]
            }
        }
        const tripAdvisor = new TripAdvisor('tripadvisor-url')
        expect(tripAdvisor.compareRequest(mockResponse)).toEqual(true)
    })
    it('Fails when data array does not have a location id', () => {
        const mockResponse = {
            "message": "Success",
            "data": {
                data: [{
                    "restaurantsId": "Restaurant_Review-g60750-d23155398-Reviews-Tommy_Bahama_Marlin_Bar_Store-San_Diego_California",
                }]
            }
        }
        const tripAdvisor = new TripAdvisor('tripadvisor-url')
        expect(tripAdvisor.compareRequest(mockResponse)).toEqual(false)
    })
})