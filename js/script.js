/*
The Chracters Page Scripts Start From Here <-----
*/
let informations = [];

let info = [];

const section = window.location.pathname;

const sectionName = section.split(".")

const type = sectionName[0].split("/")

var link = `https://rickandmortyapi.com/api/${type[2]}/${window.location.search}`;

if (type[2] == "character" || type[2] == "episode" || type[2] == "location") {


    fetch(link, {
        "method": "GET",
    }).then((response) => {
        console.log("resolve", response.status, response.ok ? "OK" : response)
        return response.json();
    }).then(
        data => {
            informations.push(...data.results);
            informations.map(information => {
                if (type[2] == "character") {


                    var node = document.createElement("div");
                    node.innerHTML = `
            <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${information.image}" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
                       <p class="title is-4">${information.name}</p>
                      <table class="table tbody">
                          <tr> 
                              <th>Status</th>
                              <td>${information.status}${information.status =="Alive"?" 🟢":information.status=="Dead"?" 🔴":" ⚫"}</td>
                          </tr>
                                          <tr>
                              <th>Species</th>
                              <td>${information.species}</td>
                          </tr>
                                          <tr>
                              <th>Type</th>
                              <td>${information.type}</td>
                          </tr>
                                          <tr>
                              <th>Gender</th>
                              <td>${information.gender}</td>
                          </tr>
                                          <tr>
                              <th>Location</th>
                              <td>${information.location.name}</td>
                          </tr>
                      </table>
          </div>

            `;
                    node.id = "card"
                    document.getElementById("columns").appendChild(node);
                } else if (type[2] == "location") {
                    var node = document.createElement("div");
                    node.innerHTML = `
            <div class="card">
            <div class="card-content">
                       <p class="title is-4">${information.name}</p>
                       <table class="table">
                       <tr> 
                           <th>Type</th>
                           <td>${information.type}</td>
                       </tr>
                                       <tr>
                           <th>Dimension</th>
                           <td>${information.dimension}</td>
                       </tr>
                   </table>
          </div>

            `;
                    node.id = "card"
                    document.getElementById("columns").appendChild(node);

                } else if (type[2] == "episode") {
                    console.log("Episodes goes in here")
                    var node = document.createElement("div");
                    node.innerHTML = `
            <div class="card">
            <div class="card-content">
                <p class="title is-4">${information.name}</p>
                <table class="table">
                <tr> 
                    <th>Date</th>
                    <td>${information.air_date}</td>
                </tr>
                                <tr>
                    <th>code</th>
                    <td>${information.episode}</td>
                </tr>
            </table>
          </div>

            `;
                    node.id = "card"
                    document.getElementById("columns").appendChild(node);

                } else {
                    console.log("something went wrong")

                }
            })
            info.push(data.info)
        }
    ).catch((err) => {
        console.log('rejected', err)
    })
}

function nextPage(element) {
    console.log("Just fine")
    const page = info[0].next
    console.log(page)
    if (page != null) {

        pageNumber = page.split("/")
        element.href = `${pageNumber[pageNumber.length-1]}`
    } else {
        alert("This is the last page")
    }
}

function previousPage(element) {
    console.log("Just fine")
    const page = info[0].prev
    console.log(page)
    if (page != null) {
        pageNumber = page.split("/")
        element.href = `${pageNumber[pageNumber.length-1]}`
    } else {
        alert("This is the first page")
    }
}

/*
The Chracters Page Scripts End  Here ----->
*/



/*
Search Function Start here <----------
*/


function search() {
    let search = document.getElementById("search").value;
    let Chracters = "https://rickandmortyapi.com/api/character/?name=" + search
    if (document.getElementById("columns").innerHTML == "") {
        console.log("is Empty")
    } else {
        console.log("not Empty")
        document.getElementById("columns").innerHTML = ""
    }
    fetch(Chracters, {
        "method": "GET",
    }).then((response) => {
        console.log("resolve", response.status, response.ok ? "OK" : response)
        if (response.status == 404) {
            document.getElementById("columns").innerHTML = "No Result Found"
        }
        return response.json();
    }).then(data => {
        data.results.map(Chracter => {
            var node = document.createElement("div");
            node.innerHTML = `
    <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${Chracter.image}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
               <p class="title is-4">${Chracter.name}</p>
              <table class="table tbody">
                  <tr> 
                      <th>Status</th>
                      <td>${Chracter.status}${Chracter.status =="Alive"?" 🟢":Chracter.status=="Dead"?" 🔴":" ⚫"}</td>
                  </tr>
                                  <tr>
                      <th>Species</th>
                      <td>${Chracter.species}</td>
                  </tr>
                                  <tr>
                      <th>Type</th>
                      <td>${Chracter.type}</td>
                  </tr>
                                  <tr>
                      <th>Gender</th>
                      <td>${Chracter.gender}</td>
                  </tr>
                                  <tr>
                      <th>Location</th>
                      <td>${Chracter.location.name}</td>
                  </tr>
              </table>
  </div>

    `;
            node.id = "card"
            document.getElementById("columns").appendChild(node);

        })
    })
}

/*
Search Function End here --------->
*/