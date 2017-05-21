var btns = document.querySelectorAll('.buttons .btn');
var cat = document.getElementsByClassName('cat')[0];

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', manageCatClass);
};

function manageCatClass(){
	var dataAdd = this.getAttribute("data-add");
	var dataRemove = this.getAttribute("data-remove");

	if (dataAdd) {
		cat.classList.add(dataAdd);
	};

	if (dataRemove) {
		cat.classList.remove(dataRemove);
	};
}