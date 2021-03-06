import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        console.log(userName)
        dispatch({ 
          type: 'GET_USERNAME',
          payload: userName
        })
        setUserName('')
        navigate('/Pokedex')
    }

  return (
    <div className='background-login'>
      <div className='container-title'>
       
      </div>
      <div className='container-subtitle'>
       
      </div>
    <div className='login-form'>
        <form action="" onSubmit={submit}>
            <input  type="text"
                    placeholder=' Enter your name master' 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)}/>
            <button>GO</button>    
        </form>    
    </div>
    </div>
  )
}

export default Login