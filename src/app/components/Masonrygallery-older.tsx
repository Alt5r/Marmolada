'use client';

import { useEffect, useRef } from "react";


export default function MasonryPage2() {
    const masonryContainer = useRef<HTMLDivElement | null>(null);

    const images = [
        '/PaintingOlder/1.jpg',
        '/PaintingOlder/2.jpg',
        '/PaintingOlder/3.jpg',
        '/PaintingOlder/4.jpg',
        '/PaintingOlder/5.jpg',
        '/PaintingOlder/6.jpg',
        '/PaintingOlder/7.jpg',
        '/PaintingOlder/8.png',
        '/PaintingOlder/9.jpg',
        '/PaintingOlder/10.jpg',
        '/PaintingOlder/11.jpg',
        '/PaintingOlder/12.jpg',
        '/PaintingOlder/13.jpg',
        '/PaintingOlder/14.jpg',
        '/PaintingOlder/15.jpg',
        '/PaintingOlder/16.jpg',
        '/PaintingOlder/17.jpg',
        '/PaintingOlder/18.jpg',
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

            // Use imagesLoaded to ensure Masonry is initialized only after images are loaded
            imagesLoaded(masonryContainer.current, () => {
                masonryInstance.layout();
            });
        };

        initializeMasonry();
    }, []);

    return (
        <div
            ref={masonryContainer}
            className="relative w-full mx-auto my-8 masonry-container"
        >
            {images.map((src, index) => (
                <div key={index} className="masonry-item mb-16">
                    <img
                        src={src}
                        alt={`Painting ${index + 1}`}
                        className="w-full h-auto block border-2 rounded-lg border-slate-600"
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
    );
}
