let ham = document.getElementById("nav-menu");
let first = ham.getElementsByTagName("div")[0];
let second = ham.getElementsByTagName("div")[1];
let third = ham.getElementsByTagName("div")[2];

let open = false;

ham.addEventListener("click", () => {
	if (open === false) {
		open = true;
		console.log("open");
		second.style.opacity = "0";
		//second.style.right = "250px"

		first.style.transform = "rotate(45deg)";
		first.style.top = "34.2%";
		third.style.transform = "rotate(-45deg)";
		third.style.bottom = "34.2%";
	} else {
		open = false;
		console.log("close");
		second.style.opacity = "1";
		//second.style.right = "0px"

		first.style.transform = "rotate(0deg)";
		first.style.top = "0px";
		third.style.transform = "rotate(0deg)";
		third.style.bottom = "0px";
	}
});
