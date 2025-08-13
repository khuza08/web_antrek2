import { useEffect } from "react";
import SectionTitle from "./sectionTitle";

export default function InstagramSection() {
  useEffect(() => {
    // load embed script sekali saja
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const posts = [
    "https://www.instagram.com/p/DLduXRiT1bl/",
    "https://www.instagram.com/p/DLvoTHvT9VI/",
    "https://www.instagram.com/p/DKtPWAxTnsz/",
  ];

  return (
    <section className="p-24 bg-slate-900">
<div className='text-center py-8'>
          <SectionTitle >
            Around the <span className='italic text-blue-600 dark:text-blue-400' style={{ fontFamily: "'Instrument Serif', serif" }}>
              School
            </span>
          </SectionTitle>
        </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {posts.map((url, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: `
                <blockquote class="instagram-media" 
                  data-instgrm-permalink="${url}" 
                  data-instgrm-version="14"
                  style="background:#fff; border:0; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1); padding:0; margin:auto; max-width:540px;">
                </blockquote>
              `,
            }}
          />
        ))}
      </div>
    </section>
  );
}
