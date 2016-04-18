swissAir.controller('flightsOneWayController', function($scope,$location,AirportsSrv) {
  $scope.origin = AirportsSrv.getSelectedOriginAirport();
  $scope.destination = AirportsSrv.getSelectedDestinationAirport();
  $scope.departureDate= new Date(AirportsSrv.getSelectedDepartureDate()).getTime();
  $scope.returnDate = new Date(AirportsSrv.getSelectedReturnDate()).getTime();
  AirportsSrv.searchFlightsOneWay($scope.origin,$scope.destination,$scope.departureDate,$scope.class,$scope.otherAirlines)
  .success(function(flights){
    $scope.outgoingFlights=flights.outgoingFlights;
  });

  $scope.findType = function(flight){
    return "btn-info";
  };

  $scope.pay = function(index,type) {
    AirportsSrv.setDisplayedFlightDate($scope.outgoingFlights[index].departureDateTime);
    AirportsSrv.setDisplayedFlightNumber($scope.outgoingFlights[index].flightNumber);
    $location.url('/flights/pay');
  };
});
