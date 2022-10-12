console.clear();

const url = window.location.href;
const name = url.match(/\/(\w+)$/);

console.log("name: " + name);
