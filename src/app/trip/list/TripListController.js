'use strict';

angular.module('openwheels.trip.list')

.controller('TripListController', function (
  $log, $state, $stateParams, $scope, alertService, dialogService, bookingService, paymentService, bookings) {

  var todayTimeframe = {
    startDate: moment().subtract(1, 'months').format('YYYY-MM-DD'),
    endDate: moment().add(1, 'months').format('YYYY-MM-DD')
  };

  $scope.bookings = bookings;
  $scope.now = moment().format('YYYY-MM-DD HH:mm');

  $scope.currentTimeFrame = {
    startDate: $stateParams.startDate || todayTimeframe.startDate,
    endDate: $stateParams.endDate || todayTimeframe.endDate
  };

  var providerOptions = (function () {
    var ids = [];
    bookings.forEach(function (booking) {
      if (ids.indexOf(booking.person.providerId) < 0) {
        ids.push(booking.person.providerId);
      }
    });
    ids.sort();
    return ids.map(function (id) {
      return { label: 'Provider ' + id, providerId: id };
    });
  }());

  var filterOptions = $scope.filterOptions = [
    {
      label: 'Toon alle ritten',
      filter: function (bookings) {
        return bookings;
      }
    },
    {
      label: 'Selecteer een provider...',
      selectFrom: providerOptions,
      filter: function (bookings, option) {
        if (!option) {
          return bookings;
        }
        return bookings.filter(function (booking) {
          return booking.person.providerId === option.providerId;
        });
      }
    },
    {
      label: 'Lopende riten',
      filter: function (bookings) {
        var now = moment();
        return bookings.filter(function (booking) {
          return !( moment(booking.endBooking).isBefore(now) || moment(booking.beginBooking).isAfter(now) );
        });
      }
    }
  ];

  $scope.activeFilterOption = filterOptions[0];

  $scope.performFilter = function () {
    var activeFilterOption = $scope.activeFilterOption;
    $log.debug('Filtering ' + (activeFilterOption.label));
    $scope.bookings = activeFilterOption.filter(bookings, activeFilterOption.option);
  };

  $scope.previous = function () {
    $state.go($state.current.name, {
      startDate: moment($scope.currentTimeFrame.startDate).subtract(2, 'months').format('YYYY-MM-DD'),
      endDate: moment($scope.currentTimeFrame.endDate).subtract(2, 'months').format('YYYY-MM-DD')
    });
  };

  $scope.next = function () {
    $state.go($state.current.name, {
      startDate: moment($scope.currentTimeFrame.startDate).add(2, 'months').format('YYYY-MM-DD'),
      endDate: moment($scope.currentTimeFrame.endDate).add(2, 'months').format('YYYY-MM-DD')
    });
  };

  $scope.reset = function () {
    $state.go($state.current.name, {
      startDate: undefined,
      endDate: undefined
    });
  };

  $scope.momentDiff = function (begin, end) {
    var diff = moment(begin).diff(moment(end));
    if (isNaN(diff)) {
      return '-';
    }
    return moment.duration(diff).humanize();
  };

  $scope.showAll = function showAll() {
    $state.go($state.current.name, {
      startDate: '2000-01-01',
      endDate: '2099-12-31'
    });
  };

  $scope.checked = function checked(booking) {
    bookingService.checked({booking: booking.id})
      .then(
      function (returnedBooking) {
        booking.checked = returnedBooking.checked;
      }
    );
  };

});
