import { getElem } from './helper.js'
import { STATE } from './state.js'

export class ForecastListView {
    #forecastTableBody

    constructor(tableBodyId) {
        this.#forecastTableBody = getElem(tableBodyId)
    }

    showForecast() {
        console.log(JSON.parse(JSON.stringify(STATE.currentForecastList)))
        if(!STATE.currentForecastList) {
            return
        }

        STATE.currentForecastList.forEach(item => {
            this.#forecastTableBody.append(item.createElement())
        })
    }
}