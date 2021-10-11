<?php
$nombre = $_POST['name'];
$mail = $_POST['email'];
$comentarios = $_POST['message'];

$header = "Enviado desde mi pagina";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $comentarios . " \r\n";


$para = 'basura@cancelos.com.ar';
$asunto = 'Mensaje de mi sitio web';

mail($para, $asunto, $mensaje, $header);

header("Location:index.html");
?>
