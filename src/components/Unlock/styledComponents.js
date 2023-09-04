// Style your elements here
import styled from 'styled-components'

export const UnlockPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #0b0c1e, #3c2940);
`
export const LockerViewContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const LockerImageView = styled.img`
  width: 150px;
  height: 150px;
`
export const LockerHeading = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 5px;
  color: #ffffff;
`
export const LockButtonContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
`
export const LockButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: #06b6d4;
  border: none;
  font-size: 1.2rem;
  color: #e2e8f0;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 12px 0px skyblue;
    cursor: pointer;
  }
`
