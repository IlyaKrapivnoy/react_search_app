import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
    return (
        <div className=''>
            <input type='text' placeholder='Search...' />
            {JSONDATA.map((val, key) => {
                return <div>{val.first_name}</div>;
            })}
        </div>
    );
}

export default App;
