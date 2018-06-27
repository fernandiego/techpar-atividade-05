angular.module("atividade04").controller("pessoacontroller", function(pessoaservice){

    this.novo = {};
  
    this.listar = () => pessoaservice.buscapessoas().then( (ret) => {
      this.pessoas = ret.data;
    });
  
    // carregar a lista imediatamente após carregar o controlador
    this.listar();
  
    this.salvapessoa = () => {
      pessoaservice.salvapessoa(this.novo).then( (ret) => {
        alert("pessoa salvo com id "+ret.data.idpessoa);
        this.listar();
        this.novo = {};
      });
    };
  });