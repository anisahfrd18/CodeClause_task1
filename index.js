<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="chat-container">
        <div id="room-selection">
            <label for="room">Choose a room:</label>
            <select id="room">
                <option value="general">General</option>
                <option value="tech">Tech</option>
                <option value="gaming">Gaming</option>
            </select>
            <button id="join-room">Join Room</button>
        </div>
        <div id="chat-room" class="hidden">
            <div id="messages"></div>
            <input type="text" id="message-input" placeholder="Type your message here">
            <button id="send-message">Send</button>
        </div>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script src="script.js"></script>
</body>
</html>
