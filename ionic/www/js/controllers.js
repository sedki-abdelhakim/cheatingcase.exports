angular.module('starter.controllers', [])

.controller('SearchflightCtrl', function($scope, $ionicLoading, $timeout) {

 $ionicLoading.show({
    content: 'Loading',
    template:'please wait...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
  }, 500);
})

.controller('SearchCtrl', function($scope, $ionicLoading, $timeout, $state) {

 $ionicLoading.show({
    content: 'Loading',
    template:'please wait...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
  }, 500);

  $scope.search=function(){
   $state.go('tab.search');
  }
})

.controller('DashCtrl', function($scope, $ionicLoading, $timeout, $ionicPopover, $state, $ionicHistory) {
   // .fromTemplate() method

   var template = '<ion-popover-view>' +
                  '<ion-header-bar class="bar bar-assertive">' +
                  '<h1 class = "title" style="text-align:center"><strong>Join us on</strong></h1>' +
                  '</ion-header-bar>'+ '<ion-content>' +
                  '<div class="list">'+'<div class="item item-icon-left">'+'<strong style="color:red"> facebook </strong>'+'<span class="badge badge-assertive">'+'<i class="ion-social-facebook"></i>'+'</span>'+'</a>'+'</div>'+
                  '<div class="item item-icon-left">'+'<strong style="color:red"> twitter </strong>'+'<span class="badge badge-assertive">'+'<i class="ion-social-twitter"></i>'+'</span>'+'</div>'+
                  '<div class="item item-icon-left">'+'<strong style="color:red"> instagram </strong>'+'<span class="badge badge-assertive">'+'<i class="ion-social-instagram"></i>'+'</span>'+'</div>'+
                  '</div>' +
                  '</ion-content>' + '</ion-popover-view>';

   $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });

  $scope.gotohome= function() {
    $ionicHistory.goBack();
    window.history.back();
    //alert('code to go back called. Did it work?');
  }

})

.controller('AboutCtrl', function($scope, $ionicPopup, $state, $ionicLoading, $timeout) {

   $ionicLoading.show({
    content: 'Loading',
    template:'please wait...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
  }, 500);

   // When button is clicked, the popup will be shown...
   $scope.showPopup1 = function() {
      $scope.data = {}

      // Custom popup
      var myPopup1 = $ionicPopup.show({
         template: '<p style="font-family:Times New Roman">It was formed from a merger between Balair and Ad Astra Aero (To the Stars). For most of its 85 years, Swissair was one of the major international airlines.</p>',
         title: 'Our Humble Beginnings',
         subTitle: '<img src="./img/about1.jpg">',
         scope: $scope,

         buttons: [
             {
               text: '<b>ok</b>',
               type: 'button-assertive'
            }
         ]
      });

      myPopup1.then(function(res) {
         console.log('Tapped!', res);
      });
   },
   $scope.showPopup2 = function() {
      $scope.data = {}

      // Custom popup
      var myPopup2 = $ionicPopup.show({
         template: '<p style="font-family:Times New Roman">As Switzerland national airline, SWISS is committed to the highest standards of product and AirportsSrv quality. The airline flies some 16 million passengers every year to over 105 destinations all over the world.</p>',
         title: 'For the people in the company',
         subTitle: '<img src="./img/about2.jpg">',
         scope: $scope,

         buttons: [
             {
               text: '<b>ok</b>',
               type: 'button-assertive'
            }
         ]
      });

      myPopup2.then(function(res) {
         console.log('Tapped!', res);
      });
   },
   $scope.showPopup3 = function() {
      $scope.data = {}

      // Custom popup
      var myPopup3 = $ionicPopup.show({
         template: '<p style="font-family:Times New Roman">From its hub in Zurich and the regional airport of Geneva, Swiss International Air Lines flies to 105 destinations in 49 countries: 79 in Europe and 26 overseas. There are 94 aircraft in the airline fleet. SWISS is part of the Lufthansa Group and a member of the Star Alliance.</p>',
         title: '16 million passengers,<br> 105 destinations.',
         subTitle: '<img src="./img/about3.jpg">',
         scope: $scope,

         buttons: [
             {
               text: '<b>ok</b>',
               type: 'button-assertive'
            }
         ]
      });

      myPopup3.then(function(res) {
         console.log('Tapped!', res);
      });
   };

   $scope.gotoContact=function(){
    $state.go("Contact");
   }

})

