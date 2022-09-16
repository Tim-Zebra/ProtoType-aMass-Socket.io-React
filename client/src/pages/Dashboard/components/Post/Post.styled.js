import styled from 'styled-components'

export const PostOutterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    border: 2px solid ${({ theme  }) => theme.colors.teal};
    border-radius: 10px;
`

export const PostContainer = styled.div`
    height: fit-content;
    border-radius: 10px 10px 0 0;
    background-color: white;
    display: flex;
`
export const SidebarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 60px;
    flex-direction: column;
    margin-bottom: 1rem;
`
export const PostProfileImage = styled.img`
    height: 44px;
    border: solid 1px ${({ theme }) => theme.colors.darkgrey };
    margin-left: 1rem;
    padding: .5rem;
    border-radius: 10px;
    margin: 1rem;
`


export const EditButton = styled.div`
    font-family: ${({ theme }) => theme.fonts.otherfont };
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkgrey };

    &:hover {
        color: ${({ theme }) => theme.colors.lightteal };
        cursor: pointer;
    }
`
export const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`
export const PostHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
        font-size: 14px;
        margin-right: 1rem;
        font-family: ${({ theme }) => theme.fonts.otherfont };
    }
`

export const PostAuthorHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h3 {
        font-family: ${({ theme }) => theme.fonts.otherfont };
        margin-right: .5rem;
    }
    img {
        margin-right: .5rem;
        height: 18px;
    }
`

export const PostMessage = styled.div`
    height: fit-content;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.otherfont };
    width: 95%;
    padding-right: 1em;

    p {
        margin: 0;
    }
`
export const PostBottom = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p {
    font-family: ${({ theme }) => theme.fonts.otherfont };
    }
`

export const PostFooter = styled.div`
    background-color: ${({ theme }) => theme.colors.lightgrey };
    padding: 1rem;
    border-radius: 0 0 10px 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;
        img {
            margin-right: .5rem;
        }
    }

    button {
        background-color: ${({ theme }) => theme.colors.lightgrey } ;
        border: none;
        cursor: pointer;
    }
    button:hover {
        text-decoration: underline;
    }
    p {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.otherfont };
        font-size: 14px;
    }
`