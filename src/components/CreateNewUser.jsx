import React, { Dispatch, useState } from 'react'
import { CgCloseR } from 'react-icons/cg'
import { VscDiffAdded } from 'react-icons/vsc'
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions';


function CreateNewUser({ createUser }) {
  
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    status: 'active'
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    createUser(userData)
  };
  return (
    <div className={`w-11/12 max-w-[700px] lg:w-[50%] mb-12`}>
        <form className={`bg-white rounded-lg py-6 px-4 shadow-2xl`} onSubmit={handleSubmit}>
            <div className="mb-6">
                <h3 className="font-semibold text-center text-4xl">Create New Member</h3>
            </div>

            <div className="mb-3">
                <label htmlFor="" className="font-semibold block">FirstName</label>
                <input type="text" placeholder='Enter First Name' className='rounded-md h-12 p-2 w-full border border-[#F2F0F0]' id="" name="firstname" value={userData.firstname} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="font-semibold block">LastName</label>
                <input type="text" placeholder='Enter Last Name' className='rounded-md h-12 p-2 w-full border border-[#F2F0F0]' id="" name="lastname" value={userData.lastname} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="font-semibold block">Email</label>
                <input type="text" placeholder='Enter Email' className='rounded-md h-12 p-2 w-full border border-[#F2F0F0]' id="" name="email" value={userData.email} onChange={handleChange} />
            </div>

            <div className="flex gap-4 text-sm justify-end">
                <button className={`bg-black text-white rounded-md gap-2 p-2 ${userData.email && userData.firstname && userData.lastname  ? 'cursor-pointer' : 'cursor-not-allowed'}`} disabled={userData.email && userData.firstname && userData.lastname  ? false : true}>{
                    userData.email && userData.firstname && userData.lastname  ? <div className="flex items-center gap-2"><VscDiffAdded /><span>Add User</span></div> : 'Fill Form'}</button>
            </div>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
    users: state.users.users
  });
  
export default connect(mapStateToProps, { createUser })(CreateNewUser)