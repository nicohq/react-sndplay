import React, { SFC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import * as serviceWorker from './serviceWorker';
import { TracksProvider } from './TracksContext';

const App: SFC = () =>
    <TracksProvider>
        <MainPage />
    </TracksProvider>;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
