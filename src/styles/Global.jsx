import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        text-decoration:none;
        list-style: none;
    }
    body{
        background-color:${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    .header{
        background-color:${({ theme }) => theme.body};
        box-shadow: 0px 5px 10px ${({ theme }) => theme.shadow};
    }
    a {
        color: ${({ theme }) => theme.text};
    }
    .card{
        box-shadow: 0px 5px 10px ${({ theme }) => theme.shadow};
    }
    button {
        color: ${({ theme }) => theme.text};
    }
`;