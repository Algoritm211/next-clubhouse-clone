import EnterStep from "../components/steps/EnterStep/EnterStep";
import React, {useState} from "react";
import EnterNameStep from "../components/steps/EnterNameStep/EnterNameStep";
import EnterPhoneStep from "../components/steps/EnterPhoneStep/EnterPhoneStep";
import ChooseAvatarStep from "../components/steps/ChooseAvatarStep/ChooseAvatarStep";
import EnterCodeStep from "../components/steps/EnterCodeStep/EnterCodeStep";

const registrationSteps = {
  1: EnterStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep
}

type StepContextType = {
  nextStep: () => void
  currentStep: number
}

export const StepContext = React.createContext({} as StepContextType)

export default function Home() {

  const [step, setStep] = useState(1)
  const CurrentStep = registrationSteps[step]

  const goNextStep = () => {
    setStep(prevState => prevState + 1)
  }
  return (
    <div>
      <StepContext.Provider value={{nextStep: goNextStep, currentStep: step}}>
        <CurrentStep  />
      </StepContext.Provider>
    </div>
  )
}
