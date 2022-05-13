import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import Settings from './components/Settings';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
        <Settings/>
      </div>
    </Provider>
  );
}

export default App;
