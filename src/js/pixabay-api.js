`use strict`

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const imagesForSearch = document.querySelector(".imagesInput")
const btn = document.querySelector(".searchImages");
const photoList = document.querySelector(".listOfPhotos")


//Added backend 

function fetchPhoto() {


    const options = new URLSearchParams({
    key: "42327867-17db48a54b533eea41b085f18",
    q:  imagesForSearch.value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});
    
 return   fetch(`https://pixabay.com/api/?${options}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json() ;
    });

}

//Added button usage

btn.addEventListener("click", () => {
    fetchPhoto()
        .then((photos) => {
            console.log(photos)
            if (photos.hits.length === 0) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                })
            } else {
                return addElements(photos);
            }
        })  

        .catch((error) => {
        console.error(error)
    })
})


//Added elements to page(needs to be finalized)

function addElements (photos) {
    const html = photos.hits
        .map((photo) => {
            return `
            <li>
            <img src="${photo.previewURL}">
            </li>
            `;
        })
        .join("");
    
    photoList.insertAdjacentHTML("beforeend", html)
}


//Added simplelightbox