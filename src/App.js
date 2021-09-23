import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
    return (
        <div className='App'>
            <h1 className='title'>Search Bar App</h1>
            <input type='text' placeholder='Search here' />
            {JSONDATA.map((val, key) => {
                return (
                    <div className='user' key={key}>
                        <p>{val.first_name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
