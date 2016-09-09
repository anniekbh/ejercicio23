window.addEventListener("load", function() {
    var boton = document.getElementById("boton");
        boton.addEventListener("click", function(){
            var nombre = document.getElementById("nombrePersona").value;
            var edad = parseInt(document.getElementById("numero").value);
            var sexo = document.getElementById("masfem").value;
            var resultado = new Persona(nombre, edad,sexo);
            document.getElementById("resultado").innerHTML= resultado.presentacion();
           
    });
    function Persona(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad
        this.sexo = sexo;
        this.mayorDeEdad = (this.edad >= 18);
        this.presentacion = function(){
        	return "Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años "+ ((this.mayorDeEdad) ? "y soy mayor de edad" : "y soy menor de edad");
            };
    };  
    
});