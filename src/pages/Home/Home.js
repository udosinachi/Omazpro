import React from 'react'
import Carrousel from '../../components/Carrousel/Carrousel'
import Comments from '../../components/Comment/Comments'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import SubServices from '../../components/SubServices/SubServices'
import Welcome from '../../components/Welcome/Welcome'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
      <SubServices />
      <Comments />
      <Carrousel />
    </div>
  )
}

export default Home
