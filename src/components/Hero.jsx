import { useEffect, useState } from 'react';
import { wedding } from '../data';
import { getGuestName } from '../guest';
import Reveal from './Reveal';
import ArchFrame from './ArchFrame';
import GoldDivider from './GoldDivider';

export default function Hero() {
  const { bride, groom } = wedding;
  const guest = getGuestName();
  const [open, setOpen] = useState(false);

  // Close the full photo with the Escape key.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="section section--green hero">
      <div className="hero__frame" />
      <Reveal>
        <img src="/images/ganesh.jpg" alt="" className="hero__ganesh" />
        <p className="hero__mantra">॥ श्री गणेशाय नमः ॥</p>
        <p className="eyebrow">शुभ विवाह</p>
        <GoldDivider />
        {guest && <p className="hero__guest">प्रिय {guest},</p>}
        <p className="hero__invite">आप सादर आमंत्रित हैं, हमारे विवाह समारोह में</p>
        <h1 className="hero__names">
          {groom.name} <span>&amp;</span> {bride.name}
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <button type="button" className="hero__portrait-btn" onClick={() => setOpen(true)} aria-label="पूरी फ़ोटो देखें">
          <ArchFrame className="hero__portrait">
            <img src={wedding.couplePhoto} alt={`${groom.name} और ${bride.name}`} />
          </ArchFrame>
          <span className="hero__portrait-hint">पूरी फ़ोटो देखने के लिए छुएँ</span>
        </button>
      </Reveal>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <img src={wedding.couplePhotoFull} alt={`${groom.name} और ${bride.name}`} />
          <button type="button" className="lightbox__close" aria-label="बंद करें">
            ×
          </button>
        </div>
      )}
      <Reveal delay={300}>
        <p className="eyebrow">शुभ तिथियाँ</p>
        <p className="hero__date">{wedding.datesText}</p>
        <p className="hero__year">{wedding.year}</p>
      </Reveal>
    </header>
  );
}
