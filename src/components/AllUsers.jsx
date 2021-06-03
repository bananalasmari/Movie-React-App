import React, { useEffect , useState } from 'react'
import axios from 'axios'

export default function AllUsers() {
    const [users , setUsers] = useState([])

   useEffect(()=>{
    let token = localStorage.getItem('token')

    axios.get('http://localhost:4000/api/v1/user/allusers' , 
    {headers: { token :token }}
    )
    .then(data => setUsers(data.data.allUser))
    .catch(err => console.log(err.response))
   },[])
    

    return (
        <div 
        style={{textAlign: 'center' , padding : 40 ,fontSize : 30 }}
        >
         <h1> all Users </h1>

         {users.map(user => <h1> {user.name}</h1>)}
        </div>
    )
}
