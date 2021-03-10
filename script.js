let body = document.body;
let string = window.location.search;
let url = 'https://api.github.com/users/Lesenok2807';
let url = window.location.toString();

fetch(url)
const getNameFromUrl = (url) => {
  let getUrl = url.split('=');
  let name = getUrl[1]; //
  if(name == undefined) {
  name = '';
  }
return name;
}

fetch(`https://api.github.com/users/${getNameFromUrl(url)}`)
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        fetch(url)
            name.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(name);
        name.addEventListener("click", () => window.location = json.html_url);
        name.addEventListener("click", () => window.location = 'https://webheroschool.github.io/badunka_35les/');

        let bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Информация о пользователе недоступна';
        }
        body.append(bio);
    })
    .catch(err => alert('Информация о пользователе недоступна'));
