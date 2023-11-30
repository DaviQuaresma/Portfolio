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


document.getElementById('downloadButton').addEventListener('click', function() {
var link = document.createElement('a');
link.href = 'https://drive.google.com/uc?export=download&id=1HTl0kf75IbkG_ZkAP-mbKO3J9LppHqjY';
link.download = 'DaviQuaresmaCV.pdf';
link.click();
});