'use strict';

angular.module('driverLicense', [])

	.directive('driverLicense', function ($q, $log, $filter, $compile, $uibModal, settingsService, RC_FILE_DOCUMENT) {
		return {
			restrict: 'E',
    		templateUrl: 'directives/driverLicenseDirective.tpl.html',
			scope: {
				person: '=',
				image: '='
			},
			controller: function ($scope) {

        		$scope.rot = 0;

				var isValidImageUrl = function (url) {
					var d = $q.defer();
					var img = new Image();

					img.onerror = function (error) {
						d.resolve(false);
					};
					img.onload = function () {
						d.resolve(true);
					};
					img.src = url;
					return d.promise;
				};

				$scope.open = function (photo) {
					$uibModal.open({
						template: '<img ng-style="{transform: \'rotate(\'+rot+\'deg)\'}" ng-click="dismiss()" src="' + photo + '">',
						windowClass: 'modal--driverlicense',
            			scope: $scope,
						controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
							$scope.dismiss = function () {
								$uibModalInstance.dismiss();
							};
						}]
					});
				};

				$scope.driverLicenseUrl = settingsService.settings.server + RC_FILE_DOCUMENT + '/' + $scope.image;

				isValidImageUrl($scope.driverLicenseUrl).then(function (imageValid) {
					$scope.imageValid = imageValid;
				});

			}
		};
	});
