export class Formatar {
    static Telefone(Tel) {

        const DDD = Tel.slice(0, 2);
        const PrimaryNumber = Tel.slice(2, 7);
        const SecondaryNumber = Tel.slice(7, 11);

        return `+55 (${DDD}) ${PrimaryNumber}-${SecondaryNumber}`;
    };
};