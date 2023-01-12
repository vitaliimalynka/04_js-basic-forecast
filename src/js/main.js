import { ContentSwitcher } from './contentSwitcher.js'
import { Forecast } from './forecast.js'
import { ForecastListView } from './forecastListView.js'
import { STATE } from './state.js'
import { dataService } from './dataService.js'

const contentSwitcher = new ContentSwitcher()

window.addEventListener('load', async () => {
    const forecastListView = new ForecastListView('#tableBody')

    // STATE.citiesList.forEach( async cityId => {
    //     const currentForecast = await dataService.getWeatherForecast(cityId)
    //     STATE.currentForecastList.push(new Forecast(currentForecast))
    //     forecastListView.showForecast()
    // })
    
    const data = await Promise.all(STATE.citiesList.map(cityId => {
        return dataService.getWeatherForecast(cityId)
    }))
    const forecastList = data.map(item => new Forecast(item))

    STATE.currentForecastList = [...STATE.currentForecastList, ...forecastList]
    forecastListView.showForecast()

    


    contentSwitcher.showContent()
    contentSwitcher.disablePreloader()
})