/**
 * Created by Tam Le on 24/04/2016.
 */


var app = angular.module('mycv', ["xeditable"]);
app.run(function (editableOptions) {
    editableOptions.theme ="bs3"
});
app.controller('Ctrller', function($scope, $http) {
    $http.get("JSON/data.json")
        .then(function(response) {
            $scope.myData = response.data.profile;
            $scope.mySummary= response.data.summary;
            $scope.myExperience = response.data.experience;
            $scope.myLanguage = response.data.language;
            $scope.myimage = response.data.images;
            $scope.myskill = response.data.skill;
            $scope.myproject = response.data.project;
            $scope.myeducation = response.data.education;
        });

});
