import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Header from '../../Header';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDeleteUser = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        //Delete from the database
        fetch(`https://coffee-store-server-two-ruddy.vercel.app/users/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
                  title: "Success!",
                  text: "User deleted successfully.",
                  icon: "success"
                });
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining);
          }
        })
      }
    });    
  }
  return (
    <div>
      <Header></Header>
      <div className="text-center p-10 ">
        <h1>{users.length} Users</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Joining date</th>
                <th>Last sing in at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>              
              {users.map(user => <tr key={user._id} className="hover">
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td className='flex gap-2'>
                  <span className='cursor-pointer bg-gray-400 text-white p-2 rounded-md'>Edit</span>
                  <span onClick={() => handleDeleteUser(user._id)} className='cursor-pointer bg-red-400 text-white p-2 rounded-md'>Delete</span>
                </td>
              </tr> )}             
            </tbody>
          </table>
        </div> 
      </div>
    </div>
  )
}

export default Users