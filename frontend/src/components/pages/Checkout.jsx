import './checkout.css'

function Checkout() {
   return ( 
    <body>
        <div class="containerCheckout">
            <div class="containerEndereço">
                <h2 class="tituloPadrao">1 - Endereço de entrega</h2>
                <ul>
                    <li class="containerLista"><label class="boxEndereço" for="endereço">CEP *</label></li>
                    <li class="containerLista"><input class="addEndereço" name="endereço" required=""  id="endereço" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="rua">Rua/Avenida *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="rua" required=""  id="rua" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="numero">Número *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="numero" required=""  id="numero" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="bairro">Bairro *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="bairro" required=""  id="bairro" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="complemento">Complemento </label></li>
                    <li class="containerLista"><input class="addEndereço"name="complemento" id="complemento" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="cidade">Cidade *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="cidade" required=""  id="cidade" type="text"/></li>

                    <li class="containerLista"><label class="boxEndereço" for="estado">Estado *</label></li>
                    <li class="containerLista"><input class="addEndereço"name="estado" required=""  id="estado" type="text"/></li>
               </ul>  
            </div>

            <div class="containerPagamento">
                <h2 class="tituloPadrao">2 - Formas de pagamento</h2>
                <div>
                    <i class="fa-solid fa-address-card"></i>
                    <h3 class="textoPagamento">Cartao de Crédito </h3>

                    <div class="exemploCartao">
                        <img class="imagemCartao" src="/cartao.png" alt="Cartao de crédito"/>
                        <p class="textoInformativo">
                            A MVP Esportes aceita várias bandeiras de cartão de crédito
                        </p>
                        <div class="icone">
                            <i class="fa-brands fa-cc-visa"></i>
                            <i class="fa-brands fa-cc-mastercard"></i>
                            <i class="fa-brands fa-cc-diners-club"></i>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <li class="containerLista">
                                <label class="tituloCartao" for="numeroCartao">
                                    Número do Cartão
                                </label>
                            </li>
                            <li class="containerLista">
                                <input  class="dadosCartao"
                                    name="numeroCartao" 
                                    required="" 
                                    id="numeroCartao"
                                    type="text" 
                                    placeholder="  0000.0000.0000.0000"
                                    pattern="\d{4}\.\d{4}\.\d{4}.\d{4}" 
                                    title="Digite um CPF no formato: xxxx.xxxx.xxxx.xxxx"/>
                            </li>

                            <li class="containerLista">
                                <label class="tituloCartao" for="textName">Nome do Titular</label>
                            </li>
                            <li class="containerLista">
                                <input class="dadosCartao" name="textName" required="" id="textName" type="text"/>
                            </li>

                            <li class="containerLista">
                                <label class="tituloCartao" for="dataValidade">Data de Validade</label>
                            </li>
                            <li class="containerLista">
                                <input class="dadosCartao" name="dataValidade"
                                    required=""  
                                    id="dataValidade" 
                                    type="text"
                                    placeholder="MM/AA"
                                    pattern="\d{2}\/\d{2}" 
                                    title="Digite uma data no formato: xx/xx"/>
                            </li>
                                    
                            <li class="containerLista">
                                <label class="tituloCartao" for="codigoSegurança">Código de Segurança   
                                <i class="fa-solid fa-credit-card"></i>
                                </label>
                            </li>
                            <li class="containerLista">
                                <input class="dadosCartao" name="codigoSegurança"
                                            required=""  
                                            id="codigoSegurança" 
                                            type="text"/>
                            </li>
                            

                            <li class="containerLista">
                                <label class="tituloCartao" for="select">Parcelamento</label>
                            </li>
                            <li class="containerLista">
                                <select class="parcelamento" name="select">
                                    <option value="valor1">Selecione a quantidade de parcelas</option>
                                    <option value="valor2">1x de R$ 229,98 sem juros</option>
                                    <option value="valor3">2x de R$ 114,99 sem juros</option>
                                    <option value="valor4">3x de R$ 76,66 sem juros</option>
                                    <option value="valor5">4x de R$ 56,50 sem juros</option>
                                    <option value="valor6">5x de R$ 46,00 sem juros</option>
                                </select>
                            </li> 
                        </ul>

                    </div>
                </div>

                <div class="boletoBancario">
                    <h3 class="textoPagamento"><i class="fa-solid fa-barcode"></i>  Boleto Bancário</h3>
                </div>
                
                <div class="pagamentoPix">
                
                    <h3 class="textoPagamento"> <i class="fa-brands fa-pix"></i>  PIX</h3>  
                </div>
            </div>

            <div class="containerFinal">
                <div class="containerConfirmaçao">
                    <h3 class="tituloPadrao">3 - Revisar Itens e Envio </h3>
                    
                    <div>
                        <img class="imagemProduto" src="/camisa_brasil.png" alt="Camisa seleção brasileira"/>
                        <div class="organizacaoProduto">
                            <p class="tituloProduto">Camiseta Seleção brasileira</p>
                            <p class="descriçaoProduto">Modelo: Masculino</p>
                            <p class="descriçaoProduto">Quantidade: 1</p>
                            <p class="descriçaoProduto">Tamanho: M</p>
                            <p class="preço">R$ 229,98</p>
                        </div>

                        <div class="cupom">
                            <label class="cupomDesconto" for="textName">Cupom de Desconto:</label>
                            <input class="cupomDesconto" name="textName" required="" id="textName" type="text"/>
                        </div>
                    </div>

                    <div class="envio">
                        <h4 class="textoEnvio"><i class="fa-solid fa-location-dot"></i>  Envio</h4>
                        <div class="boxEnvio">
                            <label><input name="boxPadrao" id="boxPadrao" type="radio" value="0"/> Padrão: Envio Gratuíto - Prazo: Até 10 dias uteis</label>  
                        </div>
                        <div class="boxEnvio">
                            <label><input name="boxPadrao" id="boxPadrao" type="radio" value="1"/> Expresso: R$ 18,50 - Prazo: Até 4 dias uteis</label>
                        </div>
                    </div>

                    <div class="finalizarCompra">
                        <h3 class="tituloPadrao">Resumo do Pedido</h3>

                        <table class="pedido">
                            <tr>
                                <td class="descriçaoPedido">Total em Produtos (1 item)</td>
                                <td class="descriçaoPedido">R$ 229.98</td>
                            </tr>
                            <tr>
                                <td class="descriçaoPedido">Frete</td>
                                <td class="descriçaoPedido">R$ 0.00</td>
                            </tr>
                            <tr>
                                <td class="totalPedido">Total</td>
                                <td class="totalPedido">R$ 229.98</td>
                            </tr>
                        </table>

                        <button class="botaoCompras">Finalizar Compra</button>
                    </div>

                </div>
            </div>
        </div>
    </body>
    );
}

export default Checkout;