console.log("main.js is running");

import config from "./config.js";
import langs from "./langs.js";

// color code blocks
let code_blocks = document.getElementsByClassName("code");
for (const item of code_blocks) {
	const lang = item.getAttribute("data-lang");
	const text = item.querySelector(".text").innerText;
	const tokens = langs[lang].scan(text);
	// console.log(tokens);
}
