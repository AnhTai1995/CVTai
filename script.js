/**
 * Created by Tam Le on 24/04/2016.
 */


var app = angular.module('app', ["xeditable"]);
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

app.controller('CtrlSummary', function($scope){
    $scope.addItem = function() {
        $scope.mySummary.push({ 'id': $scope.mySummary.length+1, 'summaryvalue': 'new Summary', isNew: true });
    };
});

app.controller('CtrlExperience', function($scope){
    $scope.addItem = function() {
        $scope.myExperience.push({ 'experience': 'new experience', isNew: true });
    };
});

app.controller('CtrlProject', function($scope){
    $scope.addItem = function() {
        $scope.myproject.push({ 'project': 'new project', isNew: true });
    };
});

app.controller('CtrlLanguage', function($scope){
    $scope.addItem = function() {
        $scope.myLanguage.push({ 'language': 'new language', isNew: true });
    };
});

app.controller('CtrlSkill', function($scope){
    $scope.addItem = function() {
        $scope.myskill.push({ 'skill': 'new skill', isNew: true });
    };
});

app.controller('CtrlEducation', function($scope){
    $scope.addItem = function() {
        $scope.myeducation.push({ 'education': 'new education', isNew: true });
    };
});