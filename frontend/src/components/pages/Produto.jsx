import { Link } from 'react-router-dom'

import "./produto.css"
import AsainBtn from "../AsainBtn/AsainBtn";
import AsainChck from "../AsainChck/AsainChck";
import MVPProdutoGaleria from "../MVPProdutoGaleria/MVPProdutoGaleria";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import {MVPBD} from '../../data/MVPBD'
import { CarrinhoContext } from "../../context/CarrinhoContext";
import CarouselSection from '../CarouselSection/CarouselSection';

let coresProduto = [{
   id: 1,
   value: "mista",
   conteudo: 1
},
 { id: 2,
   value: "preta",
   conteudo: 2
}
];

let tamanhosProduto = [
   {
   id: 1,
   value: "P",
   conteudo: "P"
},
   {
   id: 2,
   value: "M",
   conteudo: "M"
},
   {
   id: 3,
   value: "G",
   conteudo: "G"
},
]

function Produto() {

   const {saveCarrinho} = useContext(CarrinhoContext)
   // false===true? console.log(listaCarrinho): "";
   const { id } = useParams();
   const produtoAtual = MVPBD.produtos.find(prod => prod.id ===parseInt(id))

   // const onClickComprar = () => {
   //    ()=>(saveCarrinho( produtoAtual))
   // }  

   return ( 
         <div className="card_produto">
            <h1>{produtoAtual.nome}</h1>
            <main className="item__produto">

               <div className="identificao">
                  {/* <h2 className="identificacao__titulo">{produtoAtual.nome} </h2> */}
                  <span className="identificacao__referencia">REF.: {produtoAtual.ref}</span>
               </div>
               
               <section className="produto">

                  <MVPProdutoGaleria imagem={produtoAtual.imagem}/>

                  <div className="produto__dados">
                        <div className="produto__preco">
                           <div className="produto__preco__original">{produtoAtual.precoOriginal}</div>
                           <div className="produto__preco__atual">{produtoAtual.preco}</div>
                        </div>

                        <div className="produto__cores">
                           <span>COR: </span> <span className="produto_cores_selecionada">Preta</span>
                           <AsainChck opcoes={coresProduto} name="cor"/>
                        </div>

                        <div className="produto__tamanho">
                           <span>Tamanho:</span> <span className="produto__tamanho__selecionado">P</span>
                           <AsainChck opcoes={tamanhosProduto} name="tamanhos"/>
                        </div>
                        <Link  to="/checkout/">
                           <AsainBtn onClick={()=>(saveCarrinho( produtoAtual))}>
                              Comprar
                           </AsainBtn>
                        </Link>
                        <AsainBtn onClick={()=>(saveCarrinho(produtoAtual))}>Adicionar ao carrinho</AsainBtn>
                  </div>
               </section>
            </main>

         <div className="outrosProdutos">
         <CarouselSection
        data={MVPBD.produtos}
        title={'Novidades'}
      />
                     </div>

         </div>
      
    );
}

export default Produto;