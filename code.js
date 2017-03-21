var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ["$scope","$log","$filter","$resource", "$timeout", function(a,b,c,d,e) {
    
    
    a.nome = '';
    
    
    a.alterarnome = function(){
        b.info(a.nome);
        return a.nome;
        
    
    };
    
    e(function() {
        a.nome = "Tahmmy Hollwad";
        
    },4000);
    
    
    
    
}]);