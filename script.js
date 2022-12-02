const speakersObj = [
  {
    id: '1',
    image: './images/speaker_01.png',
    speaker: 'Yochai Benkler',
    job: 'Berkman Professor fo Entrepreneurial Legal Studies at Harvard Law School',
    contribution:
      'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    id: '2',
    image: './images/speaker_02.png',
    speaker: 'Kilnam Chon',
    job: '',
    contribution:
      "Kilnam Chon hlped bring the Internet to Asia and is outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
  },

  {
    id: '3',
    image: './images/speaker_03.png',
    speaker: 'SohYeong Noh',
    job: 'Director of Art Centre Nabi and a board member of SAI Korea',
    contribution:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
  },

  {
    id: '4',
    image: './images/speaker_04.png',
    speaker: 'Julia Leda',
    job: 'President of Young Pirates of Europe',
    contribution:
      "European ingetration, political democracy and participation of youth through online as her major concern, Reda's report outlining potential changes to Eu copyright law was approved by the Parliament in July.",
  },

  {
    id: '5',
    image: './images/speaker_05.png',
    speaker: 'Lila Tretikov',
    job: 'Executive Director of the wikimedia Foundation',
    contribution:
      'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit oranization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },

  {
    id: '6',
    image: './images/speaker_06.png',
    speaker: 'Ryan Merkley',
    job: 'CEO of SAI, ex COO of the Mozilla Foundation',
    contribution:
      'Ryan had been leading open-sorce projects at the Mozilla Foundation such as the open source movement.',
  },
];

const sectionSpeaker = document.querySelector('.speakers');

const div = document.createElement('div');
div.innerHTML = `<h3 id="h3Speakers" class="pt-5 pb-2">Featured Speakers</h3>
<hr id="hrMain"
/>`;
const divGrid = document.createElement('div');
divGrid.className = 'grid1';

const divHidden = document.createElement('div');
// divHidden.setAttribute('id', 'demo');
divHidden.className = 'notShow';

const divList = document.createElement('div');
divList.className = 'speakerList';
function addSpeakers() {
  for (let i = 0; i < speakersObj.length; i += 1) {
    divList.innerHTML = `<div class="speakerImg"
  ><img src=${speakersObj[i].image} alt="Speaker photo" /></div
    ><div class="speakerContent"
  ><h4>${speakersObj[i].speaker}</h4
  ><p class="larger"
    >${speakersObj[i].job}</p
  ><hr id="hrSpeaker" /><p class="smaller"
    >${speakersObj[i].contribution}</p
  ></div
    >`;
    divList[i] = divList.cloneNode(true);
    if (i < 2) {
      divGrid.appendChild(divList[i]);
    } else {
      divHidden.appendChild(divList[i]);
    }
  }
  return divGrid;
}
addSpeakers();

const buttonMore = document.querySelector('#buttonMore');
const buttonLess = document.querySelector('#buttonLess');

sectionSpeaker.insertBefore(div, buttonMore);
sectionSpeaker.insertBefore(divGrid, buttonMore);

if (window.innerWidth > 768) {
  sectionSpeaker.insertBefore(divHidden, buttonMore);
  buttonMore.style.display = 'none';
  buttonLess.style.display = 'none';
} else {
  buttonMore.addEventListener('click', () => {
    sectionSpeaker.insertBefore(divHidden, buttonMore);
    buttonMore.style.display = 'none';
    buttonLess.style.display = 'block';
  });
  buttonLess.addEventListener('click', () => {
    divHidden.remove();
    buttonMore.style.display = 'block';
    buttonLess.style.display = 'none';
  });
}

/* MENU POpup */
const menu = document.querySelector('.nav-on-top');
const hamburger = document.querySelector('#hamburger-btn');

function openMenu() {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
}

document.querySelector('#hamburger-btn').addEventListener('click', openMenu());
document.querySelector('#close-btn').addEventListener('click', closeMenu());
