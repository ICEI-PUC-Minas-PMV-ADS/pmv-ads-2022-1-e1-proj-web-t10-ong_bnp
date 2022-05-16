//Pega cada input pelo seu ID:
const ValueInputs = {
    DataName: document.querySelector('#Name'),
    DataEmail: document.querySelector('#Email'),
    DataTel: document.querySelector('#Tel'),
    DataServicos: document.querySelector('#Servicos'),
};

//Pega cada label pelo seu ID:
const ValueLabels = {
    DataLabelName: document.querySelector('#LabelName'),
    DataLabelEmail: document.querySelector('#LabelEmail'),
    DataLabelTel: document.querySelector('#LabelTel'),
    DataLabelServicos: document.querySelector('#LabelServicos'),
};

//Número do WhatsApp da ONG (país+ddd+número):
const Number = '5531983083705';

//Lista de serviços oferecidos pela ONG:
const ServicosOfertado = [
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
    'Hotelzinho',
];



//Recebe como parâmetro o valor (string) que é digitado no input de pesquisa e retorna os valores filtrados:
const AutoComplete = (ServisoSolicitado) => {
    
    const ServicoFormatUnderlin = ServisoSolicitado.replace(' ', '_');

    const ValueFilter = ServicosOfertado.filter((valor) => {
        
        const valorMinusculo = valor.toLowerCase();
        const ServisoSolicitadoMinusculo = ServicoFormatUnderlin.toLowerCase();

        return valorMinusculo.includes(ServisoSolicitadoMinusculo)
    });

    return ValueFilter.length === 0? ['error'] : ValueFilter

};

//Retorna o valor filtrado na tela do usuário:
ValueInputs.DataServicos.addEventListener('input', ({ target }) => {

    //Valor que está sendo digitado no input
    const DadosDoCampo = target.value;
    
    //Retorno da função que filtra a lista de serviços disponíveis
    const AutoCompleteValores = AutoComplete(DadosDoCampo);

    //Mapeia os valores filtrados e retorna uma lista deles na tela:
    document.getElementById('List').innerHTML = `
        ${AutoCompleteValores.map((value) => {
            
            //Css customizado: Quando nenhum valor for digitado no input não faz nada, se não colocar uma cor de fundo
            document.getElementById('CampoList').style.backgroundColor = value === 'error' || target.value === ''? '' : "rgba(114, 114, 114, 0.802)";
            
            return ( 
                value === 'error' || target.value === '' ? '' : `
                <ul class="ContainerSelect" >
                    <option value=${ value } id="Opt" >${ value.replace('_', ' ') }</option>
                </ul>
            `)

        }).join('')}
    `;

    //Seleciona todos as opções do autocomplete:
    const ListOption = document.querySelectorAll('#Opt');

    //Lista cada uma das opções, adiciona um evento de click em cada uma delas
    for (let Option of ListOption) {
        Option.addEventListener('click', (event) => { 

            //Tira a lista de auto complete da tela:
            document.getElementById('CampoList').style.backgroundColor = "transparent";
            document.getElementById('List').innerHTML = '';

            //O input de serviços passa a ter o valor de uma das opções do autocomplete:
            ValueInputs.DataServicos.value = event.target.value.replace('_', ' ');
        });
    };
    
});



//Regex - Não permite caracteres especiais:
const RegexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const RegexEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const RegexTel = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

//Testando o nome do usuário:
const TestInputName = (Data) => {

    //Verificando se o campo não está vazio:
    if (Data.value === '') {
        return {
            error: true,
            message: 'Campo obrigatório'
        };
    };

    //Convertendo a primeira letra do nome e sobre nome maiúscula:
    const StringCaptalize = Data.value.toLowerCase().split(' ').map((TextPart) => {
        return TextPart[0].toUpperCase() + TextPart.slice(1);
    }).join(' ');

    //Contando a quantidade de palavras do nome
    const TwoString = Data.value.split(' ').length;

    //Verificando se não existe caracteres especiais no nome ou números:
    if (!RegexName.test(StringCaptalize)) {
        return {
            error: true,
            message: 'Não deve conter caracteres especiais ou números'
        };
    };
    
    //Verificando se foi inserido nome e sobre nome:
    if (TwoString < 2) {
        return {
            error: true,
            message: 'É necessário informar seu nome completo'
        };
    };

    return {
        error: false,
        message: ''
    };
};

//Testando o email do usuário:
const TestInputEmail = (Data) => {

    //Verificando se o campo não está vazio:
    if (Data.value === '') {
        return {
            error: true,
            message: 'Campo obrigatório'
        };
    };

    //Verificando se o e-mail tem um formato válido:
    if (!RegexEmail.test(Data.value)) {
        return {
            error: true,
            message: 'Formato do e-mail inválido'
        };
    }

    return {
        error: false,
        message: ''
    };
};

