function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.div.append(image)
    return image
}

newImage(..\Pics\flying-enemy.png)