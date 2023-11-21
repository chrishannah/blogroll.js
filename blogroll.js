/* blogroll.js */

let blogrolls = document.querySelectorAll(".blogroll")
if (blogrolls) {
	blogrolls.forEach(async (blogroll) => {
		var no_items_to_show = blogroll.getAttribute('data-max-items')
		if (no_items_to_show == null) {
			no_items_to_show = 5
		}
		let blogroll_data_location = blogroll.getAttribute('data-blogroll-file')
		let blogroll_data = await getBlogrollData(blogroll_data_location)
		let items_to_show = shuffle(blogroll_data).slice(0, no_items_to_show)
		let blogroll_list = createBlogrollList(items_to_show)
		blogroll.appendChild(blogroll_list);
	})
}

function createBlogrollList(items) {
	let list = document.createElement('ul')
	items.forEach((item) => {
		let a = document.createElement('a')
		a.href = item.url
		a.textContent = item.title
		let li = document.createElement('li');
		li.appendChild(a)
		list.appendChild(li)
	})
	return list
}

function shuffle(array) {
	let currentIndex = array.length, randomIndex;
	while (currentIndex > 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}
	return array;
}

async function getBlogrollData(blogroll_data_location) {
	const response = await fetch(blogroll_data_location)
	return await response.json()
}
