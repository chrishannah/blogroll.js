# blogroll.js

A fun little script to add a simple blogroll to your site. You can can add as many blogs as you like, specify the number of blogs you want to appear at one time, and the script will make sure a new random subset is shown.

## Usage

First of all, you need your blogroll data in a json file. (Refer to [example-data.json](example-data.json) for an example list)

Essentially, it's an array of JSON objects that have both a title and a url. This data is used to populate the blogroll.

It looks something like this:

```json
[
	{
		"title": "Example Blog",
		"url": "https://blog.com"
	}
]
```

Then you'll need to make sure that the `blogroll.js` script is loaded, adding `defer` so that it is executed once the page has finished loading:

```js
<script src="blogroll.js" defer></script>
```

Then add any HTML element with the class `blogroll`. The script will then build a simple unordered list element and add it as a child element:

```html
<h3>Blogroll</h3>
<p class="blogroll" data-max-items="2" data-blogroll-file="blogroll-data.json"></p>
```

To customise the number of items to show at a single time, you can change the `data-max-items` of the associated element. If this is not set, 5 will be used as a default value.

And of course, you will need to provide the location of the blogroll JSON data file. This should be provided via a `data-blogroll-file` attribute.

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
