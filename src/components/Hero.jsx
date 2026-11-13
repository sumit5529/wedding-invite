import { wedding } from '../data';
import { getGuestName } from '../guest';
import Reveal from './Reveal';
import ArchFrame from './ArchFrame';
import GoldDivider from './GoldDivider';

export default function Hero() {
  const { bride, groom } = wedding;
  const guest = getGuestName();
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
        <ArchFrame className="hero__portrait">
          <img src={wedding.couplePhoto} alt={`${groom.name} और ${bride.name}`} />
        </ArchFrame>
      </Reveal>
      <Reveal delay={300}>
        <p className="eyebrow">शुभ तिथियाँ</p>
        <p className="hero__date">{wedding.datesText}</p>
        <p className="hero__year">{wedding.year}</p>
      </Reveal>
    </header>
  );
}
