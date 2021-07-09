import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLinks, SubmitButton } from './common'
import Marginer from '../marginer'
import { AccountContext } from './accountContext'

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext)
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLinks href="#">Forgot your password</MutedLinks>
            <Marginer direction="vertical" margin="1.4rem" />
            <SubmitButton type="submit">Sign In</SubmitButton>
            <Marginer direction="vertical" margin="1rem" />
            <MutedLinks href="#">Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Sign Up</BoldLink> </MutedLinks>
        </BoxContainer>
    )
}