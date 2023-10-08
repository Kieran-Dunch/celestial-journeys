import { AnimatePresence } from 'framer-motion';
import Provider from '../Provider/Provider';
import Wrapper from '../Wrapper/Wrapper';
import KeyVisual from '../KeyVisual/KeyVisual';

const App = () => {
    const activePlanet = '/'

    return (
        <Provider>
            <Wrapper>
                <AnimatePresence>
                        <KeyVisual activePlanet={activePlanet} />
                </AnimatePresence>
            </Wrapper>
        </Provider>
    );
};

export default App;
