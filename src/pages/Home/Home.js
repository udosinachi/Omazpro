import React from 'react'
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
    </div>
  )
}

export default Home
