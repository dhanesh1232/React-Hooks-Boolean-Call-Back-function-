// Write your code here
import {useState} from 'react'
import {
  UnlockPageContainer,
  LockerViewContainer,
  LockerHeading,
  LockerImageView,
  LockButtonContainer,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [unlockIsTrue, setUnlock] = useState(false)

  const onChangeBooleanValue = () => {
    setUnlock(prev => !prev)
  }
  return (
    <UnlockPageContainer>
      <LockerViewContainer>
        <LockerImageView
          src={
            unlockIsTrue
              ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
          }
          alt={unlockIsTrue ? 'unlock' : 'lock'}
        />
        <LockerHeading>
          {unlockIsTrue ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </LockerHeading>
      </LockerViewContainer>
      <LockButtonContainer>
        <LockButton type="button" onClick={onChangeBooleanValue}>
          {unlockIsTrue ? 'Lock' : 'Unlock'}
        </LockButton>
      </LockButtonContainer>
    </UnlockPageContainer>
  )
}
export default Unlock
