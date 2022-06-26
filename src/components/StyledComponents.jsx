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
  border-radius: 30px;
  background-color: #FF1801;
  margin-bottom: 10px;
  margin-top: 10px;
`;


export const MainHeader = styled.h1`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #FF1801;
  width: 99.15%;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 30px;
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
  border-color: #FF1801;
  border-radius: 30px;
`

export const Chat = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  overflow: auto;
  height: 350px;
  width: 85%;
  margin: 10px;
  border-style: solid;
  border-width: 3px;
  border-color: grey;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 10px
  font-family: 'Raleway', sans-serif;
`
export const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-style: solid;
  border-width: 10px;
  border-color: #FF1801;
  margin-top: 10px;
  border-radius: 30px;
  margin-bottom: 10px;
`

export const User = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  margin: 5px;
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
  border-radius: 10px;
  margin:10px;
`

export const CommentHeader = styled.h2`
  display: flex;
  font-family: 'Raleway', sans-serif;
  justify-content: center;
  width: 99.25%;
  background: #FF1801;
  color: white;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 30px;
`

export const Row = styled.div`
  display: flex;
`
export const Clickables = styled.small`
  display: flex;
  justify-content: flex-start;
  &:hover {
    color: #FF1801;
  }
  font-family: 'Raleway', sans-serif;
  margin-left: 15px;
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
    color: #FF1801;
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
  border-color: #FF1801;
`