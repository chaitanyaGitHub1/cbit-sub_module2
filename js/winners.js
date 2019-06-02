 const winners = [{
     name: "Chaitanya Yanamala",
     department : "MCA",
     position : "First",
     contact : "9912654075"
},{
    name: "Rohit Kodi",
    department : "EEE",
    position : "Second",
    contact : "9912654075"
},{
    name: "Manmohan Shing",
    department : "MECH",
    position : "Third",
    contact : "9912654075"
}];



document.addEventListener('DOMContentLoaded', (event) => {
    // fetchRestaurants();
    winners.forEach(win => {
        console.log(win)
       
    const div = document.getElementById('card_class');
    div.append(createWinnersHTML(win));
     })


});


createWinnersHTML = (win) => {

    const div1 = document.createElement('div');
    div1.className = 'card';

    const image = document.createElement('img');
    image.src = "img/winners/1.jpg";
    div1.append(image);

    const name = document.createElement('h1');
    name.innerHTML = win.name;
    div1.append(name);

    const department = document.createElement('p');
    department.innerHTML = win.department;
    div1.append(department);

    const position = document.createElement('p');
    department.innerHTML = win.position;
    div1.append(position);

    const social = document.createElement('div');
    div1.append(social);
 
    const linkedin = document.createElement('a');
    linkedin.href = ('#');
    social.append(linkedin);

    const linkedin_i = document.createElement('i');
    linkedin_i.className = ('fa fa-linkedin');
    linkedin.append(linkedin_i);

    const contact = document.createElement('p');
    div1.append(contact);


    const button = document.createElement('button');
    button.innerHTML = `Contact : ${win.contact}`;
    contact.append(button);


    return div1;
}