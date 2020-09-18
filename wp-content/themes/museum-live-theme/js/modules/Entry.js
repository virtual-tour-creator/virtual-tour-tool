import $ from "jquery"

class Entry {
	constructor() {
		this.events()
	}

	events() {
		$("#entry-info-panel").on("click", ".delete-entry", this.deleteEntry)
		$("#entry-info-panel").on("click", ".edit-entry", this.editEntry.bind(this))
		$("#entry-info-panel").on("click", ".update-entry", this.updateEntry.bind(this))
		$("#entry-creation-panel").on("click", ".create-entry", this.createEntry.bind(this))
		$(".entry-display").on("click", "#index-thumbnail", this.viewEntry.bind(this))
	}

	// Methods
	createEntry(e) {
		// var formData = new FormData();
		// formData.append("file", profilePicInput.files[0]);

		// // upload media
		// $.ajax({
		// 	beforeSend: xhr => {
		// 		xhr.setRequestHeader("X-WP-Nonce", museumData.nonce)
		// 	},
		// 	url: museumData.root_url + "/wp-json/wp/v2/media",
		// 	type: "POST",
		// 	body: formData,
		// 	success: response => {
		// 		console.log(response)
		// 		alert("created media")
		// 	},
		// 	error: response => {
		// 		console.log(response)
		// 	}
		// })

		// upload entry
		var newEntry = {
			"title": $("#entry-title").val(),
			"content": $("#entry-desc").val(),
			"status": "publish",
			"media": [],
			"featured_media": 57,
		}

		$.ajax({
			beforeSend: xhr => {
				xhr.setRequestHeader("X-WP-Nonce", museumData.nonce)
			},
			url: museumData.root_url + "/wp-json/wp/v2/entry",
			type: "POST",
			data: newEntry,
			success: response => {
				location.reload();
				
			},
			error: response => {
				console.log(response)
			}
		})
	}

	editEntry(e) {
		// alert("enable edit");
		$("#entry-view-title, #entry-view-desc").removeAttr("readonly");
	}

	updateEntry(e) {
		// alert("update entry");
		var id = $("#entry-view-title").data("id");
		var updatedEntry = {
			"title": $("#entry-view-title").val(),
			"content": $("#entry-view-desc").val(),
		};

		$.ajax({
			beforeSend: xhr => {
				xhr.setRequestHeader("X-WP-Nonce", museumData.nonce)
			},
			url: museumData.root_url + "/wp-json/wp/v2/entry/" + id,
			type: "PUT",
			data: updatedEntry,
			success: response => {
				// update main page
				// $("#entry-view-title").val(response.title.rendered);
				// $("#entry-view-desc").val(response.content.rendered);
				// alert("deleted " + id);
			},
			error: response => {
				console.log(response)
			}
		})
		$("#entry-view-title, #entry-view-desc").attr("readonly", "readonly");
	}

	deleteEntry(e) {
		// alert($("#entry-view-title").data("id"));
		// var entry = $(e.target).parents(".entry-group");
		var id = $("#entry-view-title").data("id");
		$.ajax({
			beforeSend: xhr => {
				xhr.setRequestHeader("X-WP-Nonce", museumData.nonce)
			},
			url: museumData.root_url + "/wp-json/wp/v2/entry/" + id,
			type: "DELETE",
			success: response => {
				// update main page

				// alert("deleted " + id);
				location.reload();
			},
			error: response => {
				console.log(response)
			}
		})
	}

	viewEntry(e) {
		var entry = $(e.target).parents(".entry-group");
		// alert(entry.data("id"));
		$.ajax({
			beforeSend: xhr => {
				xhr.setRequestHeader("X-WP-Nonce", museumData.nonce)
			},
			url: museumData.root_url + "/wp-json/wp/v2/entry/" + entry.data("id"),
			type: "GET",
			success: response => {
				// insert entry info
				$("#entry-view-title").val(response.title.rendered);
				$("#entry-view-desc").val(response.content.rendered);
				$("#entry-view-title").data("id", entry.data("id"));		
			},
			error: response => {
				console.log(response)
			}
		})
		
	}
}

export default Entry;