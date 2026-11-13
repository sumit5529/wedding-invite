import { wedding } from '../data';
import Reveal from './Reveal';
import ArchFrame from './ArchFrame';

export default function Venue() {
  const { venue, contacts, bride, groom, year } = wedding;
  return (
    <section
      className="section venue"
      style={{
        backgroundImage: `linear-gradient(rgba(43,48,36,0.84), rgba(43,48,36,0.93)), url(${venue.background})`,
      }}
    >
      <Reveal>
        <h2 className="heading">आपके आगमन की प्रतीक्षा रहेगी!</h2>
      </Reveal>
      <Reveal delay={150}>
        <div className="venue__photos">
          {venue.photos.map((src) => (
            <ArchFrame key={src} className="venue__photo">
              <img src={src} alt={venue.name} loading="lazy" />
            </ArchFrame>
          ))}
        </div>
        <p className="venue__name">{venue.name}</p>
        <div className="venue__buttons">
          <a className="btn" href={venue.mapsUrl} target="_blank" rel="noreferrer">
            रास्ता देखें
          </a>
          {venue.instagramUrl && (
            <a className="btn" href={venue.instagramUrl} target="_blank" rel="noreferrer">
              इंस्टाग्राम पर स्थल देखें
            </a>
          )}
        </div>
      </Reveal>
      {contacts.length > 0 && (
        <Reveal delay={250}>
          <h3 className="heading venue__contact-title">संपर्क सूत्र</h3>
          <div className="contacts">
            {contacts.map((c) => (
              <a key={c.phone} className="contact" href={`tel:${c.phone.replace(/\s/g, '')}`}>
                <span>{c.name}</span>
                <strong>{c.phone}</strong>
              </a>
            ))}
          </div>
        </Reveal>
      )}
      <footer className="footer">
        <span /> {groom.name} &amp; {bride.name} · {year} <span />
      </footer>
    </section>
  );
}
