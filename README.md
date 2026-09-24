# PART 1 - ENGENHARIA DE REQUISITOS

---

# Universal Geek - Documentação do Projeto

**Link do Site:** [Universal Geek no Netlify](https://unique-rugelach-775eee.netlify.app)

---

## 1. Nome do Sistema / Projeto
* **Nome do Projeto:** Universal Geek
* **Tipo:** E-commerce / Loja Virtual Geek

---

## 2. Levantamento e Classificação de Requisitos

### Requisitos Funcionais (RF)

* **RF01 – Pesquisa e Filtro de Produtos**
  * **Descrição:** O sistema deve permitir ao utilizador pesquisar produtos por palavra-chave e filtrá-los por categoria e intervalo de preços.
  * **Origem:** Entrevista 1 (Cliente).
    
* **RF02 – Visualização do Detalhe do Produto**
  * **Descrição:** O sistema deve exibir página de detalhes do produto contendo fotos, descrição detalhada, preço e estado de disponibilidade em stock.
  * **Origem:** Entrevista 1 (Cliente).
    
* **RF03 – Gestão do Carrinho de Compras Persistente**
  * **Descrição:** O sistema deve permitir adicionar/remover itens e manter a sessão do carrinho ativa entre diferentes dispositivos e acessos.
  * **Origem:** Entrevista 1 (Cliente).
    
* **RF04 – Controlo Automático de Stock na Confirmação**
  * **Descrição:** O sistema deve decrementar a quantidade em stock no momento da confirmação do pedido/pagamento para impedir vendas sem disponibilidade física.
  * **Origem:** Entrevista 2 (Responsável pelo Estoque).
    
* **RF05 – Gestão Comercial e Promoções Agendadas**
  * **Descrição:** O sistema deve permitir ao gestor cadastrar produtos, alterar preços e programar início/fim de promoções com horários automáticos.
  * **Origem:** Entrevista 3 (Gerente Comercial).
    
* **RF06 – Rastreio e Atualização de Estado dos Pedidos**
  * **Descrição:** O sistema deve atualizar e disponibilizar o estado do pedido (Aguardando Pagamento, Confirmado, Enviado, Entregue, Cancelado) ao cliente e à gestão.
  * **Origem:** Entrevista 3 (Gerente Comercial).
    
* **RF07 – Cálculo Transparente de Frete**
  * **Descrição:** O sistema deve exibir a simulação do valor e prazo do frete no carrinho/checkout antes da finalização da compra.
  * **Origem:** Entrevista 4 (Cliente).
    
* **RF08 – Recuperação de Falha no Pagamento**
  * **Descrição:** Em caso de recusa no pagamento, o sistema deve apresentar mensagem explicativa e permitir tentar outro método sem perder o carrinho.
  * **Origem:** Entrevista 4 (Cliente).

### Requisitos Não-Funcionais (RNF)

* **RNF01 – Desempenho e LCP**
  * **Descrição:** A interface web deve carregar rapidamente (páginas principais em menos de 2,5 segundos), otimizada para conexões móveis.
  * **Origem:** Entrevista 4 (Cliente).
    
* **RNF02 – Usabilidade Mobile e Preenchimento Inteligente**
  * **Descrição:** O checkout deve ser otimizado para várias telas, evitando que o utilizador preencha repetidamente os mesmos dados.
  * **Origem:** Entrevista 4 (Cliente).
    
* **RNF03 – Segurança nas Transações**
  * **Descrição:** As comunicações e pagamentos devem utilizar encriptação HTTPS e estar em conformidade com padrões de segurança de pagamentos (PCI-DSS/LGPD).
  * **Origem:** Entrevista 4 (Cliente).

### Regras de Negócio (RN)

* **RN01 – Bloqueio de Venda Sem Stock (Venda Apenas do Disponível)**
  * **Descrição:** O sistema é proibido de aceitar a confirmação de um pedido caso a quantidade solicitada seja maior do que a contagem atual de stock.
  * **Origem:** Entrevista 2 (Responsável pelo Estoque).
    
* **RN02 – Momento da Reserva de Stock**
  * **Descrição:** O stock do item não é reservado ao adicionar ao carrinho, sendo apenas deduzido após a confirmação final da encomenda ou do pagamento.
  * **Origem:** Entrevista 2 (Responsável pelo Estoque).
    
* **RN03 – Agendamento Automático de Preços/Promoções**
  * **Descrição:** A alteração de preços em campanhas de promoção deve entrar e sair de vigor automaticamente nas datas/horas estipuladas sem intervenção manual no horário.
  * **Origem:** Entrevista 3 (Gerente Comercial).

---

## 3. Épicos e Histórias de Usuário (HUs)

### Épico 1: Catálogo e Navegação
* **HU01:** Como cliente, quero pesquisar e filtrar produtos por categoria e preço, para encontrar colecionáveis do meu interesse rapidamente.
* **HU02:** Como cliente, quero ver a página detalhada do produto com fotos, preço e disponibilidade, para decidir se realizo a compra.

### Épico 2: Compras, Carrinho e Checkout
* **HU03:** Como cliente, quero manter os meus produtos salvos no carrinho ao trocar de dispositivo, para retomar as minhas compras a qualquer momento.
* **HU04:** Como cliente, quero simular o frete antes de pagar e preencher o checkout de forma simples no telemóvel, para não abandonar a compra por frustração ou dúvidas de custos.
* **HU05:** Como cliente, quero receber um aviso claro em caso de falha no pagamento e poder tentar outro método sem perder o carrinho, para concluir a compra facilmente.

### Épico 3: Gestão de Inventário, Promoções e Pedidos
* **HU06:** Como responsável pelo stock, quero que o sistema impeça vendas acima do stock disponível e efetue a baixa automática no pagamento, para evitar cancelamentos por falta de itens.
* **HU07:** Como gerente comercial, quero agendar datas e horários de promoções, para que os preços se alterem automaticamente sem necessidade de ajustes manuais fora de hora.
* **HU08:** Como cliente e gestor, quero acompanhar o estado atual do pedido (aguardando pagamento, confirmado, enviado, entregue), para ter transparência sobre o andamento das compras.

---

## 4. Cenários em Gherkin


### Pesquisa e Filtro de Produtos


Funcionalidade: Pesquisa e Filtro de Produtos
  Como cliente da Universal Geek
  Quero filtrar o catálogo por categoria e faixa de preço
  Para encontrar rapidamente os itens que desejo comprar

  Cenário: Aplicar filtro de categoria e preço máximo
    Dado que o cliente está na página inicial do site
    Quando seleciona a categoria "Cartas Pokémon"
    E define o filtro de preço máximo para "R$ 500,00"
    Então o sistema deve exibir apenas os produtos da categoria "Cartas Pokémon"
    E todos os itens apresentados devem ter valor igual ou inferior a R$ 500,00



### Gestão do Carrinho de Compras


Funcionalidade: Gestão do Carrinho de Compras
  Como cliente do e-commerce
  Quero adicionar produtos ao meu carrinho e manter os salvos
  Para continuar a navegação sem perder os itens selecionados

  Cenário: Adicionar item ao carrinho com sucesso
    Dado que o cliente está na página do produto "Funko Pop - Doflamingo"
    Quando clicado no botão "Adicionar ao Carrinho"
    Então o contador do carrinho no topo da página deve ser atualizado para "1"
    E o produto deve ser mantido no carrinho mesmo se o cliente fechar o navegador




### Validação de Estoque na Confirmação do Pedido


Funcionalidade: Validação de Estoque na Confirmação do Pedido
  Como responsável pelo estoque
  Quero que o sistema impeça a venda de produtos sem disponibilidade física
  Para evitar a notificação de pedidos sem estoque

  Cenário: Tentativa de finalização de compra sem estoque suficiente
    Dado que o produto "Pokéball Crossbody Bag" possui apenas 1 unidade em estoque
    E o cliente selecionou 2 unidades no seu carrinho
    Quando o cliente tenta avançar para o pagamento
    Então o sistema deve exibir a mensagem "Quantidade solicitada indisponível no estoque"
    E a compra não deve ser solicitada

---

## 5. Diagrama no Draw.io.

![Diagrama do Projeto](./diagrama%20do%20projeto.png)

---

## 6. Priorização de Requisitos (MoSCoW)

| Código | Requisito / Regra | Categoria MoSCoW | Justificação |
| :--- | :--- | :--- | :--- |
| **RF02** | Visualização do Detalhe do Produto | **Must Have** | Funcionalidade essencial para o e-commerce apresentar preços, descrição e imagens ao cliente. |
| **RF03** | Gestão do Carrinho de Compras | **Must Have** | Elemento indispensável do fluxo de compra para permitir adicionar e manter itens. |
| **RF04 / RN01** | Controlo e Bloqueio de Venda sem Stock | **Must Have** | Crítico para o negócio, evitando a venda de produtos indisponíveis no inventário. |
| **RNF03** | Segurança nas Transações | **Must Have** | Padrão obrigatório para proteger dados de pagamento e garantir compras seguras. |
| **RF01** | Pesquisa e Filtro de Produtos | **Should Have** | Melhora significativamente a experiência do utilizador ao encontrar produtos específicos. |
| **RF07** | Cálculo Transparente de Frete | **Should Have** | Evita o abandono do carrinho ao informar os custos antes da finalização. |
| **RNF01 / RNF02** | Otimização Mobile e Desempenho | **Should Have** | Essencial para garantir boa navegação e carregamento rápido em dispositivos móveis. |
| **RF05 / RN03** | Gestão Comercial e Promoções Agendadas | **Could Have** | Automatiza a troca de preços, mas o sistema pode operar temporariamente com edições manuais. |
| **RF06** | Rastreio e Atualização de Estado dos Pedidos | **Could Have** | Agrega valor à experiência do cliente, podendo ser complementado por e-mails informativos. |
| **RF08** | Recuperação de Falha no Pagamento | **Could Have** | Melhora a conversão, permitindo nova tentativa de pagamento sem perder o carrinho. |

---

## Prompts de IA Utilizados no Projeto

Esta secção documenta os prompts e orientações fornecidos à Inteligência Artificial ao longo de cada etapa do desenvolvimento da Parte 1 (Engenharia de Requisitos).

---

### Etapa 1: Definição do Projeto e Levantamento de Requisitos
> **Prompt:**
> *"Atua como Engenheiro de Software e Analista de Requisitos. Com base nos documentos de entrevistas de elicitação fornecidos para o projeto do e-commerce 'Universal Geek', identifica e estrutura todos os Requisitos Funcionais (RFs), Requisitos Não-Funcionais (RNFs) e Regras de Negócio (RNs). Atribui a cada um: código único, nome claro, descrição detalhada e a sua respetiva origem (qual entrevista/entrevistado)."*

---

### Etapa 2: Definição de Épicos e Histórias de Usuário (HUs)
> **Prompt:**
> *"Com base nos Requisitos Funcionais e Regras de Negócio identificados para o sistema Universal Geek, organiza as funcionalidades em Épicos temáticos e escreve as Histórias de Usuário (HUs) correspondentes no formato padrão: 'Como [ator], quero [funcionalidade], para [benefício/objetivo]'."*

---

### Etapa 3: Cenários em BDD (Gherkin)
> **Prompt:**
> *"Cria cenários de testes de comportamento utilizando a sintaxe BDD/Gherkin (Dado/Quando/Então) para cobrir situações críticas do e-commerce Universal Geek, especificamente: 1) A validação de stock e impedimento de compra acima da quantidade disponível; 2) A recuperação de falhas no processamento de pagamento mantendo os itens no carrinho."*

---

### Etapa 4: Modelagem de Casos de Uso (Draw.io)
> **Prompt:**
> *"Estrutura uma representação textual para a construção de um Diagrama de Casos de Uso na ferramenta Draw.io para o sistema Universal Geek. Identifica os atores principais/externos e mapeia as suas interações com os casos de uso do sistema (ex: Pesquisar Produtos, Gerir Carrinho, Realizar Checkout, Validar Stock e Agendar Promoções)."*

---

### Etapa 5: Priorização de Requisitos (Matriz MoSCoW)
> **Prompt:**
> *"Aplica a técnica de priorização MoSCoW (Must Have, Should Have, Could Have, Won't Have) para todos os RFs, RNFs e RNs do e-commerce Universal Geek. Apresenta o resultado em formato de tabela Markdown, incluindo código, nome do requisito, classificação MoSCoW e a justificativa de negócio para cada prioridade."*

---

# PART 2 DESENVOLVIMENTO DE APLICAÇÕES PARA INTERNET

---
