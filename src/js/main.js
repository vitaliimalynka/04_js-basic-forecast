import { ContentSwitcher } from './contentSwitcher.js'
import { Forecast } from './forecast.js'
import { ForecastListView } from './forecastListView.js'
import { STATE } from './state.js'
import { dataService } from './dataService.js'

const contentSwitcher = new ContentSwitcher()

window.addEventListener('load', async () => {
    const forecastListView = new ForecastListView('#tableBody')

    STATE.citiesList.forEach( async cityId => {
        const responseObj = await dataService.getWeatherForecast(cityId)
        const currentForecast = new Forecast(responseObj)
        STATE.currentForecastList.push(currentForecast)
        
        forecastListView.showForecast(currentForecast)
    })

    contentSwitcher.showContent()
    contentSwitcher.disablePreloader()
})