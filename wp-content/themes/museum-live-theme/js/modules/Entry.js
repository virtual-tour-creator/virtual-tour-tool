import $ from "jquery"

class Entry {
	constructor() {
		this.events()
	}

	events() {
		$("#entry-info-panel").on("click", ".delete-entry", this.deleteEntry)
		// $("#entry-info-panel").on("click", ".update-entry", this.updateEntry.bind(this))
		$("#entry-info-panel").on("click", ".create-entry", this.createEntry.bind(this))
	}

	// Methods
	createEntry(e) {
		var newEntry = {
			"title": "new title",
			"content": "new content",
			"status": "publish"
		}

		$.ajax({
			beforeSend: xhr => {
				xhr.setRequestHeader("X-WP-Nonce", museumData.nonce)
			},
			url: museumData.root_url + "/wp-json/wp/v2/entry",
			type: "POST",
			data: newEntry,
			success: response => {
				console.log(response)
			},
			error: response => {
				console.log(response)
			}
		})
		alert("created")
	}

	editEntry(e) {

	}

	deleteEntry(e) {
		alert("deleted")
	}
}

export default Entry;