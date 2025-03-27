import {  } from 'react'
import './App.css'
import Users from './components/Users'
import CreateNewUser from './components/CreateNewUser'

function App() {

  return (
    <div className='flex items-center lg:items-start justify-between flex-col lg:flex-row lg:px-4 pb-12 pt-8'>
      <CreateNewUser />
      <Users />
    </div>
  )
}

export default App
