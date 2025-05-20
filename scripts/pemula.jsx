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
                <button onClick={() => handleCount('add')}>+</button>
                <p>{count}</p>
                <button onClick={() => handleCount('')}>-</button>
            </div>
            <button onClick={() => resetCounter()}>Reset</button>
        </>
    );
}

function AnotherCounter() {
    
}

function HomePage() {
    return (
        <div>
            <Counter />
            {/* <AnotherCounter /> */}
        </div>
    );
}

root.render(<HomePage />);
