document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('mybutton');

    button.addEventListener('click', function () {
        console.log('Botão clicado!');
        button.classList.toggle('active');
    });
});
console.log("Script carregado com sucesso!");