import{i as c,S as p}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=document.querySelector(".form"),h=document.querySelector(".gallery-js"),s=document.querySelector(".loader");s.style.display="none";u.addEventListener("submit",a=>{a.preventDefault();const r="42027351-38548a0814b7c6ae31d9c3419",i=u.querySelector(".input-js").value,n=`https://pixabay.com/api/?key=${r}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;s.style.display="block",fetch(n).then(e=>{var o;if(!e.ok){c.error({title:"Error",message:((o=e==null?void 0:e.error)==null?void 0:o.message)||"Sorry, there are no images matching your search query. Please try again!"}),s.style.display="none";return}return e.json()}).then(e=>{var o;if(!((o=e==null?void 0:e.hits)!=null&&o.length))return c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),s.style.display="none",[];h.innerHTML=e.hits.reduce((l,t)=>l+`
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
        `,""),new p(".gallery a",{captionsData:"alt",captionDelay:250}),s.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
