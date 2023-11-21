/** blogroll.js Configuration */

// how many items to list in blogroll
let no_items_to_show = 5;

// list of blogs you want to appear in the blogroll
// these will be shuffled before blogrolls are populated
let blogroll_data = [
	{
		title: "Example Blog",
		url: "https://blog.com"
	}
]

/** blogroll.js logic */

let blogrolls = document.querySelectorAll(".blogroll")
if (blogrolls) {
	blogrolls.forEach((blogroll) => {
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
