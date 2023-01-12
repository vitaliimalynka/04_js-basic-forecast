// import { STATE } from './state.js'
class DataService {
    #baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    #appId = 'bf35cac91880cb98375230fb443a116f'

    async getWeatherForecast(cityId) {
        const url = `${this.#baseUrl}?id=${cityId}&appid=${this.#appId}`
        const response = await fetch(url)

        if (response.ok) {
            return await response.json()
        } else {
            throw new Error(`Error with url: ${url}. Details: status ${response.status}, message: ${response.statusText}`)
        }
    }
}

export const dataService = new DataService()