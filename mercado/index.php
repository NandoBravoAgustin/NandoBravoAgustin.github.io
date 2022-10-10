<?php 

	require __DIR__  . '/vendor/autoload.php';
	$access_token="TEST-2598719965489646-100713-482299034c6ec5e99e5e814b4ca7bad2-291547864";
	MercadoPago\SDK::setAccessToken($access_token);
	
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<!--  SDK MercadoPago.js V2 -->

	<div class="cho-container"></div>
	<script src="https://sdk.mercadopago.com/js/v2"></script>
	<script>
	  const mp = new MercadoPago('TEST-8e72af5b-1fb5-43f1-93d6-9094b93240d1', {
	    locale: 'es-AR'
	  });

	  mp.checkout({
	    preference: {
	      id: 'YOUR_PREFERENCE_ID'
	    },
	    render: {
	      container: '.cho-container',
	      label: 'Pagar',
	    }
	  });
	</script>
</body>
</html>				