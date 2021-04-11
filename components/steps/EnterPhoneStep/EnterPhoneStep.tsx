import React, {useContext, useState} from 'react';
import ModalBlock from "../../ModalBlock/ModalBlock";
import {StepInfo} from "../../StepInfo/StepInfo";
import cn from 'classnames'
import styles from './EnterPhone.module.scss'
import NumberFormat from 'react-number-format';
import { Button } from '../../UI/Button/Button';
import {StepContext} from "../../../pages";

type PhoneValuesType = {
  formattedValue: string;
  value: string;
}

const EnterPhoneStep = () => {
  const {nextStep} = useContext(StepContext)

  const [phoneValues, setPhoneValues] = useState({value: '', formattedValue: ''} as PhoneValuesType)

  const isNextDisabled = !phoneValues.value.trim().length || phoneValues.formattedValue.includes('_')

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <ModalBlock className={cn('m-auto mt-30 ', styles.whiteBlock)}>
        <div className={cn('mb-30', styles.input)}>
          <NumberFormat
            className="field"
            format="+## (###) ###-##-##"
            mask="_"
            placeholder="+38 (098) 011-11-18"
            value={phoneValues.value}
            onValueChange={({ formattedValue, value }) => setPhoneValues({ formattedValue, value })}
          />
        </div>
        <Button disabled={isNextDisabled} onClick={nextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
        <p className={cn(styles.policyText, 'mt-30')}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
          Thanks!
        </p>
      </ModalBlock>
    </div>
  );

};

export default EnterPhoneStep;
