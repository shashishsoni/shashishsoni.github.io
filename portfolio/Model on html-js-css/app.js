const openbtn = document.querySelector(".js-open")
const modalbg = document.getElementById("modal-background")
const modalbox =  document.getElementById("modal-box")
openbtn.addEventListener('click', function(event){
    event.preventDefault()
    modalbg.classList.add("active")
    modalbox.classList.add("active")
})

const closebtn = document.querySelectorAll(".js-close")
closebtn.forEach(node => {
      node.addEventListener('click', function(e){
        e.preventDefault()
        modalbg.classList.remove("active")
        modalbox.classList.remove("active")
      })
})
