export class AutoComplete_View {

    #List_Ancora;

    constructor() {
        this.#List_Ancora = document.getElementById('List');
    }

    Render(Servico_Filtrado, Valor_Input) {

        this.#List_Ancora.innerHTML = `
        ${Servico_Filtrado.map((value) => {

            //Css customizado: Quando nenhum valor for digitado no input não faz nada, se não colocar uma cor de fundo
            document.getElementById('CampoList').style.backgroundColor = value === 'error' || Valor_Input === '' ? '' : "rgba(114, 114, 114, 0.802)";

            return (
                value === 'error' || Valor_Input === '' ? '' : `
                <ul class="ContainerSelect" >
                    <option value=${value} id="Opt" >${value.replace('_', ' ')}</option>
                </ul>
            `)

        }).join('')}
    `;
    };

}