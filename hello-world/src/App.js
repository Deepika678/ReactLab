import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import TeamDetails from './components/TeamDetails';
;

function App() {
  const team =[
    {
        id:1,
        name:'Tom',
        Location:'Chennai'
    },
    {
        id:2,
        name:'Berlin',
        Location:'Bangalore'
    },
    {
        id:3,
        name:'Charles',
        Location:'Mumbai'
    }
    
]
  return (
    <div className="App">
       <Welcome name="Deepika" ></Welcome>
       <hr/>
       <Display/>
       <hr/>
       <Message/>
       <hr/>
       <Counter></Counter>
       <hr/>
       <TeamDetails team={team}/>
    
       
     
    </div>
  );
}

export default App;
 {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}