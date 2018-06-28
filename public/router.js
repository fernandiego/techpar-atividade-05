angular.module("atividade04").config(($routeProvider) => {

    $routeProvider.when("/form", {
      controller:"salvapessoacontroller",
      templateUrl:"form.html",
      controllerAs:"pc"
    });
    $routeProvider.when("/listapessoa", {
      controller:"listapessoacontroller",
      templateUrl:"listapessoa.html",
      controllerAs:"pc"
    });
    $routeProvider.when("/", {
    redirectTo: "/listapessoa"
    });
  
    // $routeProvider.when("/participantes", {
    //   controller:"participantescontroller",
    //   templateUrl:"participantes.html",
    //   controllerAs:"ctl"
    // });
  
  
  });