import React, {useContext} from 'react';
import styles from './EnterStep.module.scss';
import ModalBlock from "../../ModalBlock/ModalBlock";
import Button from "../../UI/Button/Button";
import {StepContext} from "../../../pages";

const EnterStep = () => {
  const {nextStep} = useContext(StepContext)

  return (
    <ModalBlock className={styles.block}>
      <h3 className={styles.title}>
        <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="Celebration" />
        Welcome to Clubhouse!
      </h3>
      <p>
        We’re working hard to get Clubhouse ready for everyone! While we wrap up the finishing
        youches, we’re adding people gradually to make sure nothing breaks :)
      </p>
      <div>
        <Button onClick={nextStep}>
          Get your username
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </div>
    </ModalBlock>
  );
};

export default EnterStep;
