const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function Counter({modeCounter}) {
    const [count, setCount] = React.useState(0);

    function handleCount(mode) {
        setCount(prev => {
            let newCount;
            switch (mode) {
                case 'add':
                    newCount = prev + 1;
                    break;
                case 'subtract':
                    newCount = prev - 1;
                    break;
                case 'multiply':
                    newCount = prev * 10;
                    break;
                case 'divide':
                    newCount = prev / 10;
                    break;
                case 'reset':
                    newCount = 0;
                    break;
                default:
                    newCount = prev;
            }
            return newCount;
        });
    }
    
    if (modeCounter) {
        return(
            <>
                <div className="counter">
                    <div className="main">
                        <button className="bttnF" onClick={() => handleCount('divide')}>/10</button>
                        <p>{count}</p>
                        <button className="bttnF" onClick={() => handleCount('multiply')}>*10</button>
                    </div>
                    <button className="rst" onClick={() => handleCount('reset')}>Reset</button>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="counter">
                    <div className="main">
                        <button className="bttnF" onClick={() => handleCount('subtract')}>-1</button>
                        <p>{count}</p>
                        <button className="bttnF" onClick={() => handleCount('add')}>+1</button>
                    </div>
                    <button className="rst" onClick={() => handleCount('reset')}>Reset</button>
                </div>
            </>
        );
    }
}

function HomePage() {
    const [showAnother, setAnother] = React.useState(false);

    return (
        <div className="page-center">
            <Counter modeCounter={showAnother} />
            <div className="switch-container">
                <button className="switch" onClick={() => setAnother(prev => !prev)}>
                    Mode: {showAnother ? "Multiply/Divide" : "Add/Subract"}
                </button>
            </div>
        </div>
    );
}

root.render(<HomePage />);
