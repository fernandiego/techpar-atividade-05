angular.module("atividade04").controller("pessoacontroller", function(pessoaservice){

    this.novo = {};
  

    this.salvapessoa = () => {
      console.log("estive aqui GDE CV ")
      console.log(this.novo)
      pessoaservice.salvapessoa(this.novo).then( (ret) => {
        alert("pessoa salvo com id "+ret.data.idpessoa);
        this.novo = {};
      });
    };
  });