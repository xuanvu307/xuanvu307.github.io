const btnPost = document.querySelector(".post")
const btnPhoto = document.querySelector(".photo")
const btnAlbum = document.querySelector(".album")
const ul = document.querySelector("ul")

btnPhoto.addEventListener("click",async () =>{
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = res
    console.log(res)
})
function render(arr){
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.innerText = arr[i]
        ul.insertAdjacentElement("afterbegin",li)
    }
}
