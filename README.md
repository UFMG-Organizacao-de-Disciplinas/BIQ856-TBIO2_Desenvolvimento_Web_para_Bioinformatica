# BIQ856-TBIO2_Desenvolvimento_Web_para_Bioinformatica

## Aula 1

### Slide: Introdução

#### Cronograma

- Segunda
  - Parte 1: Revisão HTML básico
  - Parte 2: Revisão CSS
- Terça
  - Parte 1: Git e GitHub
  - Parte 2: Design Responsivo com Bootstrap CSS
- Quarta
  - Parte 1: Introdução ao JavaScript
  - Parte 2: JavaScript Funcional
- Quinta
  - Parte 1: Arquitetura de desenvolvimento (MVC, BFF, monolítico, microserviços)
  - Parte 2: CodeIgniter framework
- Sexta
  - Apresentação final do trabalho

#### Avaliação

- 60 pontos de presença
  - Mínimo de 60% de presença
  - 3 dias já deu 60 pontos.
- 40 pontos do trabalho final

##### Trabalho Final

- Construa uma aplicação web
  - Tema livre
- Apresente à turma (5 min no max)
- Itens avaliados:
  - Interface da página
  - Navegabilidade
  - Tecnologias usadas

#### Links

- Roadmaps
  - [Front End](https://roadmap.sh/frontend)
  - [Backend](https://roadmap.sh/backend)
  - [JavaScript](https://roadmap.sh/javascript)
- [Playlist](https://www.youtube.com/playlist?list=PLW2m4un9MKPvkyvUuLmkvyhd35xgt5ras)

### Slide: Introdução ao HTML

- Internet, protocolos, computador, servidor, protocolo HTTP
- Requisições, método de acesso, GET, POST
- HTTP: baixa segurança
- HTTPS: Mais seguro
  - Chave pública e privada: a pública é como se fosse o cadeado.
  - Precisa ter um certificado SSL instalado no servidor.
  - Como implemetnar um certificado SSL?

#### IDE

- VSCode, Sublime, Notepad++, Editor de texto

#### HTML

- Linguagem de marcação
  - Recursos: botões, links, imagens, vídeos, tabelas, formulários
- Markup vs Markdown
  - Markup: HTML, XML, etc.
- Tags
  - Simples: `<tag></tag>`
  - Auto-fechamento: `<tag />`
  - Composta: `<tag-composta></tag-composta>`

##### Estrutura Básica de um HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Site</title>
  </head>
  <body>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um parágrafo de exemplo.</p>
    <p>
      Este é um parágrafo <br />
      partido.
    </p>
    <!-- Comentário -->
  </body>
</html>
```

- A diferença entre title e h1

  - `<title>`: Título da página, aparece na aba do navegador.
  - `<h1>`: Título principal da página, aparece no conteúdo.

- Metadados, Inspecionar
- Tags Inline
  - `<strong>`: Negrito
  - `<em>`: Itálico
  - `<u>`: Sublinhado
- Links:
  - `<a href="https://www.example.com">Link</a>`
