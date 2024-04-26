import './App.css';
import User from './User';
import HomeContainers from './Containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <User data={{name:'Smruti Dash',age:26}}/>
      <HomeContainers/>
    
      </div>
  );
}

export default App;
