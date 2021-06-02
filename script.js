document.getElementById('change-image').addEventListener ('click',image)
document.getElementById('change-text').addEventListener ('click',text)
document.getElementById('hide').addEventListener ('click',hide)
document.getElementById('show').addEventListener ('click',show)
document.getElementById('bg').addEventListener ('click',background)

// when image button is clicked, it changes the img between the first lion picture and the second lion picture
function image () {
document.getElementById('picture').src="images/Albedo.jpeg"
}

// when text button is clicked, the text changes
function text () {
document.getElementById('text').innerHTML = "New Text"
}

// when hide button is clicked, the text disapears
function hide () {
document.getElementById('text').style.display = "None" 
}

// when show button is clicked, the hidden text will be revelaed again
function show () {
document.getElementById ('text').style.display = "block"
}

// when background is clicked, the color of the background changes 
function background () {
document.body.style.backgroundColor= "lightgrey"
}