export class Validar_Controller {

    #RegexName;
    #RegexEmail;
    #RegexTel;

    constructor() {

        this.#RegexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        this.#RegexEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        this.#RegexTel = /(\+?55)?(0?(([14689][1-9])|(2[12478])|(3[1234578])|(5[1345])|(7[134579])))9[6-9][0-9]{7}/;

    }

    Validar(Nome, Email, Telefone, Servico) {

        //Valida Nome
        if (!this.#RegexName.test(Nome.value) || Nome.value === '') {

            Nome.classList.add('is-invalid')
            return { error: true };

        } else { Nome.classList.remove('is-invalid') };

        //Valida Email
        if (!this.#RegexEmail.test(Email.value) || Email.value === '') {

            Email.classList.add('is-invalid');
            return { error: true }

        } else { Email.classList.remove('is-invalid') };

        //Valida Telefone
        if (!this.#RegexTel.test(Telefone.value) || Telefone.value === '' || Telefone.value.length !== 11) {

            Telefone.classList.add('is-invalid')
            return { error: true }

        } else { Telefone.classList.remove('is-invalid') };

        //Valida Serviço
        if (Servico.value === '') {

            Servico.classList.add('is-invalid')
            return { error: true }

        } else { Servico.classList.remove('is-invalid') };

        return { error: false };
    };
}