import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import ResetScore from "./ResetScore";
import Rules from "./Rules";

const GamePlay = () => {

    const [score, setScore] = useState(0);

    const [selectedNumber, setSelectedNumber] = useState();

    const [currentDice, setCurrentDice] = useState(1);

    const [error, setError] = useState("");

    const [rules, setRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    function roleDice() {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        let randomNumber = generateRandomNumber(1, 6);
        setCurrentDice(randomNumber);

        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber);
        }
        else {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined);

    }

    const resetScore = () => {
        setScore(0);
    }

    return (
        <MainContainer>

            <div className="top_section">

                <TotalScore score={score} />

                <NumberSelector error={error}
                    setError={setError}
                    selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />

            </div>


            <RollDice currentDice={currentDice} roleDice={roleDice} />

            <ResetScore resetScore={resetScore} rules={rules} setRules={setRules} />

            {rules && <Rules />}

        </MainContainer >
    )
}

export default GamePlay;

const MainContainer = styled.main`

    padding-top: 20px;
    padding-bottom: 30px;

    max-width: 1180px;
    margin: 0 auto;

    /* height: calc(100vh - 40px); */
    /* height: 100vh; */

    .top_section {
        display: flex;
        justify-content: space-between;
        align-items: end;
        /* justify-content: center; */
    }

`