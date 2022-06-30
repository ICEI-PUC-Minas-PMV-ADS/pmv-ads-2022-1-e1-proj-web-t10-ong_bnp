import { AutoComplete_Controller } from "../controllers/AutoComplete_Controller.js";
import { Validar_Controller } from "../controllers/Validar_Controller.js";
import { Formatar } from "../controllers/Formatar_Controller.js";
import { Mensagem_View } from "../views/Mensagem_View.js";

export class Formulario {

    #Nome;
    #Email;
    #Telefone
    #Servico;
    
    #Validador;
    #Telefone_ONG = '5531983083705';

    constructor() {
        this.#Nome = document.querySelector('#Name');
        this.#Email = document.querySelector('#Email');
        this.#Telefone = document.querySelector('#Tel');
        this.#Servico = document.querySelector('#Servicos');

        new AutoComplete_Controller(this.#Servico).AutoComplete();

        this.#Validador = new Validar_Controller();
    };

    #Limpar_Formulario() {
        this.#Nome.value = '';
        this.#Email.value = '';
        this.#Telefone.value = '';
        this.#Servico.value = '';
    };

    Enviar() {
        let isValid = this.#Validador.Validar(this.#Nome, this.#Email, this.#Telefone, this.#Servico);

        if (!isValid.error) {
            let Telefone_Fomatado = Formatar.Telefone(this.#Telefone.value);

            let Mensagem = new Mensagem_View(

                this.#Nome.value,
                this.#Email.value,
                Telefone_Fomatado,
                this.#Servico.value

            ).Gerar_Mensagem();

            this.#Limpar_Formulario();

            window.open(`https://web.whatsapp.com/send?phone=${this.#Telefone_ONG}& text=${Mensagem} `)
        };

    };

}