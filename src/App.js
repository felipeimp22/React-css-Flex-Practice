import React from 'react';
import * as headerImage from './assets/geekHeader.jpg'
import './style.css'
import Chart from './chart'
function App() {
  return (
    <div className="App">
     
      <div className="Header"> 
      <a  href="#content">About us</a>
     <img src={headerImage}/>
      </div>
      <div className="content" >
       
       <div className="images">
       <div className="geek" id="content"> 
        <div className="txt">
       <h4>oi Texto na imagem</h4>
       </div>
          <img  className="oi"  src="https://www.guerreirageek.com/wp-content/uploads/2019/08/love-you-3000.jpg"></img>
          <img className="oi2"  src="https://www.guerreirageek.com/wp-content/uploads/2019/08/love-you-3000.jpg"></img>
          </div>
        </div>
        <div className="images2">
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsbh0TMAKiVtDRXgXvPd-EO2rnFYWmZPv3ig&usqp=CAU"/>
         
        </div>
      
      </div>
   
       <div>
         <Chart className="chart" />
        
         </div>
         <div className="bottom"></div>
    </div>
  );
}

export default App;
