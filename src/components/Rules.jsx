import styled from "styled-components"


const Rules = () => {
    return (

        <RulesContainer>

            <h2>How to play dice game</h2>
            
            <ul>
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                <li>if you get wrong guess then  2 point will be dedcuted </li>
            </ul>

        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`

    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;

    background-color: #FBF1F1;
    padding: 20px 40px;

    /* margin-bottom: 100px; */

    h2 {
        margin-bottom: 20px;
    }

    ul {
        list-style-type: none;
    }

    ul li {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }

`;