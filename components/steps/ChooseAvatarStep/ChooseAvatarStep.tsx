import React, {useContext, useRef, useState} from 'react';
import { StepInfo } from '../../StepInfo/StepInfo';
import ModalBlock from "../../ModalBlock/ModalBlock";
import cn from 'classnames'
import Button from '../../UI/Button/Button';
import styles from './ChooseAvatarStep.module.scss'
import { Avatar } from '../../UI/Avatar/Avatar';
import {StepContext} from "../../../pages";

const ChooseAvatarStep = () => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const {nextStep} = useContext(StepContext)
  const [avatarURL, setAvatarURL] = useState('https://avatars.githubusercontent.com/u/60394886?v=4')

  const onImageInputChange = (event: React.ChangeEvent) => {
    if (event.target) {
      const file = (event.target as HTMLInputElement).files[0]
      const imageURL = URL.createObjectURL(file)
      setAvatarURL(imageURL)
    }
  }

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Alexey Horbunov"
        description="How’s this photo?"
      />
      <ModalBlock className={cn('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarURL} />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input
          id="image"
          ref={inputFileRef}
          onChange={onImageInputChange}
          type="file"
          accept="image/*"
          hidden />
        <Button onClick={nextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </ModalBlock>
    </div>
  );

};

export default ChooseAvatarStep;
