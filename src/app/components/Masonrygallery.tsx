'use client';

import { useEffect, useRef } from "react";

export default function MasonryPage2() {
    const masonryContainer = useRef<HTMLDivElement | null>(null);

    const images = [
        '/PaintingLarger/1.png',
        '/PaintingLarger/2.png',
        '/PaintingLarger/3.png',
        '/PaintingLarger/4.png',
        '/PaintingLarger/5.png',
        '/PaintingLarger/6.png',
        '/PaintingLarger/7.png',
        '/PaintingLarger/8.png',
    ];

    useEffect(() => {
        const initializeMasonry = async () => {
            if (typeof window === "undefined" || !masonryContainer.current) return;

            // Dynamically import Masonry and imagesLoaded
            const Masonry = (await import("masonry-layout")).default;
            const imagesLoaded = (await import("imagesloaded")).default;

            const masonryInstance = new Masonry(masonryContainer.current, {
                itemSelector: ".masonry-item",
                columnWidth: ".masonry-item",
                percentPosition: true,
                gutter: 50,
            });

            // Ensure Masonry is initialized after images are loaded
            imagesLoaded(masonryContainer.current, () => {
                masonryInstance.layout();
            });
        };

        initializeMasonry();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                ref={masonryContainer}
                className="relative w-full mx-auto my-8 masonry-container"
            >
                {images.map((src, index) => (
                    <div key={index} className="masonry-item mb-16">
                        <img
                            src={src}
                            alt={`Painting ${index + 1}`}
                            className="w-full h-auto block"
                        />
                    </div>
                ))}
                <style jsx>{`
                    .masonry-container {
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .masonry-item {
                        width: 30%; /* Default for larger screens */
                    }
                    @media (max-width: 991px) {
                        .masonry-item {
                            width: 100%; /* Single column for smaller screens */
                        }
                    }
                `}</style>
            </div>
        </div>
    );
}
