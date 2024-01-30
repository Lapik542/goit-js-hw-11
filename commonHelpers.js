import{S as a,i as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const i=document.querySelector(".form"),u=document.querySelector(".gallery-js");i.addEventListener("submit",n=>{n.preventDefault();const r="42027351-38548a0814b7c6ae31d9c3419",l=i.querySelector(".input-js").value,s=`https://pixabay.com/api/?key=${r}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(s).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found for the provided query");u.innerHTML=e.hits.reduce((o,t)=>o+`
            <li class="gallery-item">
                <a class="gallery-link" href="${t.largeImageURL}">
                    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <ul class="photo-list">
                    <li class="photo-list-value">
                        <h2 class="photo-name">Likes</h2>
                        <p class="photo-value">${t.likes}</p>
                    </li>
                    <li>
                        <h2 class="photo-name">Views</h2>
                        <p class="photo-value">${t.views}</p>
                    </li>
                    <li>
                        <h2 class="photo-name">Comments</h2>
                        <p class="photo-value">${t.comments}</p>
                    </li>
                    <li>
                        <h2 class="photo-name">Downloads</h2>
                        <p class="photo-value">${t.downloads}</p>
                    </li>
                </ul>
            </li>
        `,""),new a(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(e=>{c.error({title:"Error",message:e.message})})});
//# sourceMappingURL=commonHelpers.js.map
