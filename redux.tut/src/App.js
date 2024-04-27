import './App.css';
import User from './User';
import HomeContainers from './Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer'
function App() {
  return (
    <div className="App">
      <User data={{name:'Smruti Dash',age:26}}/>
      <HeaderContainer/>
      <HomeContainers/>
      
    
      </div>
  );
}

export default App;
