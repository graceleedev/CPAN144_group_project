import React, { useContext } from 'react';
import { TabContext } from './TabGroup';

export default function TabPanel({ children, index }) {
  const { activeIndex } = useContext(TabContext);

  return activeIndex === index ? <div style={{ marginTop: '10px' }}>{children}</div> : null;
}