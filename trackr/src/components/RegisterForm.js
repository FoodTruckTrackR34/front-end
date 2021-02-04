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
                    <p>Looking to create an Operator profile instead?</p> 
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
                    <button disabled={dinerDisabled}>Submit</button>

                </form>
            </StyledDinerContainer>

            <StyledOperatorContainer active={activeOperatorForm}>
                <StyledSwitchDiv>
                    <p>Looking to create a Diner profile instead?</p> 
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
                    <button disabled={operatorDisabled}>Submit</button>

                </form>
            </StyledOperatorContainer>
        </StyledRegistrationContainer>
    );
};

const StyledRegistrationContainer = styled.div`
    border: solid 1px red;
`;

const StyledDinerContainer = styled.div`
    border: solid 1px blue;
    transition: .3s;

    input {
        margin: 0 0 1% .3%;
    }

    ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledOperatorContainer = styled.div`
    border: solid 1px green;

    input {
        margin: 0 0 1% .3%;
    }

    ${props => (props.active === true ? null : `display: none;`)}
`;

const StyledErrorDiv = styled.div`
    color: red;
`;

const StyledSwitchDiv = styled.div`
    border: solid 1px orange;
    text-align: center;
`;