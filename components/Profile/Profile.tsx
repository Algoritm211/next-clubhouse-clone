import React from 'react';
import {Avatar} from '../UI/Avatar/Avatar';
import Button from '../UI/Button/Button';
import styles from './Profile.module.scss'
import Header from "../Header/Header";
import cn from 'classnames'
import Link from "next/link";

const Profile = () => {

  return (
    <>
      <Header/>
      <div className={'pt-50 pb-50 pl-50'}>
        <Link href={'/rooms'}>
          <div className={cn('d-flex cup', styles.backBtn)}>
            <img src={'/static/back-arrow.svg'} alt={'back'} className={'mr-10'}/>
            <h3 className={'cup'}>Back</h3>
          </div>
        </Link>

        <div className="d-flex align-items-center">
          <Avatar src={'/static/murzich.jpeg'} width={'120px'} height={'120px'} className={'mr-30'}/>
          <div className={'align-self-start mr-30'}>
            <h2 className={'mb-0 mt-0'}>Alexey Horbunov</h2>
            <span className={styles.userTag}>@Alexey_Horbunov</span>
          </div>
          <Button color={'blue'} className={styles.followButton}>
            Follow me
          </Button>
        </div>

        <p>
          Hello, I`m Alex, JavaScript(ReactJS) developer. Also can write awesome apps on TypeScript(like this)
          <br/><br/>
          Check my Github account and see more interesting projects :)
        </p>
      </div>
    </>
  );
};

export default Profile;
