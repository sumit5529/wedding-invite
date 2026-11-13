import { wedding } from '../data';
import Reveal from './Reveal';
import ArchFrame from './ArchFrame';
import GoldDivider from './GoldDivider';

function Person({ p }) {
  return (
    <div className="person">
      <h3 className="person__name">
        {p.title} {p.name} {p.nickname && <small>{p.nickname}</small>}
      </h3>
      {p.grandparents && (
        <p>
          {p.relation1} — {p.grandparents}
        </p>
      )}
      {p.parents && (
        <p>
          {p.relation2} — {p.parents}
        </p>
      )}
      {p.place && <p className="person__place">{p.place}</p>}
    </div>
  );
}

export default function InviteCard() {
  const { bride, groom, darshanabhilashi, vineet } = wedding;
  return (
    <section className="section section--cream">
      <span className="corner corner--tl" />
      <span className="corner corner--tr" />
      <span className="corner corner--bl" />
      <span className="corner corner--br" />
      <Reveal>
        <ArchFrame className="invite">
          <div className="invite__body">
            <p className="eyebrow">आशीर्वाद सहित</p>
            <h2 className="heading">आमंत्रण</h2>
            <GoldDivider />
            <Person p={groom} />
            <p className="invite__sang">संग</p>
            <Person p={bride} />
            <GoldDivider />
            <div className="invite__cols">
              {darshanabhilashi.names && (
                <div>
                  <h3>दर्शनाभिलाषी</h3>
                  <p>{darshanabhilashi.names}</p>
                  <strong>{darshanabhilashi.family}</strong>
                </div>
              )}
              <div>
                <h3>विनीत</h3>
                <p>{vineet.names}</p>
                <strong>{vineet.family}</strong>
                {vineet.phones?.length > 0 && <p>मो. {vineet.phones.join(',  ')}</p>}
              </div>
            </div>
          </div>
        </ArchFrame>
      </Reveal>
    </section>
  );
}
