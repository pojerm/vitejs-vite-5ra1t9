import { useState } from 'react';
import * as styles from './counter.styles';

type CounterProps = {
  numberColor: string;
  textSize?: string;
  handleIncrese: (count: number) => void;
};
const Counter = ({
  numberColor,
  textSize = '50px',
  handleIncrese,
}: CounterProps) => {
  const [conterValue, setConterValue] = useState<number>(0);
  return (
    <div css={styles.card}>
      <h1 style={{ color: numberColor, fontSize: textSize }}>{conterValue}</h1>
      <div>
        <button
          onClick={() => {
            setConterValue(conterValue + 1);
            handleIncrese(conterValue + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setConterValue(conterValue - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setConterValue(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
