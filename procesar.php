<?php

// Recibimos los datos del formulario usando el array $_POST
$nombre = htmlspecialchars($_POST['nombre']);
$edad = (int) $_POST['edad'];

// Imprimimos la respuesta dinámica
echo 'Hola, ' . $nombre . '.';
echo ' Tienes ' . $edad . ' años.';

?>