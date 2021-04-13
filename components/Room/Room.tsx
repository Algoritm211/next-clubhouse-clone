import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button/Button';
import styles from './Room.module.scss'
import {RoomType} from "../../types/types";
import cn from 'classnames'

type PropsType = {
  room: RoomType
}

const Room: React.FC<PropsType> = ({room}) => {
  const {title} = room

  return (
    <div className={styles.wrapper}>
      <div className="d-flex align-items-center justify-content-between">
        <h2>{title.substr(0, 20) + '...'}</h2>
        <div className={cn('d-flex align-items-center', styles.actionButtons)}>
          <Link href={'/rooms'}>
            <a>
              <Button color="gray" className={styles.leaveButton}>
                <img width={18} height={18} src="/static/peace.png" alt="Hand black"/>
                Leave quietly
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
