const emailSpan = document.getElementById('email');
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
    const emailText = emailSpan.textContent;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = emailText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    //emailSpan.style.display = 'none'; // Oculta o email após a cópia

    copyButton.textContent = 'Email Copiado!';
    copyButton.classList.add('copied'); // Adiciona a classe "copied" para mudar a cor

    setTimeout(() => {
        emailSpan.style.display = 'inline'; // Exibe o email novamente
        copyButton.textContent = 'Copiar Email';
        copyButton.classList.remove('copied'); // Remove a classe "copied" para voltar à cor inicial
    }, 3000);
});

