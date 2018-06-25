Atividade 03

    similar à atividade 02, batizar reppositório git de "techpar-atividade-03"
    adicionar um documento html que o express deverá servir
    o documento deverá estar dentro da pasta public, que deverá ser a pasta de conteúdo estático do express
        procurar na documentação oficial do express como servir arquivos estáticos
        compreender a interação no cliente e no servidor dos arquivos dentro e fora da pasta estática
    alterar o verbo HTTP do /save de GET para POST
    o documento html deverá ter um formulário html cujos campos tem mesmo nome das colunas da tabela pessoa
        o action do form deve ser o /save e method deve ser POST
    adicionar ao express o middleware que permite acessar o req.body das requisições
        os campos do formulário devem constar dentro do req.body (ex. req.body.nomepessoa)
    o retorno da rota /save deve ser o json recebido do formulário adicionado do idpessoa (ex. {"idpessoa":"1","nomepessoa":"Joao", "telefonepessoa":"12345678"})
    assim como a atividade 3, migrates de criação de esquema de dados devem ser criados
    o app deve verificar a variável de ambiente NODE_ENV para escolher o perfil do knex no knexfile.js
    os perfils, development e staging, devem ser preparados para uso
        preferencialmente, development com sqlite3 e staging com postgresql
        a instalação e configuração do postgresql não é parte da atividade. caso não tenha um disponível pode usar sqlite novamente, com outro nome para a base.
    além do script "dev" no package.json, colocar também o script "staging"  - "npm run staging" deve fazer o mesmo que "npm run dev", adicionando apenas a variável de ambiente NODE_ENV=staging
    prazo de 16h para entrega
