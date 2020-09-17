import "../css/style.css"

import Search from "./modules/Search"
import Entry from "./modules/Entry"

const entry = new Entry();

if (module.hot) {
	module.hot.accept()
}