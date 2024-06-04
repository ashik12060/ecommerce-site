import React, { useEffect, useState } from 'react'
import axiosInstance from '../../pages/axiosInstance';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const showAllUsers = async () => {
        
        setLoading(true);
        try {
          
          const { data } = await axiosInstance.get(`${process.env.REACT_APP_API_URL}/api/users`);
          setUsers(data);
          // console.log(users)
          console.log(data);
          setLoading(false);
        } catch (error) {}
      };
    
      useEffect(() => {
        showAllUsers();
      }, []);


  return (
    <div>Users
         <ul>
        {users.map(user => (
            <li className='border border-1' key={user._id}>{user.name} (Email: {user.email})</li>
        ))}
    </ul>


    
    </div>
  )
}

export default Users