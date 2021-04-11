import React, {useContext, useState} from 'react';
import styles from './EnterNameStep.module.scss'
import ModalBlock from "../../ModalBlock/ModalBlock";
import Button from '../../UI/Button/Button';
import cn from 'classnames'
import { StepInfo } from '../../StepInfo/StepInfo';
import {StepContext} from "../../../pages";

const EnterNameStep: React.FC = () => {

  const [name, setName] = useState('')
  const isButtonDisabled = name.trim().length === 0
  const {nextStep} = useContext(StepContext)


  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <ModalBlock className={cn('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button disabled={isButtonDisabled} onClick={nextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </ModalBlock>
    </div>
  );

};

export default EnterNameStep;