.controller('ContactCtrl', function($scope,$ionicLoading,$timeout, $ionicScrollDelegate){

$ionicLoading.show({
    content: 'Loading',
    template:'pleasewait...',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 200,
    showDelay: 0
  });

  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
  }, 1000);
  $scope.scrollBottom= function() {
    $ionicScrollDelegate.scrollBottom();
  };

  $scope.show= function(){
    $scope.open=true
  }
$scope.name=null;
$scope.email=null;
$scope.telephone=null;
$scope.msg=null;
$scope.send=function(){
   if($scope.name===null){
   $ionicLoading.show({
    content: 'Loading',
    template:'sending...',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 200,
    showDelay: 0
  });

  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
  }, 1000);
}
}
})

.controller('HomeCtrl', function($scope,$ionicSlideBoxDelegate,$state ) {

    $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   };

    $scope.gotoSearchFlights=function(){
    $state.go("searchflights");
   };
})

/* Search-One-Way*/
.controller('SearchflightCtrlOneWay', function($scope,$state,AirportsSrv) {
  $scope.details = {
    "origin":"",
    "destination":"",
    "departureDate":"",
    "adultsCount":"1",
    "childrenCount":"0",
    "class":"1",
    "otherAirlines":false
  };

  AirportsSrv.setOtherAirlines("false");

  $scope.setOriginAirport= function(airport) {
    console.log(airport);
    AirportsSrv.setSelectedOriginAirport(airport);
  };

  /* Record User's Selected Destination Airport  */
  $scope.setDestinationAirport= function(airport) {
    console.log(airport);
    AirportsSrv.setSelectedDestinationAirport(airport);
  };

  $scope.flipOtherAirlines = function() {
   AirportsSrv.setOtherAirlines($scope.details.otherAirlines);
  };

  $scope.$watch('details.departureDate', function() {
    console.log($scope.details.departureDate);
    AirportsSrv.setSelectedDepartureDate($scope.details.departureDate);
    // $scope.returnDate= null;
    // $scope.dateOptionsReturn.minDate = ($scope.departureDate==null)?
    // new Date(($scope.dateOptions.minDate.getTime())+(24*60*60*1000))
    // :new Date(($scope.departureDate.getTime())+(24*60*60*1000));
    // AirportsSrv.setSelectedDepartureDate($scope.departureDate);

  });

  $scope.$watch('details.class', function() {
   if($scope.details.class=='1'){
     AirportsSrv.setSelectedClass("economy");
   }
   else{
     if($scope.details.class=='2'){
       AirportsSrv.setSelectedClass("business");
     }
   }
  });

  $scope.$watch('details.adultsCount', function() {
    AirportsSrv.setSelectedSeats(parseInt($scope.details.adultsCount)+parseInt($scope.details.childrenCount));
  });

  $scope.$watch('details.childrenCount', function() {
    AirportsSrv.setSelectedSeats(parseInt($scope.details.adultsCount)+parseInt($scope.details.childrenCount));
  });

  $scope.searchflights = function(){
    $state.go('flightsOneWay');
  };
  $scope.airports=[{"iata": "BOM"},{"iata": "DEL"},{"iata": "CAI"},{"iata": "JED"},{"iata": "HKG"},{"iata": "TBE"},{"iata": "JNB"},{"iata": "CPT"},{"iata": "RUH"},{"iata": "LHR"},{"iata": "JFK"},{"iata": "LCF"},{"iata": "LAX"},{"iata": "SFO"},{"iata": "FRA"},{"iata": "TXL"},{"iata": "FCO"},{  "iata": "LIN"}];
})

 /* Search-Two-Way */
