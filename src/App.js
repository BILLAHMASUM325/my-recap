import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([])

  const [usrname, setUserName] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUserName(data))
  })

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  },[])

  // const nayoks = [{name:'Jasim', age: 56}, {name: 'Deepjol', age: 61}, {name: 'Billah', age:45}]
  
  return (
    
    <div className="App">
      <MovieCounter></MovieCounter>

      
       {
         nayoks.map(nk => <Villian name = {nk.name} email = {nk.email}></Villian>)
       }

       {
         usrname.map ( usName => <UserName urn ={usName.username}></UserName>)
       }
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

function Villian(props){

  const StyleColor = {
    color:'cyan',
    backgroundColor: 'gray',
    margin: '20px',
    padding: '10px'
  }

  return (
    <div style={StyleColor}>
      <h1>My name is {props.name}</h1>
      <h5>My email is {props.email}</h5>
    </div>
  )
}

function MovieCounter(){
  const [count, setCount] = useState(0);
  
  const handlerIncrease = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const handlerDecrease = () =>{
    const newCount = count -1;
    setCount(newCount);
  }
  return(
  <div>
    <button onClick={handlerDecrease}>Delete Movie</button>
    <button onClick={handlerIncrease}>Add Movie</button>
    <h3>Numbers of Movies: {count}</h3>
  </div>
  )
}

function UserName(props){
  return(
    <div>
      <h4>UserName:{props.urn} </h4>
    </div>
  )
}
export default App;
