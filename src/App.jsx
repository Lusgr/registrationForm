import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstname, setFirstName]= useState("")
  const [lastNmae, setlastNmae] = useState("")
  const [nation, setNation] = useState("")
  const [age, setAge] = useState("")
  const [gmail, setGmail] =useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword]= useState("")
  const [errorMessage, setErrorMessage]= useState("")

  const RegisterForm = (e)=>{
    e.preventDefault()

    //e.target.reset()

    if(!firstname || !lastNmae || !nation || !age || !gmail || !password || !repeatPassword){
      setErrorMessage("Please fill in all the fields.")
      return;
    }
    if(gmail.indexOf("@") === -1){
      setErrorMessage("Please enter a valid email address.")
      return;
    }
    if(password.length < 8){
      setErrorMessage("Password should be at least 8 characters lo")
      return;
    }
    if(password != repeatPassword){
      setErrorMessage("Passwords do not match.")
      return;
    }

   alert('You have successfully registered.');
  }


  return (
    <>
     <div>
          <h1>REGISTER</h1>
        </div>
      <div className='container'>
       
        <form onSubmit={RegisterForm}>
          <div>
            <label htmlFor='name'>Enter your firstname.</label>
            <input id='name' type='text' value={firstname}  onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='lastname'>Enter your lastname</label>
            <input id='lastname' type="text" value={lastNmae} onChange={(e) => setlastNmae(e.target.value)} />
          </div>
          <div>
            <label htmlFor='nation'>What is your nation?</label>
            <input id='nation' type='text' value={nation} onChange={(e) => setNation(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='age'>Enter your age</label>
            <input id='age' type='number' value={age} onChange={(e) => setAge(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='gmail'>Enter your gmail</label>
            <input id='gmail' type='email' value={gmail} onChange={(e) => setGmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='password'>Write you pasword</label>
            <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='passwordRepeat'>Again write your password</label>
            <input id='passwordRepeat' type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
          </div>
          <button type="submit">Register</button>
          

        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  )
}

export default App
