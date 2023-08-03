
const jokes = document.querySelector('#joke')
const jbtns = document.querySelector('#jbtn')

// promise
// const generatejoke = () => {
//     const setheaders={
//         headers: {
//             Accept: "application/json"
//         }

//     }
//     fetch('https://icanhazdadjoke.com', setheaders)
//         .then((res) => res.json())//html format data to json

//         .then((data)=>{
//             jokes.innerHTML=data.joke;
//         })//getting data of json
//         .catch((error)=>{
//             console.log(error);
//         })
// }


// async await function
const generatejoke = async () => {
    try {
        const setheaders = {
            headers: {
                Accept: "application/json"
            }

        }
        const res = await fetch('https://icanhazdadjoke.com', setheaders);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(error);
    }
}

jbtns.addEventListener("click", generatejoke)
generatejoke();