.controller('SearchflightCtrlTwoWay', function($scope,$state,AirportsSrv) {
  $scope.details = {
    "origin":"",
    "destination":"",
    "departureDate":"",
    "returnDate":"",
    "adultsCount":"1",
    "childrenCount":"0",
    "class":"1",
    "otherAirlines":false
  };
  AirportsSrv.setOtherAirlines("false");


  $scope.setOriginAirport= function(airport) {
    console.log(airport);
    AirportsSrv.setSelectedOriginAirport(airport);
  };

  /* Record User's Selected Destination Airport  */
  $scope.setDestinationAirport= function(airport) {
    console.log(airport);
    AirportsSrv.setSelectedDestinationAirport(airport);
  };

  $scope.flipOtherAirlines = function() {
   AirportsSrv.setOtherAirlines($scope.details.otherAirlines);
  };

  $scope.$watch('details.departureDate', function() {
    console.log($scope.details.departureDate);
    AirportsSrv.setSelectedDepartureDate($scope.details.departureDate);
    // $scope.returnDate= null;
    // $scope.dateOptionsReturn.minDate = ($scope.departureDate==null)?
    // new Date(($scope.dateOptions.minDate.getTime())+(24*60*60*1000))
    // :new Date(($scope.departureDate.getTime())+(24*60*60*1000));
    // AirportsSrv.setSelectedDepartureDate($scope.departureDate);

  });

  $scope.$watch('details.returnDate', function() {
    console.log($scope.details.returnDate);
    AirportsSrv.setSelectedDepartureDate($scope.details.returnDate);
    // if($scope.returnDate!=null && $scope.returnDate.getTime()<=$scope.departureDate.getTime())
    //  $scope.returnDate=null;
    // AirportsSrv.setSelectedReturnDate($scope.returnDate);
  });

  $scope.$watch('details.class', function() {
   if($scope.details.class=='1'){
     AirportsSrv.setSelectedClass("economy");
   }
   else{
     if($scope.details.class=='2'){
       AirportsSrv.setSelectedClass("business");
     }
   }
  });

  $scope.$watch('details.adultsCount', function() {
    AirportsSrv.setSelectedSeats(parseInt($scope.details.adultsCount)+parseInt($scope.details.childrenCount));
  });

  $scope.$watch('details.childrenCount', function() {
    AirportsSrv.setSelectedSeats(parseInt($scope.details.adultsCount)+parseInt($scope.details.childrenCount));
  });

  $scope.searchflights = function(){
    $state.go('flightsTwoWay');
  };
  $scope.airports=[{"iata": "BOM"},{"iata": "DEL"},{"iata": "CAI"},{"iata": "JED"},{"iata": "HKG"},{"iata": "TBE"},{"iata": "JNB"},{"iata": "CPT"},{"iata": "RUH"},{"iata": "LHR"},{"iata": "JFK"},{"iata": "LCF"},{"iata": "LAX"},{"iata": "SFO"},{"iata": "FRA"},{"iata": "TXL"},{"iata": "FCO"},{  "iata": "LIN"}];
})

