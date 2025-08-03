const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUserData() {
  const dataContainer = document.getElementById("dataContainer");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the container before appending new content
    dataContainer.innerHTML = "";

    // OPTIONAL: Display user name and email in <p> tags
    users.forEach(user => {
      const userElement = document.createElement("p");
      userElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
      dataContainer.appendChild(userElement);
    });

    // Create and append a <ul> with user names
    const userList = document.createElement("ul");
    users.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);

    console.log("Fetched users:", users);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching users:", error);
  }
}

// Run after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});
