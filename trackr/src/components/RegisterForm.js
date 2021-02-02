import React from 'react';
import styled from 'styled-components';

export default function RegisterForm ({ dinerChange, dinerDisabled, operatorChange, operatorDisabled, dinerFormSubmit, dinerValues, operatorValues, operatorFormSubmit, dinerErrors, operatorErrors }) {

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

    return (
        <StyledRegistrationContainer>
            <StyledDinerContainer>
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

            <StyledOperatorContainer>
                <h2>Create Operator Profile</h2>
                <form onSubmit={operatorSubmit}>

                    <div>
                        <label>Username:
                        <StyledErrorDiv>{operatorErrors.operatorUsername}</StyledErrorDiv>
                            <input
                            type='text'
                            name='operatorUsername'
                            value={operatorValues.operatorUsername}
                            onChange={operatorOnChange}>
                            </input>
                        </label>
                    </div>

                    <div>
                        <label>Email:
                        <StyledErrorDiv>{operatorErrors.operatorEmail}</StyledErrorDiv>
                            <input
                            type='email'
                            name='operatorEmail'
                            value={operatorValues.operatorEmail}
                            onChange={operatorOnChange}>
                            </input>
                        </label>
                    </div>

                    <div>
                        <label>Password:
                        <StyledErrorDiv>{operatorErrors.operatorPassword}</StyledErrorDiv>
                            <input
                            type='password'
                            name='operatorPassword'
                            value={operatorValues.operatorPassword}
                            onChange={operatorOnChange}>
                            </input>
                        </label>
                    </div>

                    <div>
                        <label>Confirm Password:
                        <StyledErrorDiv>{operatorErrors.operatorConfirmPassword}</StyledErrorDiv>
                            <input
                            type='password'
                            name='operatorConfirmPassword'
                            value={operatorValues.operatorConfirmPassword}
                            onChange={operatorOnChange}>
                            </input>
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

    input {
        margin: 0 0 1% .3%;
    }
`;

const StyledOperatorContainer = styled.div`
    border: solid 1px green;

    input {
        margin: 0 0 1% .3%;
    }
`;

const StyledErrorDiv = styled.div`
    color: red;
`;