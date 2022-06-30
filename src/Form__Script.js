import { Formulario } from "./models/Formulario.js";

const Form = new Formulario();

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    Form.Enviar();
});

document.querySelector('#NavItem-1').addEventListener('click', () => {
    document.querySelector('#navbarSupportedContent').classList.remove('show')
});
document.querySelector('#NavItem-2').addEventListener('click', () => {
    document.querySelector('#navbarSupportedContent').classList.remove('show')
});
document.querySelector('#NavItem-3').addEventListener('click', () => {
    document.querySelector('#navbarSupportedContent').classList.remove('show')
});
document.querySelector('#NavItem-4').addEventListener('click', () => {
    document.querySelector('#navbarSupportedContent').classList.remove('show')
});
document.querySelector('#NavItem-5').addEventListener('click', () => {
    document.querySelector('#navbarSupportedContent').classList.remove('show')
});