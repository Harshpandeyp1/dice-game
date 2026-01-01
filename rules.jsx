import React from 'react'
import styled from 'styled-components'
const rules = () => {
  return (
    <rulesContainer>
        <h1>HOW TO PLAY DICE GAME</h1>
        <div className="text"><p>Select any Number</p>
        <p>Click on dice image</p>
        <p>If the number on dice matches your selected number you win same points else you lose 2 points</p>
        </div>
    </rulesContainer>
  )
}

export default rules

const rulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
background-color:white;
padding:24px;
border-radius: 10px;
background-color: #a39797;
h1{
    font-size:24px;
}
.text{
    margin-top:24px;
}`;