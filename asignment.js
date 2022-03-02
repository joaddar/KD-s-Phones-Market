const loadPage = () => {
    // get input 
    const input = document.getElementById('search-input')
    const searchText = input.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))
    // if (searchText == '') {
    //     const error = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    //     fetch(error)
    //         .then(res => res.json())
    //         .then(data => errorWorks(data))
    // }
    // else {
    //     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    //     // console.log(url);
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => displayResult(data.data))
    // }
    input.value = '';
}

const displayResult = data => {
    console.log(data);
    if (data.status === false) {
        errorWorks();
    }
    else {
        const container = document.getElementById('display-result')
        container.textContent = '';
        data.forEach(phone => {

            // console.log(phone);
            const { brand, image, phone_name, slug } = phone
            const div = document.createElement('div')
            div.innerHTML = `
        <div class="col">
          <div class="card d-flex">
             <div>
                <img style src="${image}" class="card-img-top w-25 " alt="">
             </div>
             <div class="card-body">
               <h2 class="card-title">Brand:${brand}</h2>
               <h4>${phone_name}</h4>
               </p>${slug}</p>
               <button onclick="loadOnclick('${slug}')" class="btn btn-primary">Details</button>
              </div>
            </div>
         </div>
        `;
            container.appendChild(div)
        });
    }
}

const loadOnclick = async details => {
    // console.log(details);
    const url2 = ` https://openapi.programming-hero.com/api/phone/${details}`;
    // console.log(url2);
    const res = await fetch(url2);
    const data = await res.json();
    displayResult2(data.data);
}


const displayResult2 = data => {
    console.log(data);
    const { brand, image, name, slug, mainFeatures, releaseDate } = data;
    const container2 = document.getElementById('display-result2')
    container2.innerHTML = '';
    const div2 = document.createElement('div')
    div2.innerHTML = `
     <div class="">
          <div>
               <img src="${image}" class="card-img-top w-25 " alt="">
          </div>
          <div>
             <h1>${name}</h1>
             <h4 class="card-title">Brand:${brand}</h4>
             <h5>${slug} </h5>
             <h5>${mainFeatures.chipSet} </h5>
             <h5>${mainFeatures.displaySize} </h5>
             <h5>${mainFeatures.memory}</h5>      
             <h5> ${mainFeatures.sensors}</h5>
             <h5>${releaseDate} </h5>
             <p>iphone is a so more powerful,its a perfect phone for,you can buy this</p>
             <a href="https://www.youtube.com/watch?v=XKfgdkcIUxw" class="btn btn-primary">click to more</a>
          </div>
     </div>
        `;
    container2.appendChild(div2)
}

const errorWorks = () => {
    const error = document.getElementById('display-result')
    const errorDiv = document.createElement('div')
    errorDiv.innerHTML = `
    <div class="col justify-content-center">
          <div class="card">
             <div>
             <h3>hi baby</h3>
             <img src="./image/download.jfif" alt="">
             </div>
             <div class="card-body">
             </div>
          </div>
    </div>
    `;
    error.appendChild(errorDiv);
}