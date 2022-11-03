import config from "./config.js";
const base_url = config.base_url + "/assets/articles";
console.log(base_url);

const BLOG_HTML = document.body.innerHTML;
const BLOG_PATH = document.getElementById("path");
const BLOG_LIST = document.getElementById("list");

const create = function (node) {
	return document.createElement(node);
};

const get_path = function (object, path) {
	if (path === "") {
		return object;
	}
	let items = path.split("/");
	for (const item of items) {
		if (item !== "" && object[item]) {
			object = object[item];
		} else {
			console.error(`Invalid Path: ${path}`);
			return null;
		}
	}
	return object;
};

const create_article = function (article_data) {
	const node = create("div");
	node.setAttribute("class", "list-item");

	const left = create("div");
	left.setAttribute("class", "left");
	const left_title = create("p");
	left_title.setAttribute("class", "title");
	left_title.innerText = article_data.title;
	left.appendChild(left_title);
	const left_tags = create("div");
	left_tags.setAttribute("class", "tags");
	for (const tag of article_data.tags) {
		const tag_label = create("p");
		tag_label.innerText = tag;
		left_tags.appendChild(tag_label);
	}
	left.appendChild(left_tags);

	const right = create("div");
	right.setAttribute("class", "right");
	const right_date = create("p");
	right_date.innerText = article_data.date;
	right.appendChild(right_date);

	node.addEventListener("click", (event) => {
		console.log(article_data.id);
	});

	node.appendChild(left);
	node.appendChild(right);

	return node;
};

const create_category = function (cat) {
	const node = create("div");
	node.setAttribute("class", "list-item");

	const left = create("div");
	left.setAttribute("class", "left");
	const left_title = create("p");
	left_title.setAttribute("class", "title");
	left_title.innerText = cat;
	left.appendChild(left_title);

	node.appendChild(left);

	return node;
};

const load_article = function () {};

fetch(`${base_url}/meta.json`)
	.then((result) => {
		return result.json();
	})
	.then(async (result) => {
		let cats = result.cats;
		let meta = result.meta;
		let ids = Object.keys(meta);

		for (const id of ids) {
			let data = meta[id];
			let category = data.category;
			let object = get_path(cats, category);
			category = category !== "" ? "/" + category + "/" : "/";
			object[id] = data;
			let response = await fetch(`${base_url}${category}${id}`);
			object[id].text = await response.text();
			object[id].id = id;
		}

		console.log(cats);

		for (const key of Object.keys(cats)) {
			let item = cats[key];
			let node = null;
			if (item.hasOwnProperty("title")) {
				node = create_article(item);
			} else {
				node = create_category(key);
			}
			BLOG_LIST.appendChild(node);
		}
	});
