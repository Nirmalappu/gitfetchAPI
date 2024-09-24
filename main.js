
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const picture = user.picture.large;


            document.getElementById('user-name').textContent = fullName;
            document.getElementById('user-email').textContent = email;
            document.getElementById('user-picture').src = picture;
        })
        .catch(error => console.error('Error fetching data:', error));
}


document.getElementById('fetch-user-btn').addEventListener('click', fetchRandomUser);

window.onload = fetchRandomUser;
