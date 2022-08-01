import React, { ReactNode } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import {Container} from './styles';

const Dashboard: React.FC =  () => {

    const options = [
        {value: 'Felipe', label: 'Felipe'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Luiz', label: 'Luiz'}
    ]

    return (
        <Container>
            <ContentHeader title='Dashboard' lineColor='#F7931B'>
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;