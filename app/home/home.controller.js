angular.module('home').controller('homeController', homeController);

function homeController($scope, ClientFactory) {

    $scope.gridOptions = {

      enablePaginationControls: true,

        paginationPageSizes: [
            25, 50, 75
        ],
        paginationPageSize: 25,

        columnDefs: [
            {
                field: 'INDEX_ID',
                displayName: 'Index',
                cellClass: 'index',
                headerCellClass: 'index-header',
                width: "20%"
            }, {
                field: 'GROUP_DESCRIPTION',
                displayName: 'Description',
                width: "30%"
            }, {
                field: 'GROUP_CONCAT',
                displayName: 'Group Info',
                width: "50%"
            }
        ]
    };

    ClientFactory.getClients().then(function(response) {

        $scope.gridOptions.data = response.data.rows;

    })
}
