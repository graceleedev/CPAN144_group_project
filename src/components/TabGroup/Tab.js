import React, { useContext } from 'react';
import { TabContext } from './TabGroup';

export default function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabContext);

  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{
        backgroundColor: 'white',
        color: activeIndex === index ? '#FFAC32' : 'black',
        fontWeight: activeIndex === index ? 'bold' : 'normal',
        textDecoration: activeIndex === index ? 'underline' : 'none',
        marginRight: '10px',
        padding: '10px',
        fontSize: '1.3em',
        border: 'none',
        marginLeft: '10px'
      }}
    >
      {children}
    </button>
  );
}
