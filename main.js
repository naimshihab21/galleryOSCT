const imgAll = document.querySelectorAll('img')
let gallery_box = document.querySelector('.gallery_box')

for (let i = 0; i < imgAll.length; i++) {
  imgAll[i].addEventListener('click', () => {
    let getAttrImg = imgAll[i].getAttribute('src')
    imgAll[0].setAttribute('src', `${getAttrImg}`)
    window.scrollTo({
      top: 20,
      behavior: "smooth"
    })
  })
}


