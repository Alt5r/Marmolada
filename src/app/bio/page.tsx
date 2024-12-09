'use client';

import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center items-center min-h-screen"
        style={{ backgroundColor: '#bcc5d1' }}
      >
        <div className="flex w-full max-w-7xl h-auto gap-8 px-6">
          {/* Left Content */}
          
          <div className="w-1/2 flex justify-center items-center bg-white p-6 rounded-lg shadow-lg">
          <Image
          src="/profile.jpeg" // Path to your image in the public folder
          alt="A description of the image" // Alternative text for accessibility
          width={500} // Width of the image in pixels
          height={300} // Height of the image in pixels
          className="rounded-lg shadow-md" // Optional Tailwind CSS classes
        />
            <p className="text-lg leading-relaxed text-gray-800">
              I&apos;m inspired by the experience of landscape - from the vastness of a skyline, to the
              tangle of an ancient hedgerow, or the turquoise dazzle of New Zealand&apos;s coastline.
              After a wonderful seven years living in New Zealand I returned to the UK and
              Yorkshire to see our landscape with a fresh eye. My work explores this experience, but
              is not directly representational. It is just as much about my response to media as the
              work evolves, how paint suggests its own way forward.
              <br />
              <br />
              I have also enjoyed teaching, both in Yorkshire and New Zealand.
              <br />
              <br />
              Recently I&apos;ve had work shown at the Harrogate Open, also the Fronteer Gallery
              Sheffield. I am a gallery artist at The Northern Lights Gallery Keswick.
              <br />
              <br />
              Solo show April 23.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-1/2 flex flex-col justify-start bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Harrogate College Teacher Training – (City & Guilds)
                <br />
                Bradford College BA Hons. Art and Design (Painting & Ceramics)
                <br />
                Bristol University BSc Hons. Biochemistry
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                Other Training / Previous Career
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Public Art - Selected artist - ‘Training for Real’ (Chrysalis Arts)
                <br />
                1984/92 Biotech. & Biomed. Research / Product Development / Mkting Management. World
                wide patent co-author (Pfizer), SMART award (Beam Tech)
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Awards / Prizes</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Society of Designer Crafts - Distinction for work exhibited at Mall Galleries
                <br />
                ArtTranspennine - Prize - Creative writing award
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                Public and Community Art
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Yorkshire Dales Nat. Pk. - Public art work - &apos;Tracks in Time’ culminating in a
                performance by poet Ian McMillan. Featured in Landscape Design magazine
                <br />
                Lincoln City Council - Banners for Wharf (working with schools and architects)
                <br />
                Gaudi’s Wine Bar - glass & ceramic mosaic exterior frontage
                <br />
                Puccino’s Restaurants Interior design and mosaic fabrication
                <br />
                Primary school - exterior mosaic – glass, castings & tile
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Teaching</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Leeds Met. University Lecturer (Pt. time) Drawing & painting / Life drawing / Nat.
                Dip. Design Crafts / Ceramics & Kiln formed glass
                <br />
                Open College of the Arts
                <br />
                Lake House Arts Auckland
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">
                Some Selected Exhibitions
              </h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Hibiscus Bays Art Awards - Auckland
                <br />
                Lake House Arts - Auckland
                <br />
                Mercer Gallery, Harrogate ‘Harrogate Open’ 2020 & several previous
                <br />
                Solo Show - Dales National Park HQ ‘The Long View’
                <br />
                Zilla Bell Gallery, Thirsk
                <br />
                North Street Gallery, Leeds
                <br />
                Harding House Gallery, Lincoln ‘On a Clear Day.’ Solo show
                <br />
                Bianco Nero, Stokesley ‘Elements of the Land’
                <br />
                The Biscuit Factory, Newcastle
                <br />
                Chapel Gallery, Ormskirk - &apos;Northern Open&apos;
                <br />
                Crescent Arts, Scarborough - Open
                <br />
                Leeds City Art Gallery - ‘Leeds Open’
                <br />
                Wakefield Gallery - ‘Yorkshire Open’
                <br />
                Quay Arts, Isle of White - ‘Waving Not Drowning’
                <br />
                Cartwright Hall, Bradford - ‘Bradford Open’
                <br />
                Mall Galleries, London - Soc. Designer Crafts Show
                <br />
                York City Art Gallery - ‘Out of The Kiln’
                <br />
                Derek Topp Gallery, (now Gallerytop), Derbyshire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
