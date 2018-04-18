import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import App from './componente/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/App.css'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
