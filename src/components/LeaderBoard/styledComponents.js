import styled from 'styled-components'

export const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 80px 20px 80px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 40px;
  }
`

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  margin: 0px;
  margin-top: 100px;
  text-align: center;
`
export const LogoutButton = styled.button`
  align-self: center;
  border: none;
  padding: 10px 25px 10px 25px;
  border-radius: 10px;
  background-color: #1e293b;
  width: 150px;
  margin-top: 30px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  outline: none;
`
