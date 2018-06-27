angular.module("atividade04").service("pessoaservice", function ($http){

    this.buscapessoa = () => $http.get("list");
  
    this.salvapessoa = (ev) => $http.post("save",ev);
  
  });