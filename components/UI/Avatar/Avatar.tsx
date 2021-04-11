import React from "react";
import cn from 'classnames'
import styles from './Avatar.module.scss'

type PropsType = {
  src: string,
  width: string,
  height: string,
  className?: string,
  isVoice?: string
}

export const Avatar: React.FC<PropsType> = ({ src, width, height, className, isVoice }) => {
  return (
    <div
      style={{ width, height, backgroundImage: `url(${src})` }}
      className={cn(styles.avatar, isVoice ? styles.avatarBorder : '', className, 'd-ib')} />
  );
};
