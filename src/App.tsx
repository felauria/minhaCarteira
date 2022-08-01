import React, { PropsWithChildren }from 'react';
import { ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import RoutesApp from './routers';

import dark from './styles/themes/dark';
// import light from './styles/themes/light';

const App: React.FC<PropsWithChildren> =  ({ children}) => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <RoutesApp/>
        </ThemeProvider>
    );
}

export default App;