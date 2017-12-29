<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
	<link rel="stylesheet" href="style.css">
</head>
<body onload="getlog()">
	<h1>PHP and JS with AJAX</h1>
	<div id="forms">
		<h2>GET request</h2>
		<p id="content">This is where the content will go.</p>
		<button id="sendButton" name="test">Send GET request</button>

		<h2>POST request</h2>
		<form action="localhost:8001/chat-room.php" method="POST">
			<div>
		        <label for="username">Name:</label>
		        <input type="text" id="username" name="username" />
		    </div>
		    <div>
		        <label for="msg">Message:</label>
		        <textarea id="msg" name="user_message"></textarea>
		    </div>
		    <div class="button">
		        <button type="button" value="Submit" id="chatButton">Send your message</button>
		    </div>
		</form>
	</div>
	<div id="chatArea">
		<h3>Messages:</h3>
	</div>

	<script src="chat-room.js"></script>
	<script type="text/javascript" src="test-ajax.js"></script>

</body>
</html>