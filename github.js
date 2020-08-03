class GitHub {
  constructor() {
    this.client_id = "bd80fd587f90c2889600";
    this.client_secret = "3e481bd6eb3c95ea7800a92ea56a581ceb192361";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    // console.log(repos)

    return {
      profile,
      repos,
    };
  }
}

/* const test = new GitHub();
test.getUser("webnrolls").then((profil) => {
  console.log(profil);
}); */
