function checkValue2(){
	let search = document.querySelector(".input-search-gray-2")
	let searchInput = search.querySelector("input[type=search]");
	let iconElement = search.querySelector(".btn-input-x");
	if(searchInput.value !== ''){
		iconElement.classList.add("show-x");
	}else{
		iconElement.classList.remove("show-x");
	}
}
function removeContent2() {
	let search = document.querySelector(".input-search-gray-2")
	let searchInput = search.querySelector("input[type=search]");
	searchInput.value = '';
	checkValue2();
}
let fromSearch = document.querySelector('form')
fromSearch?.addEventListener('submit',function(event){
	let input = fromSearch.querySelector('input')
	input?.blur()
	event.preventDefault();
})