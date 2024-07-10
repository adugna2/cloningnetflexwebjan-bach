
// import React from 'react';
import './Home.css';
import Footer from '../../Components/Footer/Footer';
import Header from  '../../Components/header/Header';
 import Banner from '../../Components/Banner/Banner';
import RowList from '../../Components/RowList';
//  import Row from '../../Components/row/Row';
function Home() {
  return (
    <div className='home'>
      <Header />
        <Banner/>  
      <RowList/>  
      <Footer/>
    </div>
  );
}

export default Home;