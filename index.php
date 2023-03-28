<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/login.css">
    <title>Iniciar Sesión</title>
</head>
<body>
    <div class="login-container">
        <form class="login-form" action="index.html" method="POST">
            <label class="login-label" for="username">Nombre de usuario:</label>
            <input class="login-input" type="text" id="username" name="username" placeholder="Escribe tu usuario">
            <label class="login-label" for="password">Contraseña:</label>
            <input class="login-input" type="password" id="password" name="password" placeholder="Ingresa una contraseña">
            <input class="login-button" type="submit" value="Iniciar sesión">
        </form>
    </div>
</body>
</html>