import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width:99%;
    border: 2px solid ${({ theme }) => theme.colors.darkteal};
    border-radius: 10px;
    margin-top: 1rem;
    box-shadow: 3px 3px 10px rgb(0, 0 , 0, .5);

    h1 {
        color: ${({ theme }) => theme.colors.darkteal};
        margin-top: 1rem;
    }

    label{
        font-size:20px;
        color: ${({ theme }) => theme.colors.darkgrey};
        align-self: flex-start;
        margin-left: 2rem;
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 600px) {
        width: 50vw;
    }

    @media only screen and (min-width: 992px) {
        width: 25vw;
    }
`
export const TextInput = styled.input`
    color:${({ theme }) => theme.colors.darkgrey};
    width: 80%;
    font-size: 16px;
    padding: 1rem ;
    margin-bottom: 1rem;
    display: block;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightgrey};
    box-sizing: border-box;

    &:focus {
      border: none;
      outline: none;
      box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.teal};
    }
`
export const ErrorTextInput = styled(TextInput)`
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.darkpurple};
`

export const PostTextInput = styled(TextInput)`
    padding: 0.5rem;
`

export const OrDiv = styled.div`
    display: flex;
    width: 100%;
`