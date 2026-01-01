import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {
  return (
    <Container><h1>{score}</h1><p>TOTAL SCORE</p></Container>
  )
}

export default Totalscore

const Container=styled.div`
text-align:center;
max-width:200px;
h1{
    font-size:100px;
    line-height:100px;

}
p{
    font-size:24px;
    font-weight:500px;}
`;