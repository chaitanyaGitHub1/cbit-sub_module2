  
 const   participants = [{
  name: "Chaitanya Yanamala",
  department : "CSE",
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
},{
  name: "Lalu Shing",
  department : "Bio-Tech",
  position : "Third",
  contact : "9912654075"
 },{
  name: "Vikram Udhay",
  department : "MECH",
  position : "Third",
  contact : "9912656975"
 },{
  name: "Kiran Kumar",
  department : "MCA",
  position : "Third",
  contact : "9912654075"
 },{
  name: "Shalini Shing",
  department : "MECH",
  position : "Third",
  contact : "9912654075"
 },{
  name: "Githin Kumar",
  department : "MECH",
  position : "Third",
  contact : "9912654075"
 }]



  /**
   * Fetch all restaurants.
   */


    document.addEventListener('DOMContentLoaded', (event) => {
      // fetchRestaurants();
      participants.forEach(participant => {
          console.log(participant)
            
          const tbody = document.getElementById('details');
          tbody.append(createParticipantsHTML(participant));
          })
         });
  
  createParticipantsHTML = (participant) => {

    const tr = document.createElement('tr');
    
    const name = document.createElement('td');
    name.innerHTML = participant.name;
    tr.append(name);

    const department = document.createElement('td');
    department.innerHTML = participant.department;
    tr.append(department);

    
    const contact = document.createElement('td');
    contact.innerHTML = participant.contact;
    tr.append(contact);
  
    return tr;
  }
  