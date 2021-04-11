import React, {useContext, useState} from 'react';
import styles from './EnterCodeStep.module.scss'
import ModalBlock from "../../ModalBlock/ModalBlock";
import {StepInfo} from '../../StepInfo/StepInfo';
import Button from '../../UI/Button/Button';
import cn from 'classnames'
import {authAPI} from "../../../requests/auth-api";
import {useRouter} from "next/router";
import {StepContext} from "../../../pages";


const EnterCodeStep = () => {
  const [codes, setCodes] = useState(['', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const id = +event.target.getAttribute('id')
      //Todo set codes and change focus
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

  return (
    <div className={styles.block}>
      <StepInfo icon="/static/numbers.png" title="Enter your activate code"/>
      {!isLoading ? (
        <ModalBlock className={cn('m-auto mt-30', styles.whiteBlock)}>
          <div className={cn('mb-30', styles.codeInput)}>
            <input
              type="tel"
              placeholder="X"
              maxLength={1}
              id={'0'}
              onChange={onInputChange}
              value={codes[0]}
            />
            <input
              type="tel"
              placeholder="X"
              maxLength={1}
              id={'1'}
              onChange={onInputChange}
              value={codes[1]}
            />
            <input
              type="tel"
              placeholder="X"
              maxLength={1}
              id={'2'}
              onChange={onInputChange}
              value={codes[2]}
            />
            <input
              type="tel"
              placeholder="X"
              maxLength={1}
              id={'3'}
              onChange={onInputChange}
              value={codes[3]}
            />
          </div>
          <Button onClick={onSubmit}>
            Next
            <img className="d-ib ml-10" src="/static/arrow.svg"/>
          </Button>
        </ModalBlock>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}

    </div>
  );
};

export default EnterCodeStep;
