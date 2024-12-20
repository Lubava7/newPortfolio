import { ProjectType } from './types';

const projects: ProjectType[] = [
  {
    id: 1,
    name: 'Circea',
    link: 'https://lubava7.github.io/circeya/',
    description: 'Circea test task',
    stack: ['Html', 'Css', 'js'],
    createdAt: '2022',
    img: '/src/assets/pics/circea.jpg',
  },
  {
    id: 10,
    name: 'Сайт-визитка',
    link: 'https://lubava7.github.io/rental_services/',
    description: 'Пример сайта-визитки для Сервиса аренды',
    stack: ['HTML', 'css'],
    createdAt: '2024',
    img: '/src/assets/pics/rental_service.jpg',
  },
  {
    id: 2,
    name: 'Zarya newsPaper',
    link: 'https://lubava7.github.io/old_newspaper/',
    description: 'Page with Old newsPaper inspired look',
    stack: ['Html', 'css'],
    createdAt: '2024',
    img: '/src/assets/pics/zarya.jpg',
  },
  {
    id: 3,
    name: 'Solar System',
    link: 'https://lubava7.github.io/solar-system/',
    description: 'Facts about solar system',
    stack: ['html', 'css', 'js'],
    createdAt: '2023',
    img: '/src/assets/pics/solar_syst.jpg',
  },
  {
    id: 4,
    name: 'Landing page',
    link: 'https://lubava7.github.io/landing-page/',
    description: 'landing page',
    stack: ['html', 'css'],
    createdAt: '2022',
    img: '/src/assets/pics/landing.jpg',
  },
  {
    id: 5,
    name: 'Hei, Yamaguchi',
    link: 'https://lubava7.github.io/vc-yamaguchi',
    description: 'string',
    stack: ['html', 'css', 'js'],
    createdAt: '2022',
    img: '/src/assets/pics/yamaguchi_vc.jpg',
  },
  {
    id: 6,
    name: 'Yamaguchi table',
    link: 'https://lubava7.github.io/yamaguchi/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '/src/assets/pics/table.jpg',
  },
  {
    id: 7,
    name: 'Venarus promo page',
    link: 'https://lubava7.github.io/venarus/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '/src/assets/pics/venarus.jpg',
  },
  {
    id: 8,
    name: 'Portfolio for Photographer',
    link: 'https://lubava7.github.io/dmitry-zakaz/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '/src/assets/pics/zakaz.jpg',
  },
  {
    id: 9,
    name: 'Landing page 2',
    link: 'https://lubava7.github.io/lend/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '/src/assets/pics/my_landing.jpg',
  },
  {
    id: 10,
    name: 'Test Vue page',
    link: 'https://lubava7.github.io/vue-test-task-LeadHit/',
    description: 'Page with Auth and statistics',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '/src/assets/pics/vue_stats.jpg',
  },
];

const container = document.getElementById('projects_list');
projects.forEach((project) => {
  if (container !== null || container !== undefined) {
    const div = document.createElement('div');

    const img = document.createElement('img');
    img.setAttribute('src', project.img);
    img.setAttribute('alt', `img${project.id}`);

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', project.link);
    link.setAttribute('title', project.name);
    link.textContent = project.name;

    const p = document.createElement('p');
    p.textContent = project.description;

    div.appendChild(link);
    div.appendChild(img);
    div.appendChild(p);

    container?.appendChild(div);
  }
});
