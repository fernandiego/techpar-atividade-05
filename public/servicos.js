angular.module("atividade04").service("pessoaservice", function ($http){

    this.buscapessoa = () => $http.get("pessoa");
  
    this.salvapessoa = (ev) => $http.post("pessoa",ev);
  
  });