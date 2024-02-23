// import { useState } from "react";
import styled from "styled-components"

function RollDice({roleDice, currentDice}) {

    return (
        <DiceContainer>
            
            <div className="dice">
                <img onClick={roleDice} src={`/images/dice/dice_${currentDice}.png`} alt="dice 1"></img>
            </div>

            <p>Click on Dice to roll</p>


        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`

    margin-top: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 24px;
    }

    .dice {
        cursor: pointer;
    }
`;