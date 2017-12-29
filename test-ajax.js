//without JQuery
document.getElementById('sendButton').addEventListener('click', function() {
	httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
    	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		    if (httpRequest.status === 200) {
			    var response = httpRequest.responseText;
			    document.getElementById('content').textContent = response;
			} else {
			    alert('There was a problem with the request.');
			}
		} else {
		}
	};
	httpRequest.open('GET', 'test-ajax.php', true);
	httpRequest.send(null);
});

//with JQuery
// $('#sendButton').click(function() {
// 	$.ajax({
// 		type: 'GET',
// 		url: 'test-ajax.php',
// 	}).done(function(data) {
//         $('#content').text(data);
// 	});
// });
