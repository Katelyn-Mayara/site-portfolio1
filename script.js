function sendWhatsAppMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const whatsappNumber = "5519983189978"; // número fornecido
    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Mensagem: ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
}

