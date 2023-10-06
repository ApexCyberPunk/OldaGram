
let cardHead = document.querySelector('.cardHead')

let mContent = posts.map(({name, username, location, avatar, post, comment, likes}) => {

    let image = document.createElement("img")
    image.classList.add("postImage")
    image.src = avatar

    let userName = document.createElement('h1')
    userName.classList.add("postTitle")
    userName.textContent = name

    let place = document.createElement("p")
    place.classList.add("location")
    place.textContent = location

    let mainImage = document.createElement('img')
    mainImage.classList.add('mainImage')
    mainImage.src = post

    // post interaction layer

    let heart = document.createElement('img')
    heart.classList.add('heart')
    heart.src = "./images/icon-heart.png"

    let commentImageEl = document.createElement('img')
    commentImageEl.classList.add('comment')
    commentImageEl.src = "./images/icon-comment.png"

    let DmEl = document.createElement('img')
    DmEl.classList.add('dm')
    DmEl.src = "./images/icon-dm.png"

    // comments

    let userNameEl = document.createElement('p')
    userNameEl.classList.add('commentsUserName')
    userNameEl.textContent = username

    let commentEl = document.createElement('p')
    commentEl.classList.add('commentsText')
    commentEl.textContent = comment


    let userAvatar = cardHead.appendChild(image)
    let userTitle = cardHead.appendChild(userName)
    let userPlace = cardHead.appendChild(place)
    let userImage = cardHead.appendChild(mainImage)
    let userHeart = cardHead.appendChild(heart)
    let appendUserComment = cardHead.appendChild(commentImageEl)
    let userDm = cardHead.appendChild(DmEl)
    let userNameAp = cardHead.appendChild(userNameEl)
    // sep
    let newDiv = document.createElement('div')
    newDiv.classList.add('newDiv')

    let userComment = cardHead.appendChild(commentEl)

})

cardHead =  mContent.join("");




