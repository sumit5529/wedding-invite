import { useState } from 'react';
import { wedding } from '../data';
import { makeInviteLink } from '../guest';

function whatsappText(name, link) {
  return (
    `${name} जी,\n` +
    `${wedding.bride.name} & ${wedding.groom.name} के विवाह (${wedding.datesText} ${wedding.year}) में आप सादर आमंत्रित हैं।\n` +
    `निमंत्रण देखें: ${link}`
  );
}

export default function LinkMaker() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(null);

  const names = text
    .split('\n')
    .map((n) => n.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .slice(0, 300);

  async function copy(value, index) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(index);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      window.prompt('यह लिंक कॉपी करें:', value);
    }
  }

  return (
    <main className="maker">
      <h1 className="heading">निमंत्रण लिंक बनाएँ</h1>
      <p className="maker__help">
        हर पंक्ति में एक नाम लिखें, जैसे “शर्मा परिवार” या “श्री राकेश गुप्ता”। हर नाम का अपना लिंक बनेगा।
      </p>
      <label className="maker__label" htmlFor="guest-names">
        मेहमानों के नाम
      </label>
      <textarea
        id="guest-names"
        className="maker__input"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'शर्मा परिवार\nश्री राकेश गुप्ता'}
      />

      {names.length > 0 && (
        <ul className="maker__list">
          {names.map((name, i) => {
            const link = makeInviteLink(name);
            return (
              <li key={`${i}-${name}`} className="maker__row">
                <div className="maker__name">{name}</div>
                <div className="maker__link">{decodeURIComponent(link).replace(/\+/g, ' ')}</div>
                <div className="maker__actions">
                  <a className="btn" href={link} target="_blank" rel="noreferrer">
                    देखें
                  </a>
                  <button type="button" className="btn" onClick={() => copy(link, i)}>
                    {copied === i ? 'कॉपी हो गया ✓' : 'लिंक कॉपी करें'}
                  </button>
                  <a
                    className="btn btn--wa"
                    href={`https://wa.me/?text=${encodeURIComponent(whatsappText(name, link))}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp पर भेजें
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
