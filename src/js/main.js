import { ContentSwitcher } from './contentSwitcher.js'

const contentSwitcher = new ContentSwitcher()

window.addEventListener('load', () => {
    contentSwitcher.showContent()
    contentSwitcher.disablePreloader()
})