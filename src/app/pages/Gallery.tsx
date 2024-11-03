// pages/index.tsx

import ImageGallery from '../components/Imagegallery';

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-6">Image Gallery</h1>
      <ImageGallery />
    </div>
  );
}
