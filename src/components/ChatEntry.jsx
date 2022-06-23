import React from 'react'
import { hot } from 'react-hot-loader/root';
import Moment from 'react-moment';
import axios from 'axios';

import {
  WrapComments,
  Row,
  Clickables,
  Likes
} from "../Components/StyledComponents.jsx";

const ChatEntry = ({comment, helper}) => {

 const handleDelete = (comment) => {
  axios.patch('http://localhost:3001/f1', {_id: comment._id})
  .then (() => {
    helper();
  })
  .catch(() => {
    console.log('Bad')
  })
 };

 const handleLike = (id, value) => {
   console.log(value)
   axios.put('http://localhost:3001/f1', {_id: id, value: value})
   .then (() => {
    console.log('This'),
    helper()
   })
 };

  return (
    <div>
      <WrapComments>
      <Likes >Likes ( {comment.liked} ) <img onClick={() => {handleLike(comment._id, 1)}} width='20px' height='20px'
       src='https://img.icons8.com/cute-clipart/344/thumb-up.png' >
       </img>
       <img  onClick={() => {handleLike(comment._id, -1)}} width='20px' height='20px' src='https://img.icons8.com/stickers/344/poor-quality.png'></img>
       </Likes>
        <b>Posted By: </b>  {comment.user}
         <Row> <small>on <Moment format='MMMM Do YYYY'>{comment.date}</Moment></small></Row>
      <div> {comment.comment} </div>
     </WrapComments>
     <div>
      <Clickables onClick={()=>{handleDelete(comment)}}>Delete</Clickables>
     </div>
    </div>

  )
}

export default hot(ChatEntry);