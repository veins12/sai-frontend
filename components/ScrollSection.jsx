'use client';

import { useEffect } from 'react';
import { useElementStore } from '../store/useElementStore';
import NumberItem from './NumberItem';

const ScrollSection = ({ from, to, direction }) => {
  const { renderedItems, addItem } = useElementStore();

  useEffect(() => {
    let current = from;
    const interval = setInterval(() => {
      if (current <= to) {
        addItem(current++);
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [from, to, addItem]);

  const items = renderedItems.filter((num) => num >= from && num <= to);

  return (
    <div
      className={`flex ${
        direction === 'horizontal' ? 'flex-row overflow-x-auto' : 'flex-col'
      } gap-4 py-8 px-4 min-h-screen`}
    >
      {items.map((num) => (
        <NumberItem key={num} number={num} />
      ))}
    </div>
  );
};

export default ScrollSection;
