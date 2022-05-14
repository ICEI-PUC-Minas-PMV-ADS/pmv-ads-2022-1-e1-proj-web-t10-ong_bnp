const DataName = document.querySelector('#Name');
const DataEmail = document.querySelector('#Email');
const DataTelefone = document.querySelector('#Telefone');
const DataServicos = document.querySelector('#Servicos');

let Msg = '';

SendData = () => {
    Msg = `
        Olá, me chamo *${DataName.value}* e gostaria de saber mais sobre o serviço de _*${DataServicos.value}*_.
        %0A
        %0A
Meus dados para contato são:
        %0A
        %0A
        Número: *${DataTelefone.value}*
        %0A
        E-mail: *${DataEmail.value}* 
    `
};

SendForm = () => {

    window.open(`https://web.whatsapp.com/send?phone=5531983083705&text=${Msg}`)

};

const AutoComplete = (ServisoSolicitado) => {
    const ServicosOfertado = [
        'Psicologia', 
        'Terapia Ocupacional',
        'Clínica Geral',
        'Enfermagem',
        'Fisioterapia',
        'Fonoaudiologia',
        'Nutricionista',
        'Advocacia',
        'Assistente Social',
        'Psicopedagogia',
        'Aula de reforço',
        'Cantinho do Aprender',
        'Hotelzinho',
    ];

    return ServicosOfertado.filter((valor) => {
        
        const valorMinusculo = valor.toLowerCase();
        const ServisoSolicitadoMinusculo = ServisoSolicitado.toLowerCase();

        return valorMinusculo.includes(ServisoSolicitadoMinusculo)
    });

};

DataServicos.addEventListener('input', ({ target }) => {

    const DadosDoCampo = target.value;
    
    if(DadosDoCampo.length !== '') {
        const AutoCompleteValores = AutoComplete(DadosDoCampo);

        document.getElementById('ListScroll').style.backgroundColor = target.value === ''? '': "rgba(114, 114, 114, 0.802)";

        document.getElementById('List').innerHTML = `
            ${AutoCompleteValores.map((value) => {
                
                return ( 
                    target.value === '' ? '' : `
                    <ul class="ContainerSelect" >
                        <option id="Opt" value=${ value.length } >${ value }</option>
                    </ul>
                `)

            }).join('')}
        `;
    };
});