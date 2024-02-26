$(Document).ready(function() {
    const nameElement = document.querySelector('#name');
    const profileElement = document.querySelector('#avatar');
    const usernameElement = document.querySelector('#username');
    const repositoryElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const endpoint = 'https://api.github.com/users/jul1anaportela'

    fetch(endpoint)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json) {
        nameElement.innerText = json.name;
        profileElement.src = json.avatar_url;
        usernameElement.innerText = json.login;
        repositoryElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
    .catch(function(erro) {
        alert(erro)
    })
})