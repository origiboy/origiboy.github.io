function handlePaste (e) {
	var clipboardData, pastedData;
	e.stopPropagation();
	e.preventDefault();
	clipboardData = e.clipboardData || window.clipboardData;
	pastedData = clipboardData.getData('Text');
	pastedData = pastedData.replace(/(?:\r\n|\r|\n)/g, "<br>");
	this.innerHTML += pastedData;
}
function handleInput (e) {
    if (e.inputType === "insertFromDrop") {
        let a = this.innerHTML;
	a = a.replace(/(?:\r\n|\r|\n)/g, "<br>");
	a = a.replace(/<(?!br\s*\/?)[^>]+>/g, '');
	this.innerHTML = "";
	this.innerHTML += a;
	this.innerHTML += "\r\n";
	/*var el = document.querySelector('[contenteditable]');
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(el.childNodes[0], 8);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
	*/
    }
	
}

document.querySelector('[contenteditable]').addEventListener('paste', handlePaste, false);
document.querySelector('[contenteditable]').addEventListener('input', handleInput, false);
