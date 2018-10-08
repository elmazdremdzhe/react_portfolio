import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
        <Header/>
        <About/>

        <Projects/>
        <Skills/>
            <Contacts/>
        </div>
    </Provider>

, document.querySelector('.content'));