import React, {useContext, useState} from 'react';
import styles from './EnterCodeStep.module.scss'
import ModalBlock from "../../ModalBlock/ModalBlock";
import {StepInfo} from '../../StepInfo/StepInfo';
import Button from '../../UI/Button/Button';
import cn from 'classnames'
import {authAPI} from "../../../requests/auth-api";
import {useRouter} from "next/router";


const EnterCodeStep = () => {
  const [codes, setCodes] = useState(['', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const id = +event.target.getAttribute('id')
      const newCodes = [...codes]
      newCodes[id] = event.target.value
      setCodes(newCodes)
      if (event.target.nextSibling) {
        (event.target.nextSibling as HTMLInputElement).focus()
      }
    }
  }

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      await authAPI.auth()
      setIsLoading(false)
      await router.push('/rooms')
    } catch (error) {
      console.log(error)
    }
  }

  const inputsBlock = codes.map((codeValue, index) => {
    return (
      <input
        key={index}
        type="tel"
        placeholder="X"
        maxLength={1}
        id={index.toString()}
        onChange={onInputChange}
        value={codeValue}/>)
  })

  return (
    <div className={styles.block}>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code"/>
      {!isLoading ? (
        <ModalBlock className={cn('m-auto mt-30', styles.whiteBlock)}>
          <div className={cn('mb-30', styles.codeInput)}>
            {inputsBlock}
          </div>
          <Button onClick={onSubmit}>
            Next
            <img className="d-ib ml-10" src="/static/arrow.svg"/>
          </Button>
        </ModalBlock>
      ) : (
        <div className="text-center">
          <div className="loader"/>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}

    </div>
  );
};

export default EnterCodeStep;
