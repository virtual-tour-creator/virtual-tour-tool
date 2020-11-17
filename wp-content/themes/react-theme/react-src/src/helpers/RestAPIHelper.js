
export function parseContent(content) {
    let info = {
        'stopIds': [],
        'tourDate': "",
        'visibility': ""
    };
    let res = content.match(/<li>\d+<\/li>/gm);
    let stops = res ? res.map(item => {
        let idStr = item.slice(4, -5)
        return parseInt(idStr);
    }) : [];
    info.stopIds = stops;
    res = content.match(/<h2>TourDate:.+<\/h2>/gm);
    let date = res ? res[0].slice(4, -5).split(":")[1] : "";
    info.tourDate = date;
    res = content.match(/<h2>Visibility:.+<\/h2>/gm);
    let status = res ? res[0].slice(4, -5).split(":")[1] : "public";
    info.visibility = status;
    return info;
}

function getTourContent(title, date, visibility, stops) {
    let str = "<ol>";
    if (stops)
        stops.map(stop => {
            const { id } = stop;
            str += "<li>";
            str += id.toString();
            str += "</li>"
        });
    str += "</ol>"

    str += "<h2>TourDate:";
    str += date;
    str += "</h2>";

    str += "<h2>Visibility:";
    str += visibility;
    str += "</h2>";

    return str;
}

export async function RestAPICreateTour(title, date, visibility, stops) {
    const data = {
      "title": title,
      "status": "publish",
      "content": getTourContent(title, date, visibility, stops)
    };

    const response = await fetch('/wp-json/wp/v2/tour/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': reactInit.nonce
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        console.log(response);
        return -1;
    }

    const tour = await response.json();
    return tour.id;
}

export async function RestAPIGetStopById(id, time, callback) {
    const response = await fetch('/wp-json/wp/v2/stop/' + id + '?timestamp=' + time);
    if(!response.ok) {
        console.log(response);
        return;
    }

    const stop = await response.json();
    callback(stop);
}

export async function RestAPIGetTourByAuthorId(author, per_page, page_num, time, callback) {
    const response = await fetch('/wp-json/wp/v2/tour/?timestamp=' + time + '&author=' + author + '&per_page=' + per_page + '&page=' + page_num);
    if(!response.ok) {
        console.log(response);
        return;
    }

    const tours = await response.json();
    const total_page_num = response.headers.get('x-wp-totalPages');
    callback(tours, total_page_num);
}

export async function RestAPIGetStopsByPage(per_page, page_num, time, callback) {
    const response = await fetch('/wp-json/wp/v2/stop/?timestamp=' + time + '&per_page=' + per_page + '&page=' + page_num);
    if(!response.ok) {
        console.log(response);
        return;
    }

    const stops = await response.json();
    const total_page_num = response.headers.get('x-wp-totalPages');
    callback(stops, total_page_num);
}

export async function RestAPIGetStopsBySearch(search_keyword, per_page, page_num, time, callback) {
    const response = await fetch('/wp-json/wp/v2/stop/?timestamp=' + time + '&search=' + search_keyword + '&per_page=' + per_page + '&page=' + page_num);
    if(!response.ok) {
        console.log(response);
        return;
    }

    const stops = await response.json();
    const total_page_num = response.headers.get('x-wp-totalPages');
    callback(stops, total_page_num);
}

export async function RestAPIGetTourByPage(per_page, page_num, time, callback) {
    const response = await fetch('/wp-json/wp/v2/tour/?timestamp=' + time + '&per_page=' + per_page + '&page=' + page_num);
    if(!response.ok) {
        console.log(response);
        return;
    }

    const tours = await response.json();
    const total_page_num = response.headers.get('x-wp-totalPages');
    callback(tours, total_page_num);
}

export async function RestAPIDeleteTour(id, callback) {
    const response = await fetch('/wp-json/wp/v2/tour/' + id, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': reactInit.nonce
        },
    });

    if(!response.ok) {
        console.log(response);
    }
    const tour = await response.json();
    callback();
}
