import logo from './logo.svg';
import './App.css';
import Pessoa from './components';

function App() {

  const data = [
    {
      name:'Pablo',
      age:'49',
      country:'Colombia'
    },
    {
      name:'Juan',
      age:'24',
      country:'Mexico'
    },
    {
      name:'Patricia',
      age:'46',
      country:'Brasil'
    },
    {
      name:'Carlos',
      age:'10',
      country:'Brasil'
    },
  ]

  return (
    <div className="App">
      <div className="App-header">
        
        {data.map((dev,index) => (

          <Pessoa
            key= {index} 
            name= {dev.name}
            age= {dev.age}
            country= {dev.country} 
          />
          
        ))}

      </div>
    </div>
  );
}

export default App;
