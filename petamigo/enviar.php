<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = strip_tags($_POST['nome']);
  $email = strip_tags($_POST['email']);
  $mensagem = strip_tags($_POST['mensagem']);

  $para = "seuemail@exemplo.com"; // ← Substitua pelo seu e-mail real
  $assunto = "Nova inscrição no Curso de Inglês";
  $conteudo = "Nome: $nome\nE-mail: $email\n\nMensagem:\n$mensagem";
  $cabecalhos = "From: $email";

  if (mail($para, $assunto, $conteudo, $cabecalhos)) {
    echo "Inscrição enviada com sucesso!";
  } else {
    echo "Erro ao enviar. Tente novamente.";
  }
}
?>