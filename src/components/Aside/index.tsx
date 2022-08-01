import React from 'react';
import {Container, Header, LogoImg, MenuContainer, MenuItemLink, Title} from './styles';

import logoImg from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

const Aside: React.FC =  () => {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>

                <MenuItemLink to="/dashboard">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink to="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink to="/list/exit-balance">
                    <MdArrowDownward/>
                    Saidas
                </MenuItemLink>

                <MenuItemLink to="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
}

export default Aside