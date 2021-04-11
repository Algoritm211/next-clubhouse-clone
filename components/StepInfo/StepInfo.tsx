import cn from 'classnames'
import styles from './StepInfo.module.scss'
import React from "react";

type Props = {
  title: string,
  icon?: string,
  description?: string
}

export const StepInfo: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className={cn(styles.block, 'text-center')}>
      <div>
        <img className={styles.img} src={icon} alt="Step picture" />
      </div>
      <b className={styles.title}>{title}</b>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
