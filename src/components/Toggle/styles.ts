import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';
import React from 'react';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`

`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.info,
    })
)<ReactSwitchProps>`
    margin: 10px;
    transition: background-color 5s;
`;