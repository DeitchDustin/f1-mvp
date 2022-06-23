import styled from "styled-components";

export const Mainbuttons = styled.div`
  display: flex;
  font-family: 'Raleway', sans-serif;
  align-items: center;
  justify-content: space-evenly;
  width: 99.15%;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  background-color: red;
`;

export const MainHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  color: white;
  background-color: red;
  width: 99.15%;
  border-style: solid;
  border-width: 2px;
  border-color: black;
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
  width: 98%;
  font-family: 'Raleway', sans-serif;
  border-style: solid;
  border-width: 10px;
  border-color: red;
  
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
  font-family: 'Raleway', sans-serif;
`
export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  border-width: 10px;
  border-color: red;
  margin: 10px
`

export const User = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
`

export const WrapComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin: 3px;
  font-family: 'Raleway', sans-serif;
`

export const CommentHeader = styled.h2`
  display: flex;
  font-family: 'Raleway', sans-serif;
  justify-content: center;
  width: 99.25%;
  background: red;
  color: white;
  border-style: solid;
  border-width: 2px;
  border-color: black;
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
  font-family: 'Raleway', sans-serif;
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
  margin: 5px;
`
export const Bold = styled.b`
  font-weight: 700;
`

export const FullWrap = styled.div`
  font-family: 'Raleway', sans-serif;
`

export const Select = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
export const Borders = styled.div`
  border-style: solid;
  border-width: 20px;
  border-color: red;
`