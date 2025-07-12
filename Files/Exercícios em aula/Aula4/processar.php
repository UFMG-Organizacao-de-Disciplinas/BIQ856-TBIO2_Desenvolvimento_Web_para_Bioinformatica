<?php
// Exibe todos os valores enviados pelo formulário via POST
  $nome = $_POST['nome'] ?? 'Nome não fornecido';
  $email = $_POST['email'] ?? 'Email não fornecido';
  echo "Nome: $nome<br>";
  echo "Email: $email<br>";
?>