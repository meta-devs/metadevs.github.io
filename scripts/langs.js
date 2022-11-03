const is_whitespace = function(char) {
	return char === "" || char === " " || char === "\t"
}

export default {
	lua51: {
		name: "lua 5.1",
		syntax: {
			keywords: [
				"and",
				"break",
				"do",
				"else",
				"elseif",
				"end",
				"false",
				"for",
				"function",
				"if",
				"in",
				"local",
				"nil",
				"not",
				"or",
				"repeat",
				"return",
				"then",
				"true",
				"until",
				"while",
			],
			operators: [
				"+",
				"-",
				"*",
				"/",
				"%",
				"^",
				"#",
				"==",
				"~=",
				"<=",
				">=",
				"<",
				">",
				"=",
				"(",
				")",
				"{",
				"}",
				"[",
				"]",
				";",
				":",
				",",
				"..",
				"...",
			],
			number: ["/^\\d*\\.?\\d*$/", "/^0x[\\da-fA-F]+$/"],
		},
		scan: (src) => {
            const tokens = [];
			const length = src.length;
			let buffer = "";
            let index = 0;
			while (index < length) {
				const c = src.charAt(index);
				if (!(buffer === 0 && is_whitespace(c))) {
					console.log(c);
				}
				index += 1;
			}
        },
	},
};
