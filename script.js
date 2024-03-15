function loadUsers() {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "https://api.github.com/users", true);

    xmlHttpRequest.onload = function () {
    if (this.status == 200) {
        let users = JSON.parse(this.responseText);
        

        for (let i in users) {
        let li = document.createElement("li");
        li.classList.add('list-group-item');

        let img = document.createElement("img");
        img.className = "img-thumbnail";
        img.setAttribute("src", users[i].avatar_url);
        
        li.append(img);

        let h3 = document.createElement("h3");
        let a = document.createElement("a");
        a.innerText = users[i].login;
        h3.append(a);

        img.after(h3);

        document.querySelector(".list-group").append(li);
            }
        }
    };
    
    xmlHttpRequest.send();
}

loadUsers();
