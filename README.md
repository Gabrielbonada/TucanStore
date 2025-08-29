<h1>TucanStore E-commerce</h1> 

Escopo do Projeto Este projeto consiste no desenvolvimento de uma plataforma de e-commerce inspirada em grandes marketplaces como a Amazon.
O sistema permitirá que usuários possam:

Visualizar e pesquisar produtos
Adicionar itens ao carrinho
Realizar compras
Cadastrar-se e autenticar-se
Acompanhar seus pedidos
Justificativa do Projeto O comércio eletrônico é uma das áreas que mais cresce no mundo e representa uma habilidade essencial para desenvolvedores que buscam criar soluções escaláveis e completas.
A construção deste e-commerce servirá como prática para consolidar conhecimentos em:

<h1>Desenvolvimento Front-end e Back-end</h1> 
Arquitetura de sistemas
Controle de versão com Git e GitHub
integração com APIS
Design de interface e experiência do usuário
Além disso, o projeto possibilita aplicar tecnologias modernas em um contexto real e de grande impacto.

Tecnologias Envolvidas
<ul>
  <li></li>
  <li>Front-end: HTML5, CSS3, JavaScript (Bootstrap)</li>
  <li> Versionamento: Git + GitHub </li>
</ul>


Protótipo (Wireframe) Protótipo inicial criado para planejar as telas principais do sistema:

Página inicial (listagem de produtos)
Página de detalhes do produto
Carrinho de compras
Login/Registro
Checkout
📎 Link do Protótipo no Figma
https://www.canva.com/design/DAGwuIyf4oY/VcX6s2EVbrFHDGF5ES8bjw/edit?utm_content=DAGwuIyf4oY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Etapa Atual Etapa 1 – Planejamento
Repositório criado
README com escopo, justificativa e tecnologias
Protótipo adicionado

Autor Projeto desenvolvido por Benjamin Corte e Gabriel Bonada.


Casos de testes: 

| **ID** | **Funcionalidade**        | **Descrição do Teste**                                   | **Entrada Esperada**                     | **Resultado Esperado**                                                 | **Status** |
| ------ | ------------------------- | -------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- | -------- |
| TC01   | Formulario de Contato     | Validação por Email                                      | Digitar @ no email para validar          | Caso não tenha o @ no campo do email, o formulario não vai ser enviado | ✅ 

| TC02   | Barra de Busca            | Buscar por um termo inexistente                          | Digitar "asdasd123" e clicar em "Buscar" | Exibir mensagem "Nenhum resultado encontrado" ou página vazia          | ✅      |
| TC03   | Lista de Filmes Populares | Acessar a página inicial e visualizar filmes populares   | Acessar o site                           | A lista de filmes populares é exibida automaticamente                  | ✅      |
| TC04   | Detalhes do Filme         | Clicar em um filme da lista para ver detalhes            | Clicar em um item da lista               | Detalhes como título, sinopse, imagem e nota devem aparecer            | ✅          |
| TC05   | Navegação                 | Clicar nos botões de navegação (Início, Filmes, Séries)  | Clicar em cada botão                     | Página correspondente é carregada                                      | ✅          |
| TC06   | Botão Contato             | Clicar no botão "Contato" na navegação                   | Clicar no botão                          | Página `contato.html` ou seção de contato é carregada                  | ✅          |
| TC07   | Formulário de Contato     | Preencher e enviar o formulário de contato               | Preencher nome, e-mail, mensagem         | Formulário enviado ou mensagem de sucesso aparece (em desenvolvimento) | ⚠️         |
| TC08   | Modal de Login            | Abrir o modal de login ao clicar em "Login"              | Clicar no botão "Login"                  | Modal aparece com campos de usuário e senha                            | ✅          |
| TC09   | Login com campos vazios   | Tentar logar com campos de login vazios                  | Clicar em "Entrar" sem preencher nada    | Exibir erro ou bloqueio do envio (validação)                           | ⚠️         |
| TC10   | Fechar Modal              | Clicar em "Fechar" dentro do modal de login              | Clicar no botão "Fechar"                 | Modal é fechado                                                        | ✅          |
| TC11   | Responsividade            | Acessar o site por celular/tablet                        | Reduzir o tamanho da janela              | Site deve se ajustar corretamente à tela (menu, layout, textos)        | ⚠️         |
| TC12   | API TMDb                  | Verificar se a API está carregando os dados corretamente | Aguardar o carregamento                  | Dados reais de filmes/séries devem aparecer                            | ✅          |
| TC13   | Estilo dos botões         | Passar o mouse sobre os botões da navegação              | Hover sobre os botões                    | Botões mudam de cor (hover laranja) e fazem leve zoom                  | ✅          |
| TC14   | Erro na API               | Desconectar da internet e acessar a aplicação            | Sem conexão                              | Exibir mensagem de erro ou falha no carregamento dos dados             | ⚠️         |

