import React from 'react';
import cn from 'classnames'
import styles from './ModalBlock.module.scss'

const ModalBlock = ({children, className}) => {
  return (
    <div className={cn(styles.block, className)}>
      {children}
    </div>
  );
};

export default ModalBlock;
