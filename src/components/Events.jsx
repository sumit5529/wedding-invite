import { wedding } from '../data';
import Reveal from './Reveal';
import ArchFrame from './ArchFrame';
import GoldDivider from './GoldDivider';

export default function Events() {
  return (
    <section className="section section--green">
      <div className="container">
        <Reveal>
          <p className="eyebrow">शुभ कार्यक्रम</p>
          <h2 className="heading">उत्सव में शामिल हों</h2>
        </Reveal>
        <div className="columns">
          {wedding.columnTitles.map((title, c) => (
            <div key={title} className="columns__col">
              <Reveal>
                <h3 className="columns__title">{title}</h3>
              </Reveal>
              <div className="columns__days">
              {wedding.days
                .filter((day) => day.column === c + 1)
                .map((day, d) => (
                  <div key={day.date} className="day">
                    <Reveal delay={d * 180}>
                      <p className="eyebrow">{day.label}</p>
                      <h4 className="day__title">{day.date}</h4>
                    </Reveal>
                    <div className="day__grid">
                      {day.events.map((ev, i) => (
                        <Reveal key={ev.name} delay={d * 180 + 150 + i * 120}>
                          <ArchFrame className="event">
                            <div className="event__body">
                              <h4>{ev.name}</h4>
                              <GoldDivider />
                              {ev.time && <p className="event__time">{ev.time}</p>}
                              {ev.dress && (
                                <>
                                  <p className="event__label">परिधान</p>
                                  <p className="event__dress">{ev.dress}</p>
                                </>
                              )}
                              {ev.avoid && <p className="event__avoid">{ev.avoid}</p>}
                            </div>
                            <img src={ev.image} alt={ev.name} loading="lazy" className="event__img" />
                          </ArchFrame>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
