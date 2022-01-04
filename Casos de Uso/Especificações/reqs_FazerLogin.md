# Caso de Uso: Fazer Login

### Sumário: 
Este caso de uso permite que um aluno de ecomp ou professor de ecomp faça login no site.

### Ator:
Aluno de Ecomp e Professor de Ecomp.

### Pré condições: 
É necessário que o usuário não esteja logado no site.

### Pós Condição:
- O Aluno, com dados válidos, é levado para a página do aluno.
- O Professor, com dados válidos, é levado para a página do professor.

### Base Sequence:
1) O usuário acessa o site do SITCC.
2) O usuário clica em "Acessar o Sistema".
3) O usuário preenche os campos com seu E-mail cadastrado e sua Senha cadastrada.
4) O usuário caso seja um aluno, clica em "Login de Aluno", e caso seja um professor, clica em "Login de Professor".
5) Com dados validos, o aluno ou professor acessa o sistema.

### Branch Sequence:
1) O usuário acessa o site do SITCC.
2) O usuário clica em "Acessar Lista de TCC's Concluídos".
3) O usuário clica em "Acessar o Sistema".
4) O usuário preenche os campos com seu E-mail cadastrado e sua Senha cadastrada.
5) O usuário caso seja um aluno, clica em "Login de Aluno", e caso seja um professor, clica em "Login de Professor".
6) Com dados validos, o aluno ou professor acessa o sistema.

### Exception Sequence:
1) O usuário acessa o site do SITCC.
2) O usuário clica em "Acessar o Sistema".
3) O usuário não preenche todos os campos necessários para o login.
4) O usuário clica em "Login de Aluno" ou "Login de Professor"
5) O usuário é notificado que precisa preencher todos os campos necessários para conseguir realizar o login com sucesso.
