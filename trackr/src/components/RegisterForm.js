import React, {useState} from 'react';
import styled from 'styled-components';

const initialActiveDinerForm = true;
const initialActiveOperatorForm = false;

export default function RegisterForm ({ dinerChange, dinerDisabled, operatorChange, operatorDisabled, dinerFormSubmit, dinerValues, operatorValues, operatorFormSubmit, dinerErrors, operatorErrors }) {

    const [activeDinerForm, setActiveDinerForm] = useState(initialActiveDinerForm);
    const [activeOperatorForm, setActiveOperatorForm] = useState(initialActiveOperatorForm);

    const dinerOnChange = (evt) => {
        const { name, value } = evt.target;
        dinerChange(name, value);
    };

    const operatorOnChange = (evt) => {
        const { name, value } = evt.target;
        operatorChange(name, value);
    };

    const dinerSubmit = (evt) => {
        evt.preventDefault();
        dinerFormSubmit();
    };

    const operatorSubmit = (evt) => {
        evt.preventDefault();
        operatorFormSubmit();
    };

    const switchActive = () => {
        setActiveDinerForm(!activeDinerForm);
        setActiveOperatorForm(!activeOperatorForm);
    };

    return (
        <StyledRegistrationContainer>
            <StyledDinerContainer active={activeDinerForm}>
                <StyledSwitchDiv>
                    <p>Looking to create an <b>Operator</b> profile instead?</p> 
                    <button onClick={switchActive}>Click here</button>
                </StyledSwitchDiv>
                <h2>Create Diner Profile</h2>
                <form onSubmit={dinerSubmit}>

                    <div>
                        <label>Username:
                            <input
                            type='text'
                            name='dinerUsername'
                            value={dinerValues.dinerUsername}
                            onChange={dinerOnChange}>
                            </input>
                            <StyledErrorDiv>{dinerErrors.dinerUsername}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Email:
                            <input
                            type='email'
                            name='dinerEmail'
                            value={dinerValues.dinerEmail}
                            onChange={dinerOnChange}>
                            </input>
                            <StyledErrorDiv>{dinerErrors.dinerEmail}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Password:
                            <input
                            type='password'
                            name='dinerPassword'
                            value={dinerValues.dinerPassword}
                            onChange={dinerOnChange}>
                            </input>
                            <StyledErrorDiv>{dinerErrors.dinerPassword}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Confirm Password:
                            <input
                            type='password'
                            name='dinerConfirmPassword'
                            value={dinerValues.dinerConfirmPassword}
                            onChange={dinerOnChange}>
                            </input>
                            <StyledErrorDiv>{dinerErrors.dinerConfirmPassword}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Zip Code (optional):
                            <input
                            type='text'
                            name='dinerZipcode'
                            value={dinerValues.dinerZipcode}
                            onChange={dinerOnChange}>
                            </input>
                        </label>
                    </div>
                    <StyledDinerButton disabled={dinerDisabled}>Create Diner Profile</StyledDinerButton>

                </form>
            </StyledDinerContainer>

            <StyledOperatorContainer active={activeOperatorForm}>
                <StyledSwitchDiv>
                    <p>Looking to create a <b>Diner</b> profile instead?</p> 
                    <button onClick={switchActive}>Click here</button>
                </StyledSwitchDiv>
                <h2>Create Operator Profile</h2>
                <form onSubmit={operatorSubmit}>

                    <div>
                        <label>Username:
                            <input
                            type='text'
                            name='operatorUsername'
                            value={operatorValues.operatorUsername}
                            onChange={operatorOnChange}>
                            </input>
                            <StyledErrorDiv>{operatorErrors.operatorUsername}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Email:
                            <input
                            type='email'
                            name='operatorEmail'
                            value={operatorValues.operatorEmail}
                            onChange={operatorOnChange}>
                            </input>
                            <StyledErrorDiv>{operatorErrors.operatorEmail}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Password:
                            <input
                            type='password'
                            name='operatorPassword'
                            value={operatorValues.operatorPassword}
                            onChange={operatorOnChange}>
                            </input>
                            <StyledErrorDiv>{operatorErrors.operatorPassword}</StyledErrorDiv>
                        </label>
                    </div>

                    <div>
                        <label>Confirm Password:
                            <input
                            type='password'
                            name='operatorConfirmPassword'
                            value={operatorValues.operatorConfirmPassword}
                            onChange={operatorOnChange}>
                            </input>
                            <StyledErrorDiv>{operatorErrors.operatorConfirmPassword}</StyledErrorDiv>
                        </label>
                    </div>
                    <StyledOperatorButton disabled={operatorDisabled}>Create Operator Profile</StyledOperatorButton>

                </form>
            </StyledOperatorContainer>
        </StyledRegistrationContainer>
    );
};

const StyledRegistrationContainer = styled.div`
    // border: solid 1px red;
    display: flex;
    justify-content: center;
`;

const StyledDinerContainer = styled.div`
    // border: solid 1px blue;
    width: 35%;

    input {
        margin: 2% 0 1% 1%;
        padding: 1%;
    }

    ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledDinerButton = styled.button`
    background-color:  #FFCC4D;
    color: #585858;
    margin-top: 3%;
    padding: 2% 6% 2% 6%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;
    font-weight: bold;

    :hover {
        background-color:#77B255;
        color: white;
    }
    ${props => (props.disabled === true ? `background-color: #b7b7b7; color: black; cursor: default; :hover{background-color: #b7b7b7; color: black};` : null)}
}
`;

const StyledOperatorContainer = styled.div`
    // border: solid 1px green;
    width: 35%;

    input {
        margin: 2% 0 1% 1%;
        padding: 1%;
    }

    ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledOperatorButton = styled.button`
    background-color:  #FFCC4D;
    color: #585858;
    margin-top: 3%;
    padding: 2% 6% 2% 6%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;
    font-weight: bold;

    :hover {
        background-color:#77B255;
        color: white;
    }
    ${props => (props.disabled === true ? `background-color: #b7b7b7; color: black; cursor: default; :hover{background-color: #b7b7b7; color: black};` : null)}
}
`;

const StyledErrorDiv = styled.div`
    color: red;
`;

const StyledSwitchDiv = styled.div`
    border-top: solid 1px #a7a7a7;
    border-bottom: solid 1px #a7a7a7;
    padding-top: 1%;
    padding-bottom: 5%;
    text-align: center;
    margin-top: 3%;

    button {
        background-color:  #FFCC4D;
        color: #585858;
        padding: 2% 4% 2% 4%;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s;

        :hover {
            background-color:#77B255;
            color: white;
        }
    }
`;