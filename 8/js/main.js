function handlePaste (e) {
	var clipboardData, pastedData;
	e.stopPropagation();
	e.preventDefault();
	clipboardData = e.clipboardData || window.clipboardData;
	pastedData = clipboardData.getData('Text');
	pastedData = pastedData.replace(/(?:\r\n|\r|\n)/g, "<br>");
	this.innerHTML += pastedData;
}
function handleInput () {
	let a = this.innerHTML;
	a = a.replace(/(?:\r\n|\r|\n)/g, "<br>");
	a = a.replace(/<(?!br\s*\/?)[^>]+>/g, '');
	this.innerHTML = a;
}
document.querySelector('[contenteditable]').addEventListener('paste', handlePaste, false);
document.querySelector('[contenteditable]').addEventListener('input', handleInput, false);