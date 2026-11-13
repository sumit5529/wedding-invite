import { useEffect, useState } from 'react';
import { wedding } from '../data';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timer;
    const done = () => {
      timer = setTimeout(() => setHidden(true), 600);
    };
    if (document.readyState === 'complete') done();
    else window.addEventListener('load', done);
    return () => {
      window.removeEventListener('load', done);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`loader ${hidden ? 'loader--hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader__mono">{wedding.monogram}</div>
      <p>Unpacking...</p>
    </div>
  );
}
