// UserList.js
import Header from './Header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then(response => {
                console.log('User deleted successfully:', response.data);
                setUsers(users.filter(user => user._id !== id)); // Update state after deletion
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };
    

    return (
        <div>
             <Header title="Open Throttle's" n2='Bookings' ln2='/bookingpanel'/>
             <div className="card text-bg-dark">
  <img src={process.env.PUBLIC_URL + '/bike.jpeg'} className="card-img" alt="..."/>
  <div className="card-img-overlay">
  
            <h2 style={{backgroundColor:'black', padding:20,textAlign:'center' ,fontSize:30}}>User List</h2>
            <table className="table table-striped table-hover" style={{ backgroundColor: 'transparent' }}>
                <thead>
                    <tr>
                    <th>Serial No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        {/* <th>Delete</th> New column for delete button */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={user._id}>
                             <td>{index + 1}</td> {/* Serial number */}
                            <td>{user.Fname} {user.Lname}</td>
                            <td>{user.Email}</td>
                            <td>{user.City}</td>
                            {/* <td>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td> Delete button */}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
</div>
            {/* <Footer/> */}
        </div>
    );
};

export default Users;
