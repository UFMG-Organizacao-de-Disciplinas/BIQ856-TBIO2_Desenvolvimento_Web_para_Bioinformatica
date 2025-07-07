# BIQ856-TBIO2_Desenvolvimento_Web_para_Bioinformatica [(Site)](https://diegomariano.com/dwb/)

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
  - `<a href="retorno.html" target="_blank">Próxima página</a>`
    - `target="_blank"`: Abre o link em uma nova aba.
    - `title="Descrição do link"`: Descrição do link ao passar o mouse.

---

- Imagens:
  - `<img src="img/imagem.jpg" alt="Descrição da imagem" height="200" />`
  - `alt`: Descrição da imagem para acessibilidade.

---

- Tabelas:

```html
<table border="1">
  <tr>
    <th>Cabeça</th>
  </tr>
  <tr>
    <td>A1</td>
    <td>A2</td>
    <td>A3</td>
  </tr>
</table>
```

---

- Formulários:
  - `<input type="..." \>`

```html
<form
  action="processar.php"
  method="POST"
  id="formulario-contato"
  name="form_contat"
>
  <label for="nome-id">Nome:</label>
  <input type="text" id="nome-id" name="nome-name" required />

  <label for="email-id">Email:</label>
  <input type="email" id="email-id" name="email-name" required />

  <input type="submit" value="Enviar" />
</form>
```

```html
<label for="Assunto-id">Assunto:</label><br />
<input type="text" id="Assunto-id" name="Assunto-name" /><br />
```

- Label: Associa o rótulo ao campo de entrada.
  - `for="nome"`: O valor deve ser igual ao `id` do campo de entrada.
    - E para quê essa associação? Resposta: Acessibilidade, usabilidade, e para que o rótulo seja clicável.
- `<span>`: Usado para estilizar partes do texto sem quebrar a linha.

  - Exemplo: `<span style="color: red;">Texto em vermelho</span>`

- Dúvida, por que o espaço foi convertido para `+` na URL e não `%20`?

```text
Em URLS, espaços são frequentemente substituídos por %20 ou +. O %20 é a representação hexadecimal de um espaço na codificação URL, enquanto o + é uma convenção mais antiga, mas ainda usada em alguns contextos.
Explicação detalhada:
Codificação URL:
Quando você insere um espaço em uma URL, ele precisa ser codificado para garantir que a URL seja interpretada corretamente pelo servidor web.
%20:
Este é o padrão mais comum para representar um espaço em URLs. É a versão hexadecimal do caractere de espaço na tabela ASCII/UTF-8.
+:
Antigamente, o caractere + era frequentemente usado como um substituto para espaços. Embora %20 seja a forma mais padronizada atualmente, o + ainda pode ser encontrado em algumas URLs, especialmente em formulários de pesquisa.
Exemplo:
Uma pesquisa por "hello world" na barra de endereço pode aparecer como https://www.exemplo.com/search?q=hello%20world ou https://www.exemplo.com/search?q=hello+world.
Em resumo, tanto %20 quanto + são formas de representar um espaço em URLs, sendo %20 a opção mais comum e recomendada.
```

### Slide: CSS

- Cascading Style Sheets (CSS)
  - Linguagem de estilo para definir a apresentação de documentos HTML.
- Por que em cascata?

  - Especificidade
    - Como o CSS é aplicado em cascata, regras mais específicas ou com maior prioridade podem sobrescrever regras anteriores.
  - Progressão:
    1. Folha de estilo do navegador
    2. Folha de estilo do usuário (se existir)
    3. Golha de estilo do desenvolvedor
    4. Estilo externo (importado)
    5. Estilo incorporado (tag `<style>`)
    6. Estilo inline (atributo `style`)
    7. Marcação !important

- `<link rel="stylesheet" href="style.css" />`
  - Linka o arquivo CSS externo ao HTML.
- Outros jeitos
  - Tag `<style>`:
    - Ex.: `<style> color: red </style>`
  - Atributo `style`:
    - Ex.: `<p style="color: red;">Texto em vermelho</p>`

#### Componentes do CSS

- Tipos de seletores
  - Tags: `<p>`, `<h1>`, `<div>`, etc.
  - Classes: `<p class="minha-classe">`
    - Pode ter vários na página
  - ID: `<p id="meu-id">`
    - Único, só pode ter um na página
  - Seletores avançados:

```css
p {
  /* Tag */
  color: gray; /* Cor ciza para todas as tags <p> */
}

.texto-vermelho {
  /* Classe */
  color: red; /* Cor vermelha para todas as tags com a classe "texto-vermelho" */
}

#azul {
  /* id */
  color: blue; /* Cor azul para a tag com o ID "azul" */
}
body,
html {
  /* A vírgula é usada para colocar uma mesma regra a um conjunto de elementos */
}
```

#### Pseudo-classes

- `:hover`: Aplica estilo quando o mouse passa sobre o elemento.

#### Propriedades

- Propriedades para textos:
  - color
  - font-size
  - font-style
- Tamanhos de elemento

#### Tarefa pra casa

- Body
  - Header
  - Main
  - Footer
