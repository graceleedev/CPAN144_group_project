import React, { useContext } from 'react';
import { TabContext } from './TabGroup';

export default function Tab({ children, index }) {
  const { activeIndex, setActiveIndex } = useContext(TabContext);

  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{
        fontWeight: activeIndex === index ? 'bold' : 'normal',
        textDecoration: activeIndex === index ? 'underline' : 'none',
        marginRight: '10px',
        padding: '10px',
        fontSize: '16px',
        border: 'none',
        marginLeft: '10px'
      }}
    >
      {children}
    </button>
  );
}
