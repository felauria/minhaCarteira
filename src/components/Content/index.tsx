import React, { PropsWithChildren } from 'react';
import ContentHeader from '../ContentHeader';
import {Container} from './styles';


const Content: React.FC<PropsWithChildren> =  ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Content;