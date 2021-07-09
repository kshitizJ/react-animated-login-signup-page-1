import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLinks, SubmitButton } from './common'
import Marginer from '../marginer'
import { AccountContext } from './accountContext'

export function SignUpForm(props) {
    const { switchToSignin } = useContext(AccountContext)

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
            <Marginer direction="vertical" margin="1.4rem" />
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <Marginer direction="vertical" margin="1rem" />
            <MutedLinks href="#">Already have an account? <BoldLink href="#" onClick={switchToSignin}>Sign In</BoldLink> </MutedLinks>
        </BoxContainer>
    )
}