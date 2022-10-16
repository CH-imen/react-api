import React from 'react';

const Profile = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className='col-md-4 my-3 ' >
      <div className='card' style={{ width: '60%' }}>
        <img
          src={require('../assets/img/user-img.png')}
          alt='profile'
          className='card-img-top'
        />

        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <h6 className='card-title'> {phone}</h6>

          <p className='card-text'> {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
