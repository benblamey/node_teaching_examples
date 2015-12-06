<html>

<head>

<script src="jquery-2.1.1.min.js" type="text/javascript"></script>

<script type="text/javascript">



$(document).ready(function() {
	alert('hi');
});

setInterval(function() {
	$.ajax('foo.php');
	//$('#cpu');

}, 3000)

</script>
</head>


<body>

<p>
The CPU load is: <span id="cpu">0</span>&percnt;.
</p>

</body>

</html>
