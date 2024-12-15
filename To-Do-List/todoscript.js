const input = document.getElementById("input-box");
	const listContainer = document.getElementById("list-container");

	function addTask()
    {
		if(input.value === '')
		{
			alert("Please Enter Data!")
		}
		else{
			let list = document.createElement("li");
			list.innerHTML= input.value;
			listContainer.appendChild(list);
				let span = document.createElement("span");
					span.innerHTML ="\u00d7";
					list.appendChild(span);
		}
		input.value = "";
		saveData();
	}

	listContainer.addEventListener("click", function(e){
		if(e.target.tagName === "LI"){
			e.target.classList.toggle("checked");
			saveData();
		}
		else if(e.target.tagName === "SPAN"){
			e.target.parentElement.remove();
			saveData();
		}
	},false);

	function saveData(){
		localStorage.setItem("data",listContainer.innerHTML );
	}
	function showTask(){
		listContainer.innerHTML = localStorage.getItem("data");
	}
	showTask();