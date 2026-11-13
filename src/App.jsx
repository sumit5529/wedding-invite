import Loader from './components/Loader';
import Petals from './components/Petals';
import Hero from './components/Hero';
import InviteCard from './components/InviteCard';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Venue from './components/Venue';
import LinkMaker from './components/LinkMaker';
import { isLinkMakerPage } from './guest';

export default function App() {
  if (isLinkMakerPage()) return <LinkMaker />;

  return (
    <>
      <Loader />
      <Petals />
      <main>
        <Hero />
        <InviteCard />
        <Countdown />
        <Events />
        <Venue />
      </main>
    </>
  );
}
