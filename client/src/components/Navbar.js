import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getText from '../redux/actions'
import '../navbar.css'

const Navbar = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      dispatch(getText(input))
      setInput('')
    };
  }

  return (
    <>
      <nav className='pb-2 navbar navbar-dark' style={{ backgroundColor: '#d80505' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <input id='input' type='text' value={input} placeholder='Insert Text' onChange={handleChange} />
            <button type='submit' className='mb-1 ml-4 btn btn-primary btn-sm active'>Send</button>
          </div>
        </form>
      </nav>
    </>
  )
}

export default Navbar
