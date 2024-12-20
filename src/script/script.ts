import { PagesType } from './types';
import { getProjects } from './projects';

const pages: PagesType[] = [
  {
    name: 'about',
    path: 'about.html',
  },
  {
    name: 'projects',
    path: 'projects.html',
  },
  {
    name: 'resume',
    path: 'resume.html',
  },
];

pages.forEach(({ name, path }) => {
  fetch(`/src/components/${path}`)
    .then((response) => response.text())
    .then((data) => {
      const section = document.getElementById(`${name}_section`);
      if (section !== null) {
        section.innerHTML = data;
      }
    })
    .catch((error) => console.log(`Error while fetching ${path}`, error));
});

getProjects();
