import React from 'react';
import {Avatar} from '../UI/Avatar/Avatar';
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={'d-flex align-items-center justify-content-between'}>
      <Link href={'/rooms'}>
        <div className={'d-flex align-items-center pl-30 cup'}>
          <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="Celebration"/>
          <h3>My Clubhouse</h3>
        </div>
      </Link>
      <Link href={'/profile/211'}>
        <div className={'d-flex pr-30 align-items-center cup'}>
          <h3 className={'mr-20'}>Alexey Horbunov</h3>
          <Avatar width={'50px'} height={'50px'} src={'/static/murzich.jpeg'}/>
        </div>
      </Link>
    </div>
  );
};

export default Header;
