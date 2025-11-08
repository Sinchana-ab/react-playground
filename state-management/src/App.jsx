import React, { use, useState } from 'react'

const Counter =()=>{
  const[count, setcount] = useState(0);
  return(
    <>
    <h5>For functional component use UseState for manging the date</h5>
    <p>the current count is {count}</p>
    <button onClick={()=>setcount(count+1)}>+ for click</button>
    <button onClick={()=>setcount(count- 1)}>- click</button>
    <button onClick={()=>setcount(0)}>Reset</button>

    </>
  ) 
}

class ClassComponent extends React.Component{
  handleClick = ()=>{
      alert("these input is typed "+this.state.name);
  }
  constructor(){
    super();
    this.state = {name: ""};
  }

  render(){
    return(
      <>
      <h5>This is Class component, we are using this.state and this.setState </h5>
      <input type="text" name = "name" id = "name" value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}/>
      <button onClick={this.handleClick}>alert</button>
      <p>{this.state.name}</p>
      </>
    )
  }
 
}

const InputTaking = ({name1, onName1, age, onAge}) =>{
  return(
    <>
      <h5>this is calass only ment for user input nad this child class</h5>
      <input type="text" name="name" id="name" value={name1} onChange={(e)=>onName1(e.target.value)} placeholder='Enter name'/>
      <br/>
      <input type="number" name="age" id="age" value={age} onChange={(e)=>onAge(e.target.value)} placeholder='Enter age' min={0} max={90}/>
  
    </>
  )
}

const Display = ({name1, age}) =>{
  return(
    <>
    <h5>the person name is {name1}, and current age is {age}</h5>
    <span>here i am using tinary operator</span>
    <p>{name1} , can {age >= 18 ? "vote" :"can't vote"} </p>
    </>
  )
}

const EvenOrOdd = ({number}) =>{
  //console.log("the number is "+number)
  if(number% 2 == 0){
    return(
      <p>{number} is even number</p>
    )
  }
  else{
    return(
      <p>{number} is odd number</p>
    )
  }
}

const App = () => {
  const[name1, setName] = useState("");
  const[age, setAge] = useState(0);
  const[numbers, setNumbers] = useState(0);
  return (
    <>
    <Counter/>
    <ClassComponent/>
    <h3>here Lifting state up and passing the state as props as showned</h3>
    <InputTaking name1={name1} onName1={setName} age={age} onAge={setAge}/>
    <Display age={age} name1={name1}/>
    <span><b>Condition rendering</b> </span>
    <input placeholder='enter a number' type="number" name="numbers" id="numbers" value={numbers} onChange={(e)=>setNumbers(e.target.value)}/>
    <EvenOrOdd number={numbers}/>
    </>
  )
}

export default App