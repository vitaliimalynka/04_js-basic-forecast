import { getElem } from './helper.js'
import { STATE } from './state.js'
import { Forecast} from './forecast.js'

export class ForecastListView {
    #forecastTableBody

    constructor(tableBodyId) {
        this.#forecastTableBody = getElem(tableBodyId)
    }

    showForecast(item) {
        if(item instanceof Forecast) {
            console.log('item is Forecast')
            this.#forecastTableBody.append(item.createElement())
        } else {
            return
        }
    }
}