import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import store from './redux/state';
import store from './redux/redux-store';
let renderPage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// функция для отрисовки страницы
// в качестве аргумента принимает объект _state
// который прокидывается дальше через props
renderPage(store.getState());

// в качестве аргумента для функции subscribe
// из файла state.js передаем функцию renderPage
// для перерисовки странициы
store.subscribe(() => {
    let state = store.getState();
    renderPage(state);
});
