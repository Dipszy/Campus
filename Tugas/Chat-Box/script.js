function addMessage(content, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    
    const bubbleElement = document.createElement('div');
    bubbleElement.classList.add('chat-bubble', sender);
    bubbleElement.innerText = content;
  
    messageElement.appendChild(bubbleElement);
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const userMessage = input.value.trim().toLowerCase();
    if (userMessage) {
        addMessage(userMessage, 'user');
        let botReply = '';
        if (userMessage === 'hallo') {
            botReply = 'Hallo juga!';
        } else if (userMessage === 'owner?') {
            botReply = 'Dower';
        } else {
            botReply = `Anda mengatakan: "${userMessage}"`;
        }

        setTimeout(() => {
            addMessage(botReply, 'bot');
        }, 500); 
    }

    input.value = ''; 
    return false; 
}

function toggleChatBox() {
    const chatBoxContainer = document.getElementById('chat-box-container');
    if (chatBoxContainer.style.display === 'block') {
      chatBoxContainer.style.display = 'none';
    } else {
      chatBoxContainer.style.display = 'block';
    }
}
