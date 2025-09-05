# 🛍️ TucanStore E-commerce

## 📌 Escopo do Projeto

A **TucanStore** é uma plataforma de e-commerce inspirada em grandes marketplaces como a Amazon. O objetivo é permitir que usuários possam:

- Visualizar e pesquisar produtos  
- Adicionar itens ao carrinho  
- Realizar compras  
- Cadastrar-se e autenticar-se  
- Acompanhar seus pedidos  

Este projeto serve como prática para consolidar conhecimentos em desenvolvimento web, arquitetura de sistemas e integração com APIs.

---

## 💡 Justificativa

O comércio eletrônico é uma das áreas que mais cresce no mundo. Criar uma solução como a TucanStore permite aplicar tecnologias modernas em um contexto real, desenvolvendo habilidades essenciais como:

- Desenvolvimento Front-end e Back-end  
- Controle de versão com Git e GitHub  
- Integração com APIs  
- Design de interface e experiência do usuário  

---

## 🧰 Tecnologias Utilizadas

- **Front-end**: HTML5, CSS3, JavaScript (Bootstrap)  
- **Versionamento**: Git + GitHub  

> ⚠️ Este projeto é focado em front-end. Funcionalidades de back-end podem ser adicionadas futuramente.

---

## 🧪 Protótipo (Wireframe)

Protótipo inicial criado para planejar as telas principais do sistema:

- Página inicial (listagem de produtos)  
- Página de detalhes do produto  
- Carrinho de compras  
- Login/Registro  
- Checkout  

📎 [Acesse o protótipo no Canva](https://www.canva.com/design/DAGwuIyf4oY/VcX6s2EVbrFHDGF5ES8bjw/edit?utm_content=DAGwuIyf4oY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

✅ Funcionalidades Implementadas
[x] Página inicial com produtos

[x] Modal do carrinho

[x] Formulário de contato com validação

[x] Carrossel de imagens

[x] Responsividade para dispositivos móveis

[x] API de localização (mapa)

[x] Simulação de rastreio de entrega

---

👥 Autores:

Projeto desenvolvido por Benjamin Corte e Gabriel Bonada.


Casos de testes: 

| **ID** | **Funcionalidade**        | **Descrição do Teste**                                   | **Entrada Esperada**                     | **Resultado Esperado**                                                 | **Status** |
| ------ | ------------------------- | -------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- | -------- |
| TC01   | Formulario de Contato     | Validação por Email                                      | Digitar @ no email para validar          | Caso não tenha o @ no campo do email, o formulario não vai ser enviado | ✅ 
| TC02   | Abrir Modal               | Quando o carrinho for cliado abre um modal               | Modal tem que abrir de maneira rapida e estilizada | Aparecer os itens no modal com imagens e valores             | ✅      
| TC03   | Botão de compra  | Quando cliar no botão de comprar um item ele ser adicionado no carrinho    | Item entrar na lista do carrinho                          | todos os itens paracerem no carrinho conforme o pedido pelo usuario  | ✅      |
| TC04   | Botão de login       | Clicar no botão de login direciona para pagina de cadastro            | Usuario entrar na área de cadastro                | página ´ cadastro.html ´ é carregada  | ✅          |
| TC05   | Resposividade                 |Todas paginas do site serem responsiva para celular/tablet/descktop  | Não ter dificuldades em outros despositivos além do desktop                    |  Usuario conseguir navegar em qualquer despositivo                                       | ✅          |
| TC06   | API do mapa           | No contato aparecer uma api de mapa                    | Mapa de localização da empresa                          | Usuario conseguir ver aonde é o centro de destribuição do ecommerce                  | ✅          |
| TC07   | Acompanhar entrega     | Através de um codigo, mostrar aonde está a entrega do usuario| Codigo recebido pelo usuario          | Usuario saber informações da sua entrega |   ✅       |
| TC08   | Carrossel            | Ter 3 imagens de carrossel moveis no site              | Quando usuario clicar ira para a proxima imagem                  | usuario irá ver alguns banners                        | ✅          |
| TC09   | API de produtos  | Ter uma base de produtos                   | usuario ter uma vasta gama de itens para comprar     | Aparecer varios cards de itens compraveis                           |   ✅      |
| TC10   | Fechar Modal              | Clicar em "voltar para compra" no modal para fechar ele           | Clicar no botão "Voltar para compra"                 | Modal é fechado                                                        | ✅      
