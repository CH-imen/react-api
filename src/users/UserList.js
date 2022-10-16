import React, { useEffect, useState } from 'react';
import axios from 'axios';

import User from '../User/User';

const Users = () => {
  const [isLoading, setisLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setisLoading(true);
    const getData = async () => {
      try {
        const usersArray = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(usersArray.data);
        setisLoading(false);
      } catch (error) {
        setUsers([]);
      }
    };
    getData();
    return () => {};
  }, []);

  return isLoading ? (
    <div className='row justify-content-md-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  ) : (
    <div className='row justify-content-md-center'>
       
      {users.map((user, key) => (
        <User user={user} key={key} />
      ))}
    </div>
  );
};

export default Users;
