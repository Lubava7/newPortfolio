import { ProjectType } from './types';

const projects: ProjectType[] = [
  {
    id: 1,
    name: 'Circea',
    link: 'https://lubava7.github.io/circeya/',
    description: 'Circea test task',
    stack: ['Html', 'Css', 'js'],
    createdAt: '2022',
    img: '../img/pics/circea.jpg',
  },
  {
    id: 10,
    name: 'Сайт-визитка',
    link: 'https://lubava7.github.io/rental_services/',
    description: 'Пример сайта-визитки для Сервиса аренды',
    stack: ['HTML', 'css'],
    createdAt: '2024',
    img: '../img/pics/rental_service.jpg',
  },
  {
    id: 2,
    name: 'Zarya newsPaper',
    link: 'https://lubava7.github.io/old_newspaper/',
    description: 'Page with Old newsPaper inspired look',
    stack: ['Html', 'css'],
    createdAt: '2024',
    img: '../img/pics/zarya.jpg',
  },
  {
    id: 3,
    name: 'Solar System',
    link: 'https://lubava7.github.io/solar-system/',
    description: 'Facts about solar system',
    stack: ['html', 'css', 'js'],
    createdAt: '2023',
    img: '../img/pics/solar_syst.jpg',
  },
  {
    id: 4,
    name: 'Landing page',
    link: 'https://lubava7.github.io/landing-page/',
    description: 'landing page',
    stack: ['html', 'css'],
    createdAt: '2022',
    img: '../img/pics/landing.jpg',
  },
  {
    id: 5,
    name: 'Hei, Yamaguchi',
    link: 'https://lubava7.github.io/vc-yamaguchi',
    description: 'string',
    stack: ['html', 'css', 'js'],
    createdAt: '2022',
    img: '../img/pics/yamaguchi_vc.jpg',
  },
  {
    id: 6,
    name: 'Yamaguchi table',
    link: 'https://lubava7.github.io/yamaguchi/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '../img/pics/table.jpg',
  },
  {
    id: 7,
    name: 'Venarus promo page',
    link: 'https://lubava7.github.io/venarus/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '../img/pics/venarus.jpg',
  },
  {
    id: 8,
    name: 'Portfolio for Photographer',
    link: 'https://lubava7.github.io/dmitry-zakaz/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '../img/pics/zakaz.jpg',
  },
  {
    id: 9,
    name: 'Landing page 2',
    link: 'https://lubava7.github.io/lend/',
    description: 'string',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '../img/pics/my_landing.jpg',
  },
  {
    id: 10,
    name: 'Test Vue page',
    link: 'https://lubava7.github.io/vue-test-task-LeadHit/',
    description: 'Page with Auth and statistics',
    stack: ['string', 'string2'],
    createdAt: '2022',
    img: '../img/pics/vue_stats.jpg',
  },
  //   {
  //     id: 11,
  //     name: 'ToDo list',
  //     link: 'https://lubava7.github.io/react-todo-new/',
  //     description: 'One of my first projects',
  //     stack: ['string', 'string2'],
  //     createdAt: '2022',
  //   },
  //   {
  //     id: 12,
  //     name: 'Booklist, add your favorite book!',
  //     link: 'https://lubava7.github.io/react-booklist/',
  //     description: 'One of my first projects too',
  //     stack: ['string', 'string2'],
  //     createdAt: '2022',
  //   },
  //   {
  //     id: 13,
  //     name: 'React SPA. GoT',
  //     link: 'https://lubava7.github.io/react-got/',
  //     description:
  //       'One of my first projects, my first ever try with API and react SPA',
  //     stack: ['string', 'string2'],
  //     createdAt: '2022',
  //   },
];

export function getProjects() {
  fetch('../components/projects.html')
    .then((response) => response.text())
    .then(() => {
      const container = document.getElementById('projects_list');
      return projects.forEach((project) => {
        if (container !== null || container !== undefined) {
          const div = document.createElement('div');
          // const svg = document.createElement('img');
          // svg.setAttribute('src', '../img/svg/link.svg');
          // svg.setAttribute('alt', `svg${project.id}`);

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
    })
    .catch((error) => console.log('Error while fetching projects.html', error));
}
