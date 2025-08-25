import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Product from '../Components/Product'
import Card from '../Components/Card'
import UseState from '../Components/UseState'

function Home() {
  return (
    <div>
      {/* <Banner />
      <Product /> */}

        <UseState />

        <Card title="This is title" desc="This is description" price="3432" />

    </div>
  )
}

export default Home