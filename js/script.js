/*********************************************
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
**********************************************/

/**
* This function will create and insert/append the elements needed to display a "page" of nine students
  * @param {string} list - the array of student data from data.js
  * @param {number} page - the page number we want to display
**/
function showPage (list, page) {
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

  for ( let i = 0; i < list.length; i++ ){
    if ( i >= startIndex && i < endIndex ) {
      let studentItem =
          ` <li class="student-item cf">
              <div class="student-details">
                <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                <h3>${list[i].name.title}. ${list[i].name.first} ${list[i].name.last}</h3>
                <span class="email">${list[i].email}</span>
              </div>
              <div class="joined-details">
                <span class="date">Joined: ${list[i].registered.date}</span>
              </div>
              </li> `;
      studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  }
}

/**
*This function will create and insert/append the elements needed for the pagination buttons
  * @param {string} list - the array of student data from data.js
**/
function addPagination (list) {
  const numOfPages = Math.ceil(list.length/9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for ( let i = 1; i <= numOfPages; i++) {
    let button =
      `<li>
        <button type="button">${[i]}</button>
       </li>`;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  linkList.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON") {
        document.querySelector('button').className = 'active';
    }
  });

}

// Call functions
showPage(data, 1);
addPagination(data);
