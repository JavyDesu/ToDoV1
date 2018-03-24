(function(){
	//variables
	
	var lista= document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar"),
		ayuda = document.getElementById("btn-ayuda");

	//funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);
			
		if (tarea === ""){
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false; //no quiere cambiar color .. REVISAR
		}
		//contenido agregado al enlace
		enlace.appendChild(contenido);
		//establecer atributo href
		enlace.setAttribute("href", "#");
		//agregar enlace a nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		//agregado nueva tarea a la lista
		lista.appendChild(nuevaTarea);
		
		alert("Tarea agregada");
		tareaInput.value = "";
		
		for (var i = 0; i <= lista.children.length -1; i++){
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea")
	};
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};
	
	var instrucciones = function(){
		var ayuda = alert("Se agrega la tarea, y se elimina haciendo click en ella");
	};
	
	//eventos
	//instrucciones de uso
	ayuda.addEventListener("click", instrucciones)
	//agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
	
	//comprobar el input
	tareaInput.addEventListener("click", comprobarInput)
	
	//Borrar elementos de lista
	for (var i = 0; i <= lista.children.length -1; i++){
		lista.children[i].addEventListener("click", eliminarTarea);
	}
	
}());