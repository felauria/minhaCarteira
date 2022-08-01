import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';


const List: React.FC = ({ }) => {

    const { type } = useParams();
    const listOptions = useMemo(() => {
        return type === 'entry-balance'
            ? { title: 'Entradas', lineColor: '#F7931B' }
            : { title: 'Saídas', lineColor: '#E44C4E' };
    }, [type]);

    const months = [
        { value: 1, label: 'JAN' },
        { value: 2, label: 'FEV' },
        { value: 3, label: 'MAR' },
        { value: 4, label: 'ABR' },
        { value: 5, label: 'MAI' },
        { value: 6, label: 'JUN' },
        { value: 7, label: 'JUL' },
        { value: 8, label: 'AGO' },
        { value: 9, label: 'SET' },
        { value: 10, label: 'OUT' },
        { value: 11, label: 'NOV' },
        { value: 12, label: 'DEZ' }
    ];

    const years = [
        { value: 2020, label: '2020' },
        { value: 2021, label: '2021' },
        { value: 2022, label: '2022' },
        { value: 2023, label: '2023' },
        { value: 2024, label: '2024' }
    ];


    return (
        <Container>
            <ContentHeader title={listOptions.title} lineColor={listOptions.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type='button'
                    className='tag-filter tag-recurrent'
                >
                    Recorrentes
                </button>

                <button
                    type='button'
                    className='tag-filter tag-eventual'
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='31/07/2022'
                    amount='R$ 130,00'
                />
            </Content>
        </Container>

    );
}

export default List;