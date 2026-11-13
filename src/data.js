// ALL site content lives here. Replace every sample value with the couple's real details.
// Any text field left as '' (or an empty list) is simply hidden on the page.
export const wedding = {
  monogram: 'S&A', // groom first (सचिन & अपर्णा)
  // Small credit line at the very bottom of the page. Set to '' to hide it.
  credit: 'Created by Sumit Mishra',
  // Secret word for the link-maker page: open https://SITE/?make=<makerKey>
  makerKey: 'anu-aarav-7391',
  // Short address that redirects to the link-maker: open https://SITE/invite
  makerPath: '/invite',
  // Couple photo shown in the hero. Replace by overwriting the file in public/images/ (same name), or change this path
  couplePhoto: '/images/couple.jpg',
  // Complete photo, shown only when the guest taps the hero photo.
  couplePhotoFull: '/images/couple-full.png',
  year: '2027',
  datesText: '29 जनवरी से 10 फरवरी',
  // Countdown target: first ceremony, Indian Standard Time (+05:30). No time was given, so this is the start of the day.
  countdownTarget: '2027-01-29T00:00:00+05:30',

  bride: {
    title: 'सौ.कां.',
    name: 'अपर्णा उपाध्याय',
    nickname: '',
    relation1: '',
    grandparents: '',
    relation2: 'सुपुत्री',
    parents: '',
    place: 'अयोध्या (उ.प्र.)',
  },
  groom: {
    title: 'चि.',
    name: 'सचिन मिश्रा',
    nickname: '',
    relation1: 'सुपौत्र',
    grandparents: 'श्रीमती भानमती मिश्रा',
    relation2: 'सुपुत्र',
    parents: 'श्री अवधेश कुमार मिश्रा',
    place: 'पुरे बेनीदीन, हँसुई, मुकुंदपुर, बल्दीराय, सुल्तानपुर (उ.प्र.)',
  },

  darshanabhilashi: {
    // Groom's brothers, eldest first
    names: 'सौरभ मिश्रा, सुमित मिश्रा, शिवांशु मिश्रा, आदर्श मिश्रा, आनंद मिश्रा, अभिषेक मिश्रा',
    family: '',
  },
  vineet: {
    // Father first, then the groom's uncles (चाचा), eldest first
    names: 'श्री अवधेश कुमार मिश्रा, श्री विनय मिश्रा, श्री अशोक मिश्रा, श्री सुरेंद्र नाथ मिश्रा, श्री देवेंद्र मिश्रा',
    family: 'समस्त मिश्रा परिवार',
    phones: [],
  },

  // The schedule is shown in two columns side by side (stacked on phones); each day says which column it belongs to.
  columnTitles: ['रामायण एवं तिलक', 'हल्दी एवं विवाह'],
  days: [
    {
      label: 'पहला दिन',
      date: 'शुक्रवार, 29 जनवरी',
      column: 1,
      events: [
        { name: 'रामायण पाठ आरंभ', time: '', dress: '', avoid: '', image: '/images/kalash.webp' },
      ],
    },
    {
      label: 'दूसरा दिन',
      date: 'शनिवार, 30 जनवरी',
      column: 1,
      events: [
        { name: 'रामायण समापन', time: '', dress: '', avoid: '', image: '/images/havan.webp' },
      ],
    },
    {
      label: 'तीसरा दिन',
      date: 'रविवार, 31 जनवरी',
      column: 1,
      events: [
        { name: 'तिलकोत्सव', time: '', dress: '', avoid: '', image: '/images/tilak.jpg' },
      ],
    },
    {
      label: 'हल्दी',
      date: 'सोमवार, 8 फरवरी',
      column: 2,
      events: [
        { name: 'हल्दी', time: '', dress: '', avoid: '', image: '/images/haldi.webp' },
      ],
    },
    {
      label: 'बारात',
      date: 'मंगलवार, 9 फरवरी',
      column: 2,
      events: [
        { name: 'बारात प्रस्थान (अयोध्या) एवं फेरे', time: '', dress: '', avoid: '', image: '/images/baraat-prasthan.png' },
      ],
    },
    {
      label: 'स्वागत',
      date: 'बुधवार, 10 फरवरी',
      column: 2,
      events: [
        { name: 'बारात वापसी एवं वधू स्वागत', time: '', dress: '', avoid: '', image: '/images/varmala.webp' },
      ],
    },
  ],


  venue: {
    name: 'पुरे बेनीदीन, हँसुई, मुकुंदपुर, ब्लॉक व तहसील बल्दीराय, जनपद सुल्तानपुर, उत्तर प्रदेश',
    mapsUrl: 'https://maps.google.com/?q=Mukundpur,+Baldirai,+Sultanpur,+Uttar+Pradesh',
    instagramUrl: '',
    photos: ['/images/venue-dining.png', '/images/venue-day.png', '/images/venue-night.png'],
    background: '/images/dhol.webp',
  },

  contacts: [
    { name: 'श्री अवधेश कुमार मिश्रा', phone: '+91 96518 66584' },
    { name: 'सौरभ मिश्रा (भाई)', phone: '+91 63920 35404' },
  ],
};
