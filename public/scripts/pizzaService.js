myApp.service( 'PizzaService', function( $http ){
  var sv = this;

  sv.getPizzaInfo = function(){
    console.log( 'in service, getPizzaInfo' );
    return $http({
      method: 'GET',
      url: '/restaurants'
    }).then( function( response ){
      console.log( 'in service back from server with:', response );
      sv.data = response.data;
      return response;
    }); // end http
  }; //end getPizzaInfo
}); // end Service
