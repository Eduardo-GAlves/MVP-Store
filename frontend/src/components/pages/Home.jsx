import React, { useState, useEffect } from 'react';
import CarouselSection from '../CarouselSection/CarouselSection'
import axios from 'axios';
import Produto from './Produto';


const Home = () => {

  const[ produto, setProduto] = useState([])

  useEffect(() => {
    axios.get("http://localhost/produtos")
    .then((response) => {
      setProduto(response.data)
    })

    .catch(() => {
      console.log("Deu errado")
    })
  }, [])
  return (
    <div>
      <CarouselSection
        data={produto}
        // dataUrl={'http://localhost:3000/static/shoes.json'}
        title={'Novidades'}
      />
      {/* <CarouselSection
        dataUrl={'http://localhost:3000/static/sports.json'}
        title={'Experimente um novo esporte'}
      />
      <CarouselSection
        dataUrl={'http://localhost:3000/static/blog.json'}
        title={'Blog'}
      /> */}
    </div>
  )
}

export default Home
