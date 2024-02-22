import { Button, OutlineButton } from "../styled/Button"
import styled from "styled-components"

const ResetScore = ({ resetScore, rules, setRules }) => {
  
  function rulesHandler() {
    setRules(!rules)
  }


  return (
    <ResetScoreContainer >
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>

        <Button onClick={rulesHandler}>{rules ? "Hide Rules" : "Show Rules"}</Button>

      </div>

    </ResetScoreContainer>
  )
}

export default ResetScore

const ResetScoreContainer = styled.div`
  
  .btns {
    margin-top: 36px;
    /* max-width: 220px; */
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;