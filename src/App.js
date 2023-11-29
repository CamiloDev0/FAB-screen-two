import './App.css';
import {useState} from 'react';
function App() {
  const [currentScreen,setCurrentScreen]=useState(0);

  return (
    <div className="App" >
     {currentScreen === 0 ? (
      <div >
      <img src="images/frame1.png" alt="Responsive" style={{position:'absolute',width:'100%',height:'100%',left:'0%'}}/>
      <img src="images/next.png"  alt='' style={{position:'absolute',top:'81%',left:'79%'}} onClick={() => {setCurrentScreen(1)}} />
      </div>
     ) :null}
     {currentScreen === 1 ? (
      <div >
      <img src="images/frame2.png" alt="Responsive" style={{position:'absolute',width:'100%',height:'100%',left:'0%'}}/>
      <img src="images/back.png"  alt='' style={{position:'absolute',top:'6%',left:'3%'}}  onClick={() => {setCurrentScreen(0)}} />
      </div>
     ) :null}
    </div>
  );
}

export default App;
