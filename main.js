const user = {
  github: 'OPaivaHeitor',
  facebook: 'heitortuc',
  instagram: 'meunome_heitor',
  twitter: 'sardinhaheitor'
}

function changeSocialMediaLinks() {
  userName.textContent = 'Heitor Paiva'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${user[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${user.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      profilePic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
