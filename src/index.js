import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'moment/locale/fr';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
