import React, { useState } from 'react'

const Forms = () =>{
  const[name1,setName] = useState('');
  const[email,setEmail] = useState("");
  const[gender, setGender] = useState('none');
  const[languages, setLanguages] = useState({
    python : false,
    java: false,
    javascript: false,
  });
  const[role,setRole] = useState("none");

  const handleSubmit= (e) =>{
    e.preventDefault();
    console.log({name1,email,gender,languages,role});
  }
  const handlecheckbox= (e) =>{
    const {id, checked} = e.target;
    setLanguages((prev)=>({...prev, [id]: checked}));
  }
    return(
      <>
       <form onSubmit={handleSubmit}>
        <header><h3>A simple Form using the Design</h3></header> 
        <fieldset>
          <legend>Personal information</legend>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name1} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/>
          <label htmlFor="gender">Gender is </label>
          Male:<input type="radio" name="gender" id="male" value="male" checked = {gender == 'male'} onChange={(e)=>setGender(e.target.value)}/>
          Female:<input type="radio" name="gender" id="female" value="female" checked ={gender == 'female'} onChange={(e)=>setGender(e.target.value)}/>
        </fieldset>
        <fieldset>
          <legend>Skill Section</legend>
          <label htmlFor="language">Languages</label>
          <br/>
          <input type="checkbox" name="language" checked={languages.python} id="python" onChange={handlecheckbox} /><span>Python </span>
          <input type="checkbox" name="language" checked={languages.java} id="java" onChange={handlecheckbox} /><span> Java </span>
          <input type="checkbox" name="language" checked={languages.javascript} id="javascript" onChange={handlecheckbox} /><span> JavaScript </span>
          <br/>

          <label htmlFor="role">Role</label>
          <select name="role" id="role" onChange={(e)=>setRole(e.target.value)}>
                <option value="none">none</option>
                <option value="user" >User</option>
                <option value="admin">Admin</option>
          </select>
        </fieldset>
          <button type="submit">submit</button>
       </form>
       <footer>designed with love ❤️
        <br />developed by sinchan
       </footer>
      </>
    )
}


const App = () => {
  return (
    <>
      <Forms/>
    </>
  )
}

export default App