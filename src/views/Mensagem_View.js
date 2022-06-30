export class Mensagem_View {

    #Mensagem;

    constructor(Nome, Servico, Telefone, Email) {
        this.#Mensagem = `
            Olá, me chamo *${Nome}* e gostaria de saber mais sobre o serviço de _*${Servico}*_.
            %0A
            %0A
            Meus dados para contato são:
            %0A
            %0A
            Número: *${Telefone}*
            %0A
            E-mail: *${Email}* 
        `
    };

    Gerar_Mensagem() {
        return this.#Mensagem;
    };
};