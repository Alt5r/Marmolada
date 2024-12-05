'use client'
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from 'react';

export default function Homepage() {
  return (
   
    
    <div style={{ backgroundColor: '#bcc5d1' }} className="flex w-full h-screen max-w-5xl mx-auto flex-col lg:flex-row gap-8 p-4">
       <Head>
        <title>Nicola Bird Art</title>
        <meta name="description" content="Showcase of Nicola Birds art" />
      </Head>
      {/* Left Box - 50% Width, Auto Height */}
      <div style={{ backgroundColor: '#bcc5d1' }} className="card rounded-box lg:w-1/2 flex-grow p-4">
        
        {/* Centered Image */}
        <Image 
          src="/homepage/image.png"
          alt="Description of the image"
          width={500}
          height={300}
          className="mx-auto rounded-lg"
        />
        
        {/* Text with same width as image */}
        <div className="w-[450px] mx-auto">
          <p className="text-black text-justify leading-relaxed" style={{ paddingLeft: '1px', paddingRight: '1px' }}>
            My work is inspired by landscapes I've lived in and know well - Yorkshire, the Lake District, and coastal New Zealand. They are my response to the experience of these places and emerge from an intuitive process of 'call and response' between visual memory and the play of materials.
            <br /><br />
            When out walking I am thinking about painting, but when I start to paint I leave analysis aside, working in a rapid, instinctive way. If some intriguing sense of space is recognised, I pause and proceed in a more considered way. Often I only realise why something works when I see it later in the landscape. I like to allow the media, the uncontrived movement of paint to lead me, responding to the unpredictable marks and interactions which occur along the way. This can be exciting or disorienting, and 'getting lost' is always a risk. If, after returning to the work with a fresh eye, there is no 'alchemy,' no poetry, I return to a freer approach allowing the paint to suggest a new way forward. This keeps me searching until, eventually, I arrive somewhere familiar, but new. Hopefully somewhere the viewer would like to dwell a while.
          </p>
        </div>
      </div>
      
      {/* Right Box - 50% Width, Auto Height */}
      <div style={{ backgroundColor: '#bcc5d1' }} className="card rounded-box lg:w-1/2 flex-grow p-4">
        <div className="w-[450px] max-auto">
        <p className="text-black text-justify leading-relaxed" style={{ paddingLeft: '1px', paddingRight: '1px'}}>
        I also enjoy printmaking - particularly the spontanity of monoprint, collogaph and carborundum. I work into these with mixed media to create one-off works rather than a conventional print series.
        </p>

        <Image 
          src="/homepage/image2.png"
          alt="Description of the image"
          width={500}
          height={300}
          className="mx-auto rounded-lg"
        />

<p className="text-black text-justify leading-relaxed" style={{ paddingLeft: '1px', paddingRight: '1px'}}>
I've taught at Harrogate College and in New Zealand, where I lived for 7 years.
</p>
        </div>
      </div>
    </div>
  );
}
