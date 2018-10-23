'use strict';

angular.module('openwheels.person.show.damage', [])

.controller( 'PersonShowDamageController', function ($location, $uibModal, $state, $stateParams, $scope,
  alertService, damageService, damages, perPage, $mdDialog) {

  $scope.curPage = 1;
  $scope.perPage = perPage;
  handleDamages(damages);

  function handleDamages(damages) {
    $scope.damages = damages.result;
    $scope.lastPage = Math.ceil(damages.total / $scope.perPage);
  }

  function buildParams() {
    var params = {};
    params.person = $stateParams.person;
    params.finalized = $stateParams.finalized === 'true' || null;
    return params;
  }

  $scope.nextPage = function() {
    damageService.search(_.extend(buildParams(), {max: $scope.perPage, offset: $scope.curPage * $scope.perPage}))
    .then(function(damages) {
      handleDamages(damages);
      $scope.curPage = $scope.curPage + 1;
    });
  };

  $scope.prevPage = function() {
    damageService.search(_.extend(buildParams(), {max: $scope.perPage, offset: ($scope.curPage - 2) * $scope.perPage}))
    .then(function(damages) {
      handleDamages(damages);
      $scope.curPage = $scope.curPage - 1;
    });
  };

  $scope.params = {
    finalized: $stateParams.finalized === 'true' || 'false',
  };

  $scope.refresh = function () {
    $state.go($state.current.name, $scope.params);
  };

  $scope.clear = function () {
    $location.search({});
  };

  $scope.deleteDamage = function (damage) {
    var confirm = $mdDialog.confirm()
    .title('Schade verwijderen')
    .textContent('Weet je zeker dat je deze schade wil verwijderen?')
    .ok('Ja')
    .cancel('Nee');

    $mdDialog.show(confirm)
    .then(function(res) {
      damageService.remove({ damage: damage.id })
      .then(function (result) {
        alertService.add('success', 'Damage removed.', 5000);
        var index = $scope.damages.indexOf(damage);
        if(index >= 0) {
          $scope.damages.splice(index, 1);
        }
      })
      .catch(alertService.addError)
      .finally(alertService.loaded);
    });
  };

});