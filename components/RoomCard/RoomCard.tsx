import React from 'react';
import cn from 'classnames'
import {RoomType} from "../../types/types";
import ModalBlockStyles from "../ModalBlock/ModalBlock.module.scss";
import styles from './RoomCard.module.scss'
import { Avatar } from '../UI/Avatar/Avatar';

type PropsType = {
  room: RoomType
}

const RoomCard: React.FC<PropsType> = ({room}) => {
  const {avatars, guests, guestsCount, speakersCount, title} = room

  return (
    <div className={cn(ModalBlockStyles.block, styles.card, 'mb-30')}>
      <h4 className={styles.title}>{title}</h4>
      <div className={cn('d-flex mt-10', styles.content)}>
        <div className={styles.avatars}>
          {avatars.map((url, i) => (
            <Avatar
              key={url}
              width="45px"
              height="45px"
              src={url}
              className={avatars.length > 1 && i === avatars.length - 1 ? 'lastAvatar' : ''}
            />
          ))}
        </div>
        <div className={cn(styles.info, 'ml-10')}>
          <ul className={styles.users}>
            {guests.map((name, index) => (
              <li key={name + index}>
                {name} <img src="/static/cloud.png" alt="Cloud" width={14} height={14} />
              </li>
            ))}
          </ul>
          <ul className={styles.details}>
            <li>
              {guestsCount} <img src="/static/user.svg" alt="Users count" width={12} height={12} />
            </li>
            <li>
              {speakersCount}
              <img
                className="ml-5"
                src="/static/message.svg"
                alt="Users count"
                width={12}
                height={12}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

};

export default RoomCard;
