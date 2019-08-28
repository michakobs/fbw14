const imageNames = ['01d', '04n', '09d', '50n'];
const container = document.getElementById('container');

let makeFetch = collection => {
    let imagePromises = [];
    for (imageName of collection) {
        let promiseImage = new Promise((resolve, reject) => {
            resolve(fetch(`http://openweathermap.org/img/w/${imageName}.png`, {
                mode: 'no-cors'} // NICHT SICHERE LEITUNG! 
            ));
        });
        imagePromises.push(promiseImage);
    }
    return Promise.all(imagePromises);
}

let fetchImages = async (collection) => {
    let allImages = await makeFetch(collection);
    console.table(allImages);
    for (image of allImages) {
        let newImage = document.createElement('IMG');
        newImage.src = image.url;
        container.appendChild(newImage);
    }
}
fetchImages(imageNames);