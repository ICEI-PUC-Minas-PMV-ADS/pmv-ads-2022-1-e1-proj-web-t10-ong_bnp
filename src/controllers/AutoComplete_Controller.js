import { AutoComplete_View } from '../views/AutoComplete_View.js';

export class AutoComplete_Controller {

    #Lista_Servicos;
    #Servico_Pesquisado;
    #Render_AutoComplete;

    constructor(Servico_Pesquisado) {

        this.#Lista_Servicos = [
            'Psicologia',
            'Terapia_Ocupacional',
            'Clínica_Geral',
            'Enfermagem',
            'Fisioterapia',
            'Fonoaudiologia',
            'Nutricionista',
            'Advocacia',
            'Assistente_Social',
            'Psicopedagogia',
            'Reforço_Escolar',
            'Cantinho_Aprender',
            'Hotelzinho'
        ];

        this.#Servico_Pesquisado = Servico_Pesquisado;

        this.#Render_AutoComplete = new AutoComplete_View();

    };

    #Filter_Search(Servico_Pesquisado) {
        const Servico_Pesquisado_Formatado = Servico_Pesquisado.replace(' ', '_').toLowerCase();

        let Servicos_Filtrados = this.#Lista_Servicos.filter((Servico) => {
            return Servico.toLowerCase().includes(Servico_Pesquisado_Formatado);
        });

        return Servicos_Filtrados.length === 0 ? ['error'] : Servicos_Filtrados;
    };

    AutoComplete() {

        this.#Servico_Pesquisado.addEventListener('input', ({ target }) => {

            if (target.value) {
                document.querySelector('#ContainerList').style.display = 'initial'
            } else { document.querySelector('#ContainerList').style.display = 'none' }

            const Servico_Filtrado = this.#Filter_Search(target.value);

            this.#Render_AutoComplete.Render(Servico_Filtrado, target.value);

            const Opcoes_Lista = document.querySelectorAll('#Opt');

            for (let Option of Opcoes_Lista) {
                Option.addEventListener('click', (event) => {

                    document.getElementById('CampoList').style.backgroundColor = "transparent";
                    document.getElementById('List').innerHTML = '';

                    target.value = event.target.value.replace('_', ' ');
                    document.querySelector('#ContainerList').style.display = 'none';
                });
            };

        });
    };

};