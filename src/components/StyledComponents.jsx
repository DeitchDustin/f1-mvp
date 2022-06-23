import styled from "styled-components";

export const Mainbuttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MainHeader = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  background-color: red;
`
export const SchedButton = styled.button`
  margin: 10px;
`

export const ChampsWrapper = styled.div`
  margin: 5px
`

export const AppWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Chat = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  overflow: auto;
  height: 350px;
  width: 85%;
  margin: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin: 5px;
`

export const User = styled.div`
  display: flex;
  justify-content: center;
`

export const WrapComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin: 3px;
`

export const CommentHeader = styled.h2`
  display: flex;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
`
export const Clickables = styled.small`
  display: flex;
  justify-content: flex-start;
  &:hover {
    color: red;
  }
`

export const Likes = styled.small`
  display: flex;
  justify-content: flex-start;
  img:hover {
    cursor: pointer;
}
`

export const GoTo = styled.a`
  display: flex;
  justify-content: space-between;
  &:hover {
    color: red;
  }
`