import { browserHistory } from 'react-router'; // importing from 'react-router'
import React from 'react'
import Routes from './routes';
import Menu from './components/menu/Menu'


const App = () => (
    <div>
        <Menu/>
        <Routes history={browserHistory} />
    </div>
)

export default App
