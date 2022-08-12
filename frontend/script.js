const headerComponent = function() {
   return `
    <header>
	<h3 class="logo">${books.logo}</h3>
	<span class="material-symbols-outlined" id="menu">
		menu
		</span>
    </header>
    `
}


const loadEvent = function () {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", headerComponent())
    

}

window.addEventListener("load", loadEvent)