angular.module('billCalc', [])

    .controller('totalController', ['$scope', function($scope){
        
        $scope.tipAmounts = [{rate: 0, name:"No Tip"}, {rate: 0.10, name:"10%"}, {rate: 0.15, name: "15%"}, {rate: 0.20, name: "20%"}];
        $scope.tipAmount = $scope.tipAmounts[0];
        
        $scope.states =[
            {taxRate: 0, name: "Select State" },
            {taxRate: 0.0400, name: "Alabama" },
            {taxRate: 0.0000, name: "Alaska" },
            {taxRate: 0.0560, name: "Arizona" },
            {taxRate: 0.0650, name: "Arkansas" },
            {taxRate: 0.0725, name: "California" },
            {taxRate: 0.0290, name: "Colorado" },
            {taxRate: 0.0635, name: "Connecticut" },
            {taxRate: 0.0000, name: "Delaware" },
            {taxRate: 0.0575, name: "District of Columbia" },
            {taxRate: 0.0600, name: "Florida" },
            {taxRate: 0.0400, name: "Georgia" },
            {taxRate: 0.0400, name: "Hawaii" },
            {taxRate: 0.0600, name: "Idaho" },
            {taxRate: 0.0625, name: "Illinois" },
            {taxRate: 0.0700, name: "Indiana" },
            {taxRate: 0.0600, name: "Iowa" },
            {taxRate: 0.0650, name: "Kansas" },
            {taxRate: 0.0600, name: "Kentucky" },
            {taxRate: 0.0500, name: "Louisiana" },
            {taxRate: 0.0550, name: "Maine" },
            {taxRate: 0.0600, name: "Maryland" },
            {taxRate: 0.0625, name: "Massachusetts" },
            {taxRate: 0.0600, name: "Michigan" },
            {taxRate: 0.06875, name: "Minnesota" },
            {taxRate: 0.0700, name: "Mississippi" },
            {taxRate: 0.04225, name: "Missouri" },
            {taxRate: 0.0000, name: "Montana" },
            {taxRate: 0.0550, name: "Nebraska" },
            {taxRate: 0.0685, name: "Nevada" },
            {taxRate: 0.0000, name: "New Hampshire" },
            {taxRate: 0.06875, name: "New Jersey" },
            {taxRate: 0.05125, name: "New Mexico" },
            {taxRate: 0.0400, name: "New York" },
            {taxRate: 0.4750, name: "North Carolina" },
            {taxRate: 0.0500, name: "North Dakota" },
            {taxRate: 0.0575, name: "Ohio" },
            {taxRate: 0.0450, name: "Oklahoma" },
            {taxRate: 0.0000, name: "Oregon" },
            {taxRate: 0.0600, name: "Pennsylvania" },
            {taxRate: 0.0700, name: "Rhode Island" },
            {taxRate: 0.0600, name: "South Carolina" },
            {taxRate: 0.0450, name: "South Dakota" },
            {taxRate: 0.0700, name: "Tennessee" },
            {taxRate: 0.0625, name: "Texas" },
            {taxRate: 0.0470, name: "Utah" },
            {taxRate: 0.0600, name: "Vermont" },
            {taxRate: 0.0430, name: "Virginia" },
            {taxRate: 0.0650, name: "Washington" },
            {taxRate: 0.0600, name: "West Virginia" },
            {taxRate: 0.0500, name: "Wisconsin" },
            {taxRate: 0.0400, name: "Wyoming" }
            ];
        $scope.state = $scope.states[0];
        $scope.subtotal = '';
        
        $scope.tax = function(){
            return $scope.subtotal * $scope.state.taxRate;
        };
        
        $scope.tip = function(){
            return $scope.subtotal * $scope.tipAmount.rate;
        };
        
        $scope.total = function(){
            return $scope.subtotal + $scope.tax() + $scope.tip();
        };
        
        $scope.clearSubtotal = function(){
            $scope.subtotal = '';
        };
        
    }]);