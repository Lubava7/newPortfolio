(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const c=[{id:1,name:"Circea",link:"https://lubava7.github.io/circeya/",description:"Circea test task",stack:["Html","Css","js"],createdAt:"2022",img:"/src/assets/pics/circea.jpg"},{id:10,name:"Сайт-визитка",link:"https://lubava7.github.io/rental_services/",description:"Пример сайта-визитки для Сервиса аренды",stack:["HTML","css"],createdAt:"2024",img:"/src/assets/pics/rental_service.jpg"},{id:2,name:"Zarya newsPaper",link:"https://lubava7.github.io/old_newspaper/",description:"Page with Old newsPaper inspired look",stack:["Html","css"],createdAt:"2024",img:"/src/assets/pics/zarya.jpg"},{id:3,name:"Solar System",link:"https://lubava7.github.io/solar-system/",description:"Facts about solar system",stack:["html","css","js"],createdAt:"2023",img:"/src/assets/pics/solar_syst.jpg"},{id:4,name:"Landing page",link:"https://lubava7.github.io/landing-page/",description:"landing page",stack:["html","css"],createdAt:"2022",img:"/src/assets/pics/landing.jpg"},{id:5,name:"Hei, Yamaguchi",link:"https://lubava7.github.io/vc-yamaguchi",description:"string",stack:["html","css","js"],createdAt:"2022",img:"/src/assets/pics/yamaguchi_vc.jpg"},{id:6,name:"Yamaguchi table",link:"https://lubava7.github.io/yamaguchi/",description:"string",stack:["string","string2"],createdAt:"2022",img:"/src/assets/pics/table.jpg"},{id:7,name:"Venarus promo page",link:"https://lubava7.github.io/venarus/",description:"string",stack:["string","string2"],createdAt:"2022",img:"/src/assets/pics/venarus.jpg"},{id:8,name:"Portfolio for Photographer",link:"https://lubava7.github.io/dmitry-zakaz/",description:"string",stack:["string","string2"],createdAt:"2022",img:"/src/assets/pics/zakaz.jpg"},{id:9,name:"Landing page 2",link:"https://lubava7.github.io/lend/",description:"string",stack:["string","string2"],createdAt:"2022",img:"/src/assets/pics/my_landing.jpg"},{id:10,name:"Test Vue page",link:"https://lubava7.github.io/vue-test-task-LeadHit/",description:"Page with Auth and statistics",stack:["string","string2"],createdAt:"2022",img:"/src/assets/pics/vue_stats.jpg"}];function o(){fetch("/src/components/projects.html").then(i=>i.text()).then(()=>{const i=document.getElementById("projects_list");return c.forEach(s=>{if(i!==null||i!==void 0){const a=document.createElement("div"),n=document.createElement("img");n.setAttribute("src",s.img),n.setAttribute("alt",`img${s.id}`);const t=document.createElement("a");t.setAttribute("target","_blank"),t.setAttribute("href",s.link),t.setAttribute("title",s.name),t.textContent=s.name;const e=document.createElement("p");e.textContent=s.description,a.appendChild(t),a.appendChild(n),a.appendChild(e),i==null||i.appendChild(a)}})}).catch(i=>console.log("Error while fetching projects.html",i))}const l=[{name:"about",path:"about.html"},{name:"projects",path:"projects.html"},{name:"resume",path:"resume.html"}];l.forEach(({name:i,path:s})=>{fetch(`/src/components/${s}`).then(a=>a.text()).then(a=>{const n=document.getElementById(`${i}_section`);n!==null&&(n.innerHTML=a)}).catch(a=>console.log(`Error while fetching ${s}`,a))});o();
