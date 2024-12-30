'use client'
import Image from "next/image";
import Head from "next/head";

export default function Homepage() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto max-w-5xl mx-auto gap-8 p-4 overflow-hidden" style={{ backgroundColor: '#bcc5d1' }}> 
  <Head>
    <title>Nicola Bird Art</title>
    <meta name="description" content="Showcase of Nicola Birds art" />
  </Head>

  {/* Left Box */}
  <div 
    style={{ backgroundColor: '#bcc5d1' }} 
    className="card rounded-box flex-grow p-4 overflow-hidden lg:w-1/2"
  >
    {/* Centered Image */}
    <Image 
      src="/homepage/image.png"
      alt="Description of the image"
      width={500}
      height={300}
      className="mx-auto rounded-lg"
    />

    {/* Text with same width as image */}
    <div className="w-full max-w-[450px] mx-auto mt-4">
      <p className="text-black text-justify leading-relaxed px-1">
        My work is inspired by landscapes I&apos;ve lived in and know well - Yorkshire, the Lake District, and coastal New Zealand. They are my response to the experience of these places and emerge from an intuitive process of &apos;call and response&apos; between visual memory and the play of materials.
        <br /><br />
        When out walking I am thinking about painting, but when I start to paint I leave analysis aside, working in a rapid, instinctive way. If some intriguing sense of space is recognised, I pause and proceed in a more considered way. Often I only realise why something works when I see it later in the landscape. I like to allow the media, the uncontrived movement of paint to lead me, responding to the unpredictable marks and interactions which occur along the way. This can be exciting or disorienting, and &apos;getting lost&apos; is always a risk. If, after returning to the work with a fresh eye, there is no &apos;alchemy,&apos; no poetry, I return to a freer approach allowing the paint to suggest a new way forward. This keeps me searching until, eventually, I arrive somewhere familiar, but new. Hopefully somewhere the viewer would like to dwell a while.
      </p>
    </div>
  </div>

  {/* Right Box */}
  <div 
    style={{ backgroundColor: '#bcc5d1' }} 
    className="card rounded-box flex-grow p-4 overflow-hidden lg:w-1/2"
  >
    <div className="w-full max-w-[450px] mx-auto">
      <p className="text-black text-justify leading-relaxed px-1">
        I also enjoy printmaking - particularly the spontaneity of monoprint, collograph and carborundum. I work into these with mixed media to create one-off works rather than a conventional print series.
      </p>

      <Image 
        src="/homepage/image2.png"
        alt="Description of the image"
        width={500}
        height={300}
        className="mx-auto rounded-lg my-4"
      />

      <p className="text-black text-justify leading-relaxed px-1">
        I&apos;ve taught at Harrogate College and in New Zealand, where I lived for 7 years.
      </p>
    </div>
  </div>
</div>
  );
}