/* Flights-One-Way */
.controller('flightsOneWay', function($scope,$state,AirportsSrv) {
  $scope.disabled=true;
  $scope.outgoingFlights=  [
    {
      "flightId":"945sd718jfhk7132",
  		"flightNumber": "SE9600",
  		"aircraftType": "Airbus ",
  		"aircraftModel": "133",
  		"departureDateTime": 1460331360000,
  		"arrivalDateTime": 1460339160000,
  		"origin": "CAI",
  		"destination": "JED",
		  "class":"economy",
  		"cost": "539",
  		"Airline": "Swiss Air",
  		"checked":false
  	},
  	{
      "flightId":"12847182947132",
  		"flightNumber": "GA1400",
  		"aircraftType": "AirBag ",
  		"aircraftModel": "S233",
  		"departureDateTime": 1460331490000,
  		"arrivalDateTime": 1460339260000,
  		"origin": "CAI",
  		"destination": "JED",
		"class":"economy",
  		"cost": "712",
  		"Airline": "Swiss Air",
  		"checked":false
  	}
  ];
//  $scope.outgoingFlights= AirportsSrv.getOutgoingFlights();
  $scope.Total = 0;
  $scope.details ={
    "seats":AirportsSrv.getSelectedSeats()
  }

  // $scope.$watch('details.seats', function() {
  //   $scope.passengerArray = [];
  //   for(var i=0; i<$scope.details.seats; i++){
  //     $scope.passengerArray.push({"firstName":"","lastName":"","passportNum":0,"dateOfBirth":0});
  //   }
  //   AirportsSrv.setPassengerArray($scope.passengerArray);
  // });

  //hna lel outgoing Type OneWay
  $scope.findType = function(flight){
    return "info";
  };

  //hna lel Color fl OneWay
  $scope.findColor = function(flight){
    return "color: rgb(0,139,139)";
  };
  $scope.clearOthers = function(index,type){
      angular.forEach($scope.outgoingFlights, function(flight, position) {
        if (position != index){
          $scope.outgoingFlights[position].checked = false;
        }

        else{
          $scope.outgoingFlights[position].checked = true;
        }

      });
  }

  $scope.isDisabled = function(){
    for(var i=0;i<$scope.outgoingFlights.length;i++){
        if($scope.outgoingFlights[i].checked){
          $scope.Total = parseInt($scope.outgoingFlights[i].cost) * $scope.seats;
          $scope.disabled=false;
          return;
        }
    }
    $scope.disabled=true;
  };

  // $scope.proceed = function() {
  //
  //   for(var i=0;i<$scope.outgoingFlights.length;i++){
  //       if($scope.outgoingFlights[i].checked){
  //         var outgoingFlight = $scope.outgoingFlights[i];
  //         break;
  //       }
  //   }
  //   AirportsSrv.setOutgoingFlightID(outgoingFlight.flightId);
  //   AirportsSrv.setOutgoingFlightAirline(outgoingFlight.Airline);
  //   AirportsSrv.setCost($scope.Total);
  //   $location.url('/flights/confirm'); //correct this
  // };
})

