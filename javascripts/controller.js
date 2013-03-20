function ListaComprasController($scope) {
    $scope.itens = [
        {id: 1, produto: 'Leite', quantidade: 2, comprado: false},
        {id: 2, produto: 'Cerveja', quantidade: 12, comprado: false}
    ];
    
    $scope.adicionaItem = function () {
        var quant =  $scope.itens.length;
        $scope.itens.push({id: quant ,produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
    };
}
