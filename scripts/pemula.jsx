const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Counter() {
    const [count, setCount] = React.useState(0);

    function handleCount(mode) {
        setCount(count => mode === 'add' ? count + 1 : count - 1);
    }
    
    function resetCounter() {
        setCount(0);
    }
    return(
        <>
            <div className="counter">
                <div className="main">
                    <button onClick={() => handleCount('add')}>+1</button>
                    <p>{count}</p>
                    <button onClick={() => handleCount('')}>-1</button>
                </div>
                <button onClick={() => resetCounter()}>Reset</button>
            </div>
        </>
    );
}

function AnotherCounter() {
    const [count, setCount] = React.useState(1);

    function handleCount(mode) {
        setCount(count => mode === 'times' ? count * 10 : count / 10);
    }
    
    function resetCounter() {
        setCount(1);
    }
    return(
        <>
            <div className="counter">
                <div className="main">
                    <button onClick={() => handleCount('times')}>*10</button>
                    <p>{count}</p>
                    <button onClick={() => handleCount('')}>/10</button>
                </div>
                <button onClick={() => resetCounter()}>Reset</button>
            </div>
        </>
    );
}

function HomePage() {
    const [showAnother, setAnother] = React.useState(false);

    return (
        <div>
            <button onClick={() => setAnother(prev => !prev)}>Set mode</button>
            {showAnother ? <AnotherCounter/> : <Counter/>}
            {/* <AnotherCounter /> */}
        </div>
    );
}

root.render(<HomePage />);
