/*function adicionar(produto){
  const qtd = document.getElementById('qtd_'+ produto)
  const valor = document.getElementById('valor_'+ produto)
  const total = document.getElementById('total_'+ produto)

  // opção de escrita = qtd.innerHTML = Number (qtd.innerHTML) + 1

  qtd.innerHTML++
  total.innerHTML = qtd.innerHTML * valor.innerHTML
}
function retirar(produto){
  const qtd = document.getElementById('qtd_'+ produto)
  const valor = document.getElementById('valor_'+ produto)
  const total = document.getElementById('total_'+ produto)

  qtd.innerHTML--
  total.innerHTML = qtd.innerHTML * valor.innerHTML
  }
  
  ESSA SERIA A FORMA DE APLICAR A FUNÇÃO DE RETIRAR E ADICIONAR 
  EM ESSCRITAS SEPARADAS, ABAIXO ESTAR A FORMA DE ESCRITA MAS PRATICA
  E FUNCIONAL*/
  function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_'+ produto)
    const valor = document.getElementById('valor_'+ produto)
    const total = document.getElementById('total_'+ produto)

    if (acao == '-' && qtd.innerHTML == 0){
      alert('Quantidade não pode ser menor que zero')
    }else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valortotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
        total.innerHTML = formatarValor(valortotal)
        soma()
    } 
  }
    /* formas de escrever 
    function soma(){
    let soma = 0

    soma = soma + Number(document.getElementById('total_1').innerHTML)
    soma = soma + Number(document.getElementById('total_2').innerHTML)
    soma = soma + Number(document.getElementById('total_3').innerHTML)

    soma += Number(document.getElementById('total_1').innerHTML)
    soma += Number(document.getElementById('total_2').innerHTML)
    soma += Number(document.getElementById('total_3').innerHTML)
    */
    // forma mais pratica de escrever
    function soma(){
        let soma = 0
        for (let i = 1; i <= 3; i++){
          let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
          soma += Number(numero)
        }
        document.getElementById('subtotal').innerHTML = formatarValor(soma)
      }
        // soma += Number(document.getElementById('total_'+ i).innerHTML)

  function somenteNumeros(n){
    return n.replace(/\D/g, '')
  }
  
  function formatarValor(n){
     return 'R$ ' + n.toLocaleString('pt-BR')
  }