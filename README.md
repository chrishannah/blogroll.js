# blogroll.js

A fun little script to add a simple blogroll to your site. You can can add as many blogs as you like, specify the number of blogs you want to appear at one time, and the script will make sure a new random subset is shown.

## Usage

Inside the `blogroll.js` file, add your list of blogs, and also choose how many you want to appear:

```js
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
```

Load the script as you would any other JavaScript script, adding `defer` so that it is executed once the page has finished loading:

```js
<script src="blogroll.js" defer></script>
```

Then add any HTML element with the class `blogroll`. The script will then build a simple UL element and add it as a child element:

```html
<h3>Blogroll</h3>
<p class="blogroll"></p>
```

If you want some basic styling, you can start here:

```css
/* blogroll.js basic style */

.blogroll ul {
  list-style: none;
  padding-inline-start: 0;
}

.blogroll ul li a {
  text-decoration: wavy underline;
}
```
