export class Forecast {
    constructor(forecast) {
        this.name = forecast.name
        this.temp = forecast.main.temp
        this.description = forecast.weather[0].description
        this.icon = forecast.weather[0].icon
    }

    createElement() {
        const div = document.createElement('div')
        
        div.classList.add('table-row')
        div.insertAdjacentHTML('beforeend', 
            `<div class="row-item name">${this.name}</div>`
        )
        div.insertAdjacentHTML('beforeend', 
            `<div class="row-item weather">
                <span class="weather-temp">${this.temp}</span>
                <span class="weather-description">${this.description}</span>
            </div>`
        )
        div.insertAdjacentHTML('beforeend', 
            `<div class="row-item icon">
                <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" />
            </div>`
        )

        return div
    }
}