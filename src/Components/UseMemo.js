import React, { useState, useMemo } from 'react';

function UseMemo() {
  const [countone, setCountone] = useState(0);
  const [counttwo, setCounttwo] = useState(0);

  const incrementone = () => setCountone(countone + 1);
  const incrementtwo = () => setCounttwo(counttwo + 1);

  
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;  
    return countone % 2 === 0;
  }, [countone]);

  return (
    <div>
      <button onClick={incrementone}>ClickOne - {countone}</button>
      <span>{isEven ? 'Even' : 'Odd'}</span>
      <button onClick={incrementtwo}>ClickTwo - {counttwo}</button>
    </div>
  );
}

export default UseMemo;
