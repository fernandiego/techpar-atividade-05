angular.module("atividade04").config(($routeProvider) => {

    $routeProvider.when("/form", {
      controller:"pessoacontroller",
      templateUrl:"form.html",
      controllerAs:"pc"
    });
    $routeProvider.when("/listapessoa", {
      controller:"pessoacontroller",
      templateUrl:"listapessoa.html",
      controllerAs:"pc"
    });
  
    // $routeProvider.when("/participantes", {
    //   controller:"participantescontroller",
    //   templateUrl:"participantes.html",
    //   controllerAs:"ctl"
    // });
  
  
  });