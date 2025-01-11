
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const idNumber = document.getElementById('idNumber').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;
  

    const email = generateEmail(firstName, lastName, age);
  

    const userInfo = {
      firstName,
      lastName,
      age,
      idNumber,
      height,
      description,
      email
    };
  

    addUserToList(userInfo);
  

    document.getElementById('userForm').reset();
  });
  
 
  function generateEmail(firstName, lastName, age) {
    const randomStr = Math.random().toString(36).substring(2, 8); 
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}@example.com${randomStr}`;
  }
  

  function addUserToList(user) {
    const userList = document.getElementById('userList');
    const li = document.createElement('li');
  
    li.innerHTML = `
      <strong>${user.firstName} ${user.lastName}</strong> (ასაკი: ${user.age})
      <p><strong>პირადი ნომერი:</strong> ${user.idNumber}</p>
      <p><strong>სიმაღლე:</strong> ${user.height} სმ</p>
      <p><strong>აღწერა:</strong> ${user.description}</p>
      <p><strong>ელ. ფოსტა:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
    `;
  
    userList.appendChild(li);
  }
  