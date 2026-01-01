
import styled from 'styled-components'
import { useState } from 'react'
const Numberselector = ({error,selectedNumber,setSelectedNumber}) => {
    const array=[1,2,3,4,5,6];
    

  return (
    <NumberselectorContainer>
      {error && <span style={{color:'red',marginBottom:'8px'}}>{error}</span>}
   <div className='flex'>
    {array.map((value,i)=>( <Container isSelected={value===selectedNumber} key={i} onClick={()=>setSelectedNumber(value)}>{value}</Container>))}
    </div>
    <p>Select Number</p>
    </NumberselectorContainer>
  )
}

export default Numberselector

const NumberselectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;

.flex{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700px;
}
  
`;

const Container=styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight: 700;
  background-color: ${(props) =>
    props.isSelected ? "black" : "white"};
  color: ${(props) =>
    props.isSelected ? "white" : "black"};
`;