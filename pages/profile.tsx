import React from 'react';
import { Avatar } from '../components/UI/Avatar/Avatar';

const Profile = () => {
  return (
    <div className={'pt-50 pb-50 pl-50'}>
      <div className='d-flex'>
        <img src={'/static/back-arrow.svg'} alt={'back'} className={'mr-10'}/>
        <h3>Back</h3>
      </div>

      <div className="d-flex">
        <Avatar src={'/static/murzich.jpeg'} width={'120px'} height={'120px'}/>

      </div>
    </div>
  );
};

export default Profile;
