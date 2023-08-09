const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', function() {
    const message = messageInput.value.trim();

    if (message !== '') {
        const li = document.createElement('li');
        li.textContent = message;
        chatMessages.appendChild(li);
        messageInput.value = '';
    }
});
