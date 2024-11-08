'use client';
import { useEffect, useState, useRef } from 'react';

const useMasonry = () => {
  const masonryContainer = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<HTMLElement[]>([]);
  const [columns, setColumns] = useState<number>(3);  // Default to 3 columns

  // Function to dynamically determine number of columns based on screen width
  const getColumns = () => {
    if (window.innerWidth < 640) return 1;  // Mobile
    if (window.innerWidth < 1024) return 2;  // Tablet
    return 3; // Desktop
  };

  // When the component mounts, get the column count and listen to window resize events.
  useEffect(() => {
    setColumns(getColumns());  // Set columns initially based on screen size
    const handleResize = () => {
      setColumns(getColumns());  // Update columns on resize
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Once the images are loaded, calculate their position in the masonry layout.
  useEffect(() => {
    if (masonryContainer.current) {
      const masonryItem = Array.from(masonryContainer.current.children) as HTMLElement[];
      setItems(masonryItem);
    }
  }, [columns]);  // Recalculate items if columns change

  useEffect(() => {
    const handleMasonry = () => {
      if (!items.length) return;

      const columnHeights = Array(columns).fill(0); // Track height of each column

      items.forEach((item) => {
        const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
        const top = columnHeights[minHeightIndex];
        const left = `${(100 / columns) * minHeightIndex}%`;

        item.style.position = 'absolute';
        item.style.top = `${top}px`;
        item.style.left = left;

        // Update the height of the column that this item was placed in
        columnHeights[minHeightIndex] = top + item.offsetHeight;
      });
    };

    handleMasonry();
    window.addEventListener('resize', handleMasonry);
    return () => {
      window.removeEventListener('resize', handleMasonry);
    };
  }, [items, columns]);  // Recalculate masonry layout when items or columns change

  return masonryContainer;
};

export default useMasonry;
