import { DustComponent } from "@xircus-web3/dust-chakra-common"
import { OnboardingForm } from "./OnboardingForm"

export const OnboardingGuardDefs = {
  name: 'OnboardingGuard',
  label: 'Onboarding',
  image: '',
  theme: {
    wrap: {} 
  },
  data: {
    title: 'Onboarding Guard'
  }
}

const fields = {
  title: 'String'
}

const labels = {
  title: 'Title'
}

export const OnboardingGuard = props => {
  return (
    <DustComponent props={props} labels={labels} fields={fields}>
      <OnboardingForm />
    </DustComponent>
  )
}