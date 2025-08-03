const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUserData() {
  const dataContainer = document.getElementById("api-data"); // ✅ fixed ID

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContainer.innerHTML = ""; // Clear "Loading..." message

    // OPTIONAL: show name and email in <p> elements
    users.forEach(user => {
      const userElement = document.createElement("p");
      userElement.textContent = `Name: ${user.name}, Email: ${user.email}`;
      dataContainer.appendChild(userElement);
    });

    // OPTIONAL: add a <ul> with names
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

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  fetchUserData();
});
