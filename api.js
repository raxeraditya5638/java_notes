const api = 'http://dog-api.kinduff.com/api/facts';

const getCatFact = async () => {
    console.log("getCatFact")
    let response = await fetch(api);
    console.log(response);
    let data = await response.json();
    console.log(data);
}
getCatFact()

// function getCatFact(){
//     fetch(api)
//   .then(response => response.json())

// }
