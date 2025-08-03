
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUserData() {
 const dataContainer = document.getElementById("dataContainer");

try {
const response = await fetch(apiUrl);

const users = await response.json();

dataContainer = document.getInnerHTML = " ";

    users.forEach(user => {
      const userElement = document.createElement("p");
      userElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
      dataContainer.appendChild(userElement);
    });


console.log("Fetched users:", users);

} catch (error) { 
dataContainer.innerHTML = "";
dtaContainer.textContent = "Failed to load user data.";
console.error("Error fetching users:", error);


}
const userList = document.createlement("ul");

users.forEach(user => { 
const listItem = document.createElement("li");
listItem.textContent = user.name;
userList.appendChild(listItem);
});
dataContainer.appendChild(userList);

}

document.addEventListener("DOMContentLoaded", function () {
fetchUserData();
});