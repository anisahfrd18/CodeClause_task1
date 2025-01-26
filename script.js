const socket = io();
let currentRoom = 'general';

document.getElementById('join-room').addEventListener('click', () => {
    const room = document.getElementById('room').value;
    socket.emit('joinRoom', room);
    currentRoom = room;

    document.getElementById('room-selection').classList.add('hidden');
    document.getElementById('chat-room').classList.remove('hidden');
});

document.getElementById('send-message').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message) {
        socket.emit('chatMessage', { room: currentRoom, message });
        messageInput.value = '';
    }
});

socket.on('chatMessage', (message) => {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
