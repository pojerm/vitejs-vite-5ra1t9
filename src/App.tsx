import { css, Global } from '@emotion/react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Counter from './components/counter/contuer';

function App() {
  const [count, setCount] = useState(0);

  return (
    const baseStyle=css`
    display: flex;
    align-items: center;
    justify-content: center;`
    <div className="App">
      <Global
        styles={baseStyle}
        }
      `}
      />
      <Counter numberColor="green" textSize="90px" />
    </div>
  );
}

export default App;
