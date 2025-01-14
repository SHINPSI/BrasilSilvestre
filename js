
script.js

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: adicionar um evento de clique ao botão de busca
    const searchButton = document.querySelector('.bg-yellow-500');
    searchButton.addEventListener('click', function() {
        const searchInput = document.querySelector('input[placeholder="Buscar no Brasil Silvestre"]');
        if (searchInput.value.trim() === "") {
            alert('Por favor, insira um termo de busca.');
        } else {
            alert('Você buscou por: ' + searchInput.value);
            // Aqui você pode adicionar lógica para redirecionar ou buscar resultados
        }
    });

    // Validação do formulário de agendamento
    const form = document.querySelector('form[action="pagina_confirmacao.html"]');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;

        if (name === "" || email === "" || phone === "" || service === "" || date === "") {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault(); // Impede o envio do formulário
        } else {
            alert('Agendamento realizado com sucesso!');
            // Aqui você pode adicionar lógica para enviar os dados para o servidor
        }
    });
});
