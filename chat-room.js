// //without JQuery
// document.getElementById('chatButton').addEventListener('click', function() {
// 	var name = document.getElementById("username").value;
// 	var message = document.getElementById("msg").value;

// 	if (name != "" && message != "") {
// 		httpRequest = new XMLHttpRequest();
// 		httpRequest.onreadystatechange = function() {
// 	    	if (httpRequest.readyState === XMLHttpRequest.DONE) {
// 			    if (httpRequest.status === 200) {
// 				    var data = JSON.parse(httpRequest.responseText);
// 				    document.getElementById('chatArea').insertAdjacentHTML('beforeend', '<div class="chat">' + data.name + ':' + '<br/>' + data.message + '</div><br/>');
// 				} else {
// 				    alert('There was a problem with the request.');
// 				}
// 			}
// 		};
// 		httpRequest.open('POST', 'chat-room.php', true);
// 		httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 		httpRequest.send("username=" + name + "&message=" + message);

// 		document.getElementById("username").value = "";
// 		document.getElementById("msg").value = "";
// 	} else {
// 		alert("Please fill out both your name and your message!");
// 	}
	
// });

// function getlog() {
// 	xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function() {
// 		if (xhr.readyState === 4) {
// 	    	if (xhr.status === 200) {
// 			   var data = xhr.responseText;
// 			   console.log(data);
// 			   data = data.replace(/(?:\r\n|\r|\n)/g, '<br />');
// 			   document.getElementById('chatArea').insertAdjacentHTML('beforeend', data);
// 			} else {
// 			    alert('There was a problem with the request.');
// 			}
// 	    }
// 	};
// 	xhr.open("GET", "chatlog.txt", true);
// 	xhr.send();
// }

//with JQuery
$('#chatButton').click(function() {
	var name = $('#username').val();
	var message = $('#msg').val();

	if (name != "" && message != "") {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:8001/chat-room.php',
			crossDomain: true,
			data: 'username=' + name + '&message=' + message
		}).done(function(data) {
			var data = $.parseJSON(data);
			$('#chatArea').append('<div class="chat">' + data.name + ':' + '<br/>' + data.message + '</div><br/>');
			$('#username').val("");
			$('#msg').val("");
		});
	} else {
		alert("Please fill out both your name and your message!");
	}
});

function getlog() {
	$.ajax({
		type: 'GET',
		url: 'chatlog.txt'
	}).done(function(data) {
		data = data.replace(/(?:\r\n|\r|\n)/g, '<br />');
		$('#chatArea').append(data);
	});
}