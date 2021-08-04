import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rohit Franklin',
  subtitle: 'A Computer Engineer, a Game Enthusiast and Hala Madrid!',
  cta: '',
  img: 'boyandball.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'ragging.jpg',
  paragraphOne: 'I am a Roti.',
  paragraphTwo: 'It is my birthday today and',
  paragraphThree: 'my sister is the best!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Chess Simulation',
    info: 'Modern attempt to revolutionarize chess',
    info2: '3D graphics to spice up the game',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1 (2).jpg',
    title: 'Sims CopyCat',
    info: 'Cause Roti likes to copy',
    info2: 'The sims The Roti Way',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1 (3).jpg',
    title: 'Miney Crafty',
    info: 'User Experience at its finest',
    info2: 'Interesting Stuff',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1 (4).jpg',
    title: 'Something Cool',
    info: 'to spice up the website',
    info2: 'I hope you liked it Roti',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
