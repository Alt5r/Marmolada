import { useEffect, useState, useRef } from "react";

const useMasonry = () => {
  const masonryContainer = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<ChildNode[]>([]);

  useEffect(() => {
    if (masonryContainer.current) {
      const masonryItem = Array.from(masonryContainer.current.children);
      setItems(masonryItem);
    }
  }, []);

  useEffect(() => {
    const handleMasonry = () => {
      if (!items || items.length < 1) return;
      let gapSize = 0;

      if (masonryContainer.current) {
        gapSize = parseInt(
          window
            .getComputedStyle(masonryContainer.current)
            .getPropertyValue("grid-row-gap")
        );
      }

      const columnHeights: number[] = [0, 0, 0]; // Track column heights for 3 columns

      items.forEach((el, index) => {
        if (!(el instanceof HTMLElement)) return;
        const minHeightColumn = columnHeights.indexOf(Math.min(...columnHeights)); // Find the shortest column
        const columnLeft = minHeightColumn * (100 / 3); // Determine column based on width

        el.style.position = "absolute"; // Position each item absolutely to arrange them
        el.style.top = `${columnHeights[minHeightColumn]}px`;
        el.style.left = `${columnLeft}%`;

        // Update the column height
        columnHeights[minHeightColumn] += el.offsetHeight + gapSize;
      });

      masonryContainer.current.style.position = "relative"; // Container needs to be relative for absolute positioning of items
      masonryContainer.current.style.height = `${Math.max(...columnHeights)}px`; // Set container height based on tallest column
    };

    handleMasonry();
    window.addEventListener("resize", handleMasonry);
    return () => {
      window.removeEventListener("resize", handleMasonry);
    };
  }, [items]);

  return masonryContainer;
};

export default useMasonry;
