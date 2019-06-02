
  document.addEventListener('DOMContentLoaded', (event) => {
  fetchRestaurants();

  });

      
  /**
   * Fetch all restaurants.
   */
  function fetchRestaurants() {
    fetch('sports.json')
    .then((res) => res.json())
    .then((data) => {
     console.log(data)
     data.sports.forEach(sport => {
       console.log(sport)
      const ul = document.getElementById('sports-list');
      ul.append(createRestaurantHTML(sport));
    })
    })
  }


/**
 * Create restaurant HTML.
 */
createRestaurantHTML = (sport) => {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.className = 'restaurant-img';
    
    image.src = `/sports_img/${sport.photograph}`;
    li.append(image);


    const name = document.createElement('h1');
    name.innerHTML = sport.title;
    li.append(name);

  
    const address = document.createElement('p');
    address.innerHTML = sport.description;
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
