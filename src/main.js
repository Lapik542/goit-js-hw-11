import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery-js');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

form.addEventListener("submit", (eve) => {
    eve.preventDefault();

    const API_KEY = '42027351-38548a0814b7c6ae31d9c3419';
    const QUERY = form.querySelector('.input-js').value;
    const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;

    loader.style.display = 'block';

    fetch(BASE_URL)
    .then(res => {
        if (!res.ok) {
            iziToast.error({
                title: 'Error',
                message: res?.error?.message || "Sorry, there are no images matching your search query. Please try again!"
            });
            loader.style.display = 'none';
            return
        }
        return res.json();
    })
    .then(data => {
         if (!data?.hits?.length) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
            loader.style.display = 'none';
            return []
        }
        gallery.innerHTML = data.hits.reduce((html, image) => html + `
        <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="photo-list">
            <li class="photo-list-value">
                <h2 class="photo-name">Likes</h2>
                <p class="photo-value">${image.likes}</p>
            </li>
            <li>
                <h2 class="photo-name">Views</h2>
                <p class="photo-value">${image.views}</p>
            </li>
            <li>
                <h2 class="photo-name">Comments</h2>
                <p class="photo-value">${image.comments}</p>
            </li>
            <li>
                <h2 class="photo-name">Downloads</h2>
                <p class="photo-value">${image.downloads}</p>
            </li>
        </ul>
    </li>
        `, '');

        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });

        loader.style.display = 'none';
    })

});


