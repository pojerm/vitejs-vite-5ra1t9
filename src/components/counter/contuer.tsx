import * as styles from './counter.styles';

type CounterProps = {
  numberColor: string;
  textSize?: string;
};
const Counter = ({ numberColor, textSize = '50px' }: CounterProps) => {
  return (
    <div css={styles.card}>
      <h1 style={{ color: numberColor, fontSize: textSize }}>0</h1>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default Counter;
