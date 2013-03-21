function ListaComprasController($scope) {
    $scope.itens = [
        {id: 1, produto: 'Leite', quantidade: 2, comprado: false},
        {id: 2, produto: 'Cerveja', quantidade: 12, comprado: false}
    ];
    
    $scope.adicionaItem = function () {
        var quant =  $scope.itens.length + 1;
        $scope.itens.push({id: quant ,produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
    };
    
     $scope.deletaItem = function () {
      var botao = this.document.getElementById("botao").value;
      console.log(botao);
      var n = botao.toString();
       document.getElementById(n).style.display = 'none';
    };
}
