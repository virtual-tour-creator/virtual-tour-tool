import "../css/style.css"

import Search from "./modules/Search"
import Entry from "./modules/Entry"
import CollectionSlider from "./modules/CollectionSlider"

const entry = new Entry();
const collectionSlider = new CollectionSlider()

if (module.hot) {
	module.hot.accept()
}