/* Flights-Two-Way*/
.controller('flightsTwoWay', function($scope,$state,AirportsSrv) {
  $scope.disabled = true;
  $scope.outgoingCost = 0;
  $scope.returnCost = 0;
  $scope.Total = 0;
  $scope.outgoingFlights= [
    {
      "flightId":"9218hsbsw",
  		"flightNumber": "SE9600",
  		"aircraftType": "Airbus ",
  		"aircraftModel": "133",
  		"departureDateTime": 1460331360000,
  		"arrivalDateTime": 1460339160000,
  		"origin": "CAI",
  		"destination": "JED",
		"class":"economy",
  		"cost": "539",
  		"Airline": "Swiss Air",
  		"checked":false
  	},
  	{
      "flightId":"sjdbqjwbdhj2",
  		"flightNumber": "GA1400",
  		"aircraftType": "AirBag ",
  		"aircraftModel": "S233",
  		"departureDateTime": 1460331490000,
  		"arrivalDateTime": 1460339260000,
  		"origin": "CAI",
  		"destination": "JED",
		"class":"economy",
  		"cost": "712",
  		"Airline": "Swiss Air",
  		"checked":false
  	}
  ];
  $scope.returnFlights= [
    {
      "flightId":"2udh1o2hdu",
  		"flightNumber": "JW102",
  		"aircraftType": "Airbus ",
  		"aircraftModel": "GH12",
  		"departureDateTime": 1460341360000,
  		"arrivalDateTime": 1460347160000,
  		"origin": "JED",
  		"destination": "CAI",
		"class":"economy",
  		"cost": "812",
  		"Airline": "Swiss Air",
  		"checked":false
  	},
  	{
      "flightId":"023jdwdq",
  		"flightNumber": "JRO102",
  		"aircraftType": "AirBag ",
  		"aircraftModel": "QP12",
  		"departureDateTime": 1460341360000,
  		"arrivalDateTime": 1460349160000,
  		"origin": "JED",
  		"destination": "CAI",
		"class":"economy",
  		"cost": "619",
  		"Airline": "Swiss Air",
  		"checked":false
  	}
  ];
  //$scope.outgoingFlights= AirportsSrv.getOutgoingFlights();
  //$scope.returnFlights =AirportsSrv.getReturnFlights();
  $scope.details ={
    "seats":AirportsSrv.getSelectedSeats()
  }

  // $scope.$watch('details.seats', function() {
  //   $scope.passengerArray = [];
  //   for(var i=0; i<$scope.detail.seats; i++){
  //     $scope.passengerArray.push({"firstName":"","lastName":"","passportNum":0,"dateOfBirth":0});
  //   }
  //   AirportsSrv.setPassengerArray($scope.passengerArray);
  // });

  $scope.findType = function(flight){
    var i = $scope.outgoingFlights.length;
    while (i--) {
      if ($scope.outgoingFlights[i] === flight) {
        //hna lel outgoing fl twoWay
        return "info";
      }
    }
    //hna lel return fl twoWay
    return "assertive";
  };

  $scope.findColor = function(flight){
    var i = $scope.outgoingFlights.length;
    while (i--) {
      if ($scope.outgoingFlights[i] === flight) {
        //hna lel Outgoing Color fl TwoWay
        return "color: rgb(0,139,139)";
      }
    }
    //hna lel Return Color fl TwoWay
    return "color: rgb(228,40,18)";
  };

  $scope.clearOthers = function(index,type){
    if(type=="info"){
      angular.forEach($scope.outgoingFlights, function(flight, position) {
        if (position != index){
          $scope.outgoingFlights[position].checked = false;
        }

        else{
          $scope.outgoingFlights[position].checked = true;
        }

      });
    }

    else{
      angular.forEach($scope.returnFlights, function(flight, position) {
        if (position != index){
          $scope.returnFlights[position].checked = false;
        }

        else{
          $scope.returnFlights[position].checked = true;
        }

      });
    }

  };

  $scope.isDisabled = function(){
    var broke = false;
    for(var i=0;i<$scope.outgoingFlights.length;i++){
        if($scope.outgoingFlights[i].checked){
          $scope.outgoingCost = parseInt($scope.outgoingFlights[i].cost) * $scope.seats ;
          $scope.outgoingDisabled = false;
          broke=true;
          break;
        }
    }

    for(var j=0;j<$scope.returnFlights.length;j++){
        if($scope.returnFlights[j].checked){
          $scope.returnCost = parseInt($scope.returnFlights[j].cost) * $scope.seats ;
          $scope.returnDisabled = false;
          if(broke){
            $scope.Total = $scope.outgoingCost + $scope.returnCost
            $scope.disabled=false;
            return;
          }
        }
    }

    $scope.disabled=true;
  };

  // $scope.proceed = function() {
  //   for(var i=0;i<$scope.outgoingFlights.length;i++){
  //       if($scope.outgoingFlights[i].checked){
  //         var outgoingFlight = $scope.outgoingFlights[i];
  //         break;
  //       }
  //   }
  //   for(var j=0;j<$scope.returnFlights.length;j++){
  //       if($scope.returnFlights[j].checked){
  //         var returnFlight = $scope.returnFlights[j];
  //         break;
  //       }
  //   }
  //   AirportsSrv.setOutgoingFlightID(outgoingFlight.flightId);
  //   AirportsSrv.setOutgoingFlightAirline(outgoingFlight.Airline);
  //   AirportsSrv.setReturnFlightID(returnFlight.flightId);
  //   AirportsSrv.setReturnFlightAirline(returnFlight.Airline);
  //   AirportsSrv.setCost($scope.Total);
  //   $location.url('/flights/confirm'); //correct this
  // };
})



