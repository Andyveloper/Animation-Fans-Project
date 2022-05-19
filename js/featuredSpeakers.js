const sectionTitle = document.querySelector('.featured-speakers');
const gridImg = document.querySelectorAll('.featured-speakers__grid-item__img');
const contentTitle = document.querySelectorAll('.featured-speakers__grid-item__content__title');
const contentDescription = document.querySelectorAll('.featured-speakers__grid-item__content__description');
const contentText = document.querySelectorAll('.featured-speakers__grid-item__content__text');

const featuredSpeakers = [
  {
    featuredImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    name: 'Yochai Benkler',
    description: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    textContent: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    featuredImage: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    name: 'Kilnam Chon',
    description: '',
    textContent: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.',
  },
  {
    featuredImage: 'https://images.unsplash.com/photo-1619705070299-5612cdfbd4fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880',
    name: 'SohYeong Noh',
    description: 'Director of Art Centre Nabi and a board member of CC Korea',
    textContent: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    featuredImage: 'https://images.unsplash.com/photo-1586194789086-cf65b6412585?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=833',
    name: 'Julia Leda',
    description: 'President of Young Pirates of Europe',
    textContent: 'European ingetration, political democracy and participation of youth through online as her major condem, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.',
  },
  {
    featuredImage: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80',
    name: 'Lila Tretikov',
    description: 'Executive Director of the Wikimedia Foundation',
    textContent: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month',
  },
  {
    featuredImage: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80',
    name: 'Ryan Merkley',
    description: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    textContent: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement',
  },
];

const populateCards = () => {
  for (let i = 0; i < featuredSpeakers.length; i += 1) {
    sectionTitle.innerHTML = 'Featured Speakers';
    gridImg[i].src = featuredSpeakers[i].featuredImage;
    contentTitle[i].innerHTML = featuredSpeakers[i].name;
    contentDescription[i].innerHTML = featuredSpeakers[i].description;
    contentText[i].innerHTML = featuredSpeakers[i].textContent;
  }
};

export default populateCards;