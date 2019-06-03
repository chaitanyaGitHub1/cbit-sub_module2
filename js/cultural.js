/**
 * Fetch all restaurants.
 */
function fetchRestaurants() {
    fetch('cultural.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data.cultural.forEach(cultural => {
                console.log(cultural)
                const ul = document.getElementById('cultural-list');
                ul.append(createRestaurantHTML(cultural));
            })
        })
}

document.addEventListener('DOMContentLoaded', (event) => {
    fetchRestaurants();

});


/**
 * Create restaurant HTML.
 */
createRestaurantHTML = (cultural) => {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.className = 'restaurant-img';

    image.src = `cultural_img/${cultural.photograph}`;
    li.append(image);


    const name = document.createElement('h1');
    name.innerHTML = cultural.title;
    li.append(name);


    const address = document.createElement('p');
    address.innerHTML = cultural.description;
    li.append(address);


    const div_link = document.createElement('div');
    div_link.className = "links";
    li.append(div_link);


    const win = document.createElement('a');
    win.innerHTML = 'Winners';
    win.href = ('winners.html');
    div_link.append(win);

    const participate = document.createElement('a');
    participate.innerHTML = 'participated';
    participate.href = ('participants.html');
    div_link.append(participate);


    return li;
}