//paymentController start
.controller('paymentController',function($scope,AirportsSrv,stripe){

  // retrieved Info About Outgoing Flight
  $scope.outgoingFlightID= AirportsSrv.getOutgoingFlightID();
  $scope.outgoingFlightAirline= AirportsSrv.getOutgoingFlightAirline();

  // retrieved Info About Return Flight
  $scope.returnFlightID= AirportsSrv.getReturnFlightID();
  $scope.returnFlightAirline= AirportsSrv.getReturnFlightAirline();

  // retrieved Cost
  $scope.cost= AirportsSrv.getCost();
  $scope.class = AirportsSrv.getSelectedClass();

  $scope.passengerDetails = AirportsSrv.getPassengerArray();


  $scope.receipt_number= 0;

  $scope.book = function(){
    stripe.card.createToken({
      "number": $scope.cardnumber,
      "cvc": $scope.cvCode,
      "exp_month": $scope.cardExpMonth,
      "exp_year": $scope.cardExpYear
    }).then(function(paymentToken){
      if($scope.outgoingFlightAirline == $scope.returnFlightAirline || $scope.returnFlightAirline==undefined){
        AirportsSrv.createBooking($scope.passengerDetails,$scope.cost,$scope.outgoingFlightID,$scope.returnFlightID,paymentToken,$scope.outgoingFlightAirline,$scope.class).then(function(res){
          console.log(res.errorMessage);
          if(res.data.errorMessage==null){
            console.log("same airline case true"+$scope.class+"  ---  "+$scope.outgoingFlightID);
            $scope.refNum = res.data.refNum;
          }
          else {
            console.log("same airline case false");
          }
        });

      }
      else{
        AirportsSrv.createBooking($scope.passengerDetails,$scope.cost,$scope.outgoingFlightID,null,paymentToken,$scope.outgoingFlightAirline,$scope.class).then(function(resOutgoing){
          console.log(resOutgoing.data.errorMessage);
          if(resOutgoing.data.errorMessage==null){
            console.log("different airlines outgoingFlight case true");
            $scope.refNum = resOutgoing.data.refNum;
          }
          else {
            console.log("different airlines outgoingFlight case false");

          }
          AirportsSrv.createBooking($scope.passengerDetails,$scope.cost,$scope.returnFlightID,null,paymentToken,$scope.returnFlightAirline,$scope.class).then(function(resReturn){
            console.log(resReturn.data.errorMessage);
            if(resReturn.data.errorMessage==null){
              console.log("different airlines returnFlight case true");
              $scope.refNum +="\n"+resReturn.data.refNum;
            }
            else {
              console.log("different airlines returnFlight case false");
            }
          });
        });

      }
    });
  };

})
//paymentController end


/* directives */
.directive('showFlights',function(){
  return {
    restrict: 'E',
    scope: {
      flight:'=',
      type:'=',
      color: '=',
      index:'='
    },
    templateUrl: 'templates/showFlights.html'
  };
})

.directive('showPassengers',function(){
  return {
    restrict: 'E',
    scope: {
      countries: '=',
      index:'='
    },
    templateUrl: 'templates/showPassengers.html'
  };
})

.directive('bookingPassenger',function(){
  return {
    restrict: 'E',
    scope: {
      passenger:'=',
      index:'='
    },
    templateUrl: 'templates/bookingPassenger.html'
  };
})


.directive('ionicAutocomplete',function ($ionicPopover) {
  var popoverTemplate =
  '<ion-popover-view style="margin-top:5px">' +
  '<ion-content>' +
  '<div class="list">' +
  '<a class="item" ng-repeat="item in items | filter:inputSearch" ng-click="selectItem(item)">{{item.iata}}</a>' +
  '</div>' +
  '</ion-content>' +
  '</ion-popover-view>';
  return {
    restrict: 'A',
    scope: {
      params: '=ionicAutocomplete',
      inputSearch: '=ngModel'
    },
    link: function ($scope, $element, $attrs) {
      var popoverShown = false;
      var popover = null;
      $scope.items = $scope.params.items;

      //Add autocorrect="off" so the 'change' event is detected when user tap the keyboard
      $element.attr('autocorrect', 'off');


      popover = $ionicPopover.fromTemplate(popoverTemplate, {
        scope: $scope
      });
      $element.on('focus', function (e) {
        if (!popoverShown) {
          popover.show(e);
        }
      });

      $scope.selectItem = function (item) {
        $element.val(item.iata);
        popover.hide();
        $scope.params.onSelect(item.iata);
      };
    }
  };
});
