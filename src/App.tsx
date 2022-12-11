import { css, Global } from '@emotion/react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Counter from './components/counter/contuer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter
        numberColor="green"
        textSize="90px"
        handleIncrese={(count) => {
          alert(count);
        }}
      />
    </div>
  );
}

export default App;
