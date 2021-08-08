class Validator {
    constructor() {
        this.validations = []
    }

    // iniciar a validação de todos os campos
    validate(form) {
        // pegar os inputs
        let inputs = form.getElementsByTagName('input');

        // transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        // loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function(input) {
            console.log(input);
        });
    }

}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações
submit.addEventListener('click', function(e) {

    // preveni o método de enviar para o servidor
    e.preventDefault();

    validator.validate(form);
});