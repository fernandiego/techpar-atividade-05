angular.module("atividade04").controller("pessoacontroller", function(pessoaservice){

    this.novo = {};
  
    this.listar = () => pessoaservice.buscapessoa().then( (ret) => {
      this.pessoas = ret.data;
    });
  
    // carregar a lista imediatamente após carregar o controlador
    this.listar();
  
    this.salvapessoa = () => {
      console.log("estive aqui GDE CV ")
      console.log(this.novo)
      pessoaservice.salvapessoa(this.novo).then( (ret) => {
        alert("pessoa salvo com id "+ret.data.idpessoa);
        this.listar();
        this.novo = {};
      });
    };
  });