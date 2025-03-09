import {theme} from "../../../style/Theme.ts";
import styled, {keyframes} from "styled-components";

const Contacts = styled.section`
    position: relative;
`
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;

const Message = styled.div `
    position: fixed;
    top: 100px;
    left: 45%;
    transform: translateX(-50%);
    background: #7572D5;
    color: #FFFFFF;
    padding: 15px 20px;
    border-radius: 8px;
    font-size: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: ${fadeInOut} 3s ease-in-out;
`

export const S = {
    Contacts,
    Form,
    Field,
    Message,
}