const loadPage = () => {
    // get input 
    const input = document.getElementById('search-input')
    const searchText = input.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))
}

const displayResult = data => {
    console.log(data);
    data.forEach(phone => {
        console.log(phone);
    });
}