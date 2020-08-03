// Init GitHub
const github = new GitHub();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    // Make Http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
