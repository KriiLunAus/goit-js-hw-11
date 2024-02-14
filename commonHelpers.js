import{i as d,S as f}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".imagesInput"),m=document.querySelector(".searchImages"),a=document.querySelector(".listOfPhotos"),l=document.querySelector(".loader");u();function p(){const s=new URLSearchParams({key:"42327867-17db48a54b533eea41b085f18",q:c.value,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}m.addEventListener("click",()=>{a.innerHTML="",y(),setTimeout(()=>{p().then(s=>{if(c.value.length===0)d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else return h(s)}).catch(s=>{console.error(s)}),u()},1500)});function h(s){const r=s.hits.map(o=>`
            <li class ="listElement">
            <a
            class ="largePhotoLink"
            href="${o.largeImageURL}">
            <img
            class ="photo"
            src="${o.previewURL}">
            </a>
            <p>Likes: ${o.likes}</p>
            <p>Views: ${o.views}</p>
            <p>Comments: ${o.comments}</p>
            <p>Downloads: ${o.downloads}</p>
            </li>
            `).join("");a.insertAdjacentHTML("beforeend",r),new f(".listElement a",{docClose:!1}).refresh()}function y(){l.style.display="block"}function u(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
