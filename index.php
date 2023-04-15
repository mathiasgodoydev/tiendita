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
    <form method="post">
    
    <h1>Finina</h1>
    <input type="text" name="name" placeholder="Nombre Completo">
    <input type="email" name="email" placeholder="Email">
    <input type="submit" name="register">
    
    </form>
       
    <?php
    include("registro.php");
    ?>

</body>
</html>