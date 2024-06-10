function checkCode() {
    const correctCode = '0204'; // Set the correct code here
    const userCode = document.getElementById('codeInput').value;
    const messageElement = document.getElementById('message');
    const inputContainer = document.getElementById('inputContainer');
    const textContainer = document.getElementById('textContainer');

    if (userCode === correctCode) {
        messageElement.textContent = 'Шөнө болоо юу?';
        messageElement.style.color = 'green';
        
        // After a few seconds, hide the input container and show the full paragraph
        setTimeout(() => {
            inputContainer.classList.add('hidden');
            textContainer.classList.remove('hidden');
        }, 3000); // 3 seconds delay
    } else {
        messageElement.textContent = 'Өдөр онгойдоггүй шүү. It opens when moon was created.';
        messageElement.style.color = 'red';
    }
}
