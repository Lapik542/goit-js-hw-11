import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i=document.querySelector(".form"),p=document.querySelector(".gallery-js"),r=document.querySelector(".loader");r.style.display="none";i.addEventListener("submit",n=>{n.preventDefault();const l="42027351-38548a0814b7c6ae31d9c3419",a=i.querySelector(".input-js").value,s=`https://pixabay.com/api/?key=${l}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;r.style.display="block",fetch(s).then(e=>(e.ok||(c.error({title:"Error",message:error.message}),r.style.display="none"),e.json())).then(e=>{p.innerHTML=e.hits.reduce((t,o)=>t+`
        <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
            <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <ul class="photo-list">
            <li class="photo-list-value">
                <h2 class="photo-name">Likes</h2>
                <p class="photo-value">${o.likes}</p>
            </li>
            <li>
                <h2 class="photo-name">Views</h2>
                <p class="photo-value">${o.views}</p>
            </li>
            <li>
                <h2 class="photo-name">Comments</h2>
                <p class="photo-value">${o.comments}</p>
            </li>
            <li>
                <h2 class="photo-name">Downloads</h2>
                <p class="photo-value">${o.downloads}</p>
            </li>
        </ul>
    </li>
        `,""),new u(".gallery a",{captionsData:"alt",captionDelay:250}),r.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
