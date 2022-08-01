import styled from "styled-components";

export const Container = styled.div`

    > select{
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        padding: 7px 10px;
        border-radius: 5px;
        background-color: ${props => props.theme.colors.info};

        margin-left: 7px;

        & option{
            color: ${props => props.theme.colors.primary};
            font-weight: bold;
        }
    }
`;