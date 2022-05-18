let cnn = document.getElementById('cnn')
let header = document.getElementById('heading')
let paragraph = document.querySelector('.paragraph')
let footer = document.querySelector('.footer')
let link = document.querySelector('a')
let form = document.querySelector('form')
let elements = document.getElementsByName('language')
console.log(elements)


// adding text content to div with id cnn
cnn.textContent += " and reporting on Ukraine"

// prints the h1 element
console.log(header)

// add text contents to the header
header.textContent = "Many deaths in Bucha"

// add text content to paragraph
paragraph.textContent = "The world is going gaga"

// add text content to footer 
footer.innerHTML = `<p class="pfooter">&copy; 2022</p>`

//setting attributes
link.setAttribute('title', "DOM in JavaScript")
link.setAttribute('data-method', 'post')
link.setAttribute('href', 'https://uferekalu.netlify.app/')
footer.setAttribute('id', 'footer-id')


//populating th form with innerHTML
console.log(form)
form.innerHTML = "<h3>JavaScript Form</h3> \n"
form.innerHTML += "<input type=\"text\" placeholder=\"Please enter your name\" /> \n \n"
form.innerHTML += `<input type="text" placeholder="Please enter your email" />`
form.innerHTML += `<input type="password" placeholder="Please enter your passowrd" />`
form.innerHTML += `<input type="number" placeholder="select number" />`


//get title attribute of an anchor element
let title = link.getAttribute('title')
console.log(title)

link.setAttribute('title', title + " added new")