//Testando o telefone do usuário:
const TestInputTel = (Data) => {

    //Verificando se o campo não está vazio:
    if (Data.value === '') {
        return {
            error: true,
            message: 'Campo obrigatório'
        };
    };

    //Verificando se o telefone tem um formato válido:
    if (!RegexTel.test(Data.value)) {
        return {
            error: true,
            message: 'Número de telefone inválido'
        };
    }

    return {
        error: false,
        message: ''
    };
};

//Testando o telefone do usuário:
const TestInputServicos = (Data) => {

    const ServicoValue = Data.value;

    //Verificando se o campo não está vazio:
    if (Data.value === '') {
        return {
            error: true,
            message: 'Campo obrigatório'
        };
    };

    //Verificando se o serviço inserido existe:
    const ServicoFilter = ServicosOfertado.filter((Servico) => Servico === ServicoValue.replace(' ', '_')? Servico : '');

    if (ServicoFilter[0]) {
        return {
            error: false,
            message: ''
        };
    } else {
        return {
            error: true,
            message: 'Esse serviço não existe! Selecione ou insira um serviço válido'
        };
    };
};



//Css para erros:
const StyledError = (Type) => {
    document.getElementById(`${Type}`).style.borderColor = 'red'
    document.getElementById(`Label${Type}`).style.color = 'red'
    document.getElementById(`Label${Type}`).style.marginBottom = '15px'
};

const StyledTrue = (Type) => {
    document.getElementById(`${Type}`).style.borderColor = '#3A89C9'
    document.getElementById(`Label${Type}`).style.color = '#3A89C9'
    document.getElementById(`Label${Type}`).style.marginBottom = '0px'
};

//Formata o número de telefone que será criado
let NumberFormat = '';

ValueInputs.DataTel.addEventListener('input', ({ target }) => {
    const NumberTel = target.value;

    const DDD = NumberTel.slice(0,2);
    const PrimaryNumber = NumberTel.slice(2,7);
    const SecondaryNumber = NumberTel.slice(7,11);

    NumberFormat = `+55 (${DDD}) ${PrimaryNumber}-${SecondaryNumber}`;
}); 


//Redireciona o usuário para o WhatsApp da ONG e envia a mensagem customizada automaticamente:
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    //Mensagem Customizada:
    let Msg = '';

    Msg = `
        Olá, me chamo *${ValueInputs.DataName.value}* e gostaria de saber mais sobre o serviço de _*${ValueInputs.DataServicos.value}*_.
        %0A
        %0A
    Meus dados para contato são:
        %0A
        %0A
        Número: *${NumberFormat}*
        %0A
        E-mail: *${ValueInputs.DataEmail.value}* 
    `
    
    //Pegando o valor dos inputs:
    const IsErrorName = TestInputName(ValueInputs.DataName);
    const IsErrorEmail = TestInputEmail(ValueInputs.DataEmail);
    const IsErrorTel = TestInputTel(ValueInputs.DataTel);
    const IsErrorServicos = TestInputServicos(ValueInputs.DataServicos);

    //Verificando o nome do usuário
    if (IsErrorName.error) {
        ValueLabels.DataLabelName.innerHTML = `<div>${IsErrorName.message}</div>`
        StyledError('Name');
        return undefined
    } else {
        ValueLabels.DataLabelName.innerHTML = ''
        StyledTrue('Name');
    };

    //Verificando o email do usuário
    if (IsErrorEmail.error) {
        ValueLabels.DataLabelEmail.innerHTML = `<div>${IsErrorEmail.message}</div>`
        StyledError('Email');
        return undefined
    } else {
        ValueLabels.DataLabelEmail.innerHTML = ''
        StyledTrue('Email');
    };

    //Verificando o telefone do usuário
    if (IsErrorTel.error) {
        ValueLabels.DataLabelTel.innerHTML = `<div>${IsErrorTel.message}</div>`
        StyledError('Tel');
        return undefined
    } else {
        ValueLabels.DataLabelTel.innerHTML = ''
        StyledTrue('Tel');
    };
    
    //Verificando se algum serviço foi selecionado
    if (IsErrorServicos.error) {
        ValueLabels.DataLabelServicos.innerHTML = `<div>${IsErrorServicos.message}</div>`
        StyledError('Servicos');
        return undefined
    } else {
        ValueLabels.DataLabelServicos.innerHTML = ''
        StyledTrue('Servicos');
    };

    window.open(`https://web.whatsapp.com/send?phone=${Number}&text=${Msg}`)
});