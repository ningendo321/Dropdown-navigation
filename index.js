const features = document.querySelector('.features')
const featuresDropdown = document.querySelector('.features-dropdown')
const company = document.querySelector('.company')
const companyDropdown = document.querySelector('.company-dropdown')
const arrow = Array.from(document.querySelectorAll('.up'))
const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger')

features.addEventListener('click', function() {
    featuresDropdown.classList.toggle('active')
    arrow[0].classList.toggle('active')
})

company.addEventListener('click', function() {
    companyDropdown.classList.toggle('active')
    arrow[1].classList.toggle('active')
})

hamburger.addEventListener('click', function() {
    
    document.querySelector('.menu-div').classList.toggle('active')
    document.querySelector('.right-nav-div').classList.toggle('active')
    
    hamburger.classList.add('active')
    close.classList.add('active')
})

close.addEventListener('click', function(){
    document.querySelector('.menu-div').classList.remove('active')
    document.querySelector('.right-nav-div').classList.remove('active')
    close.classList.remove('active')
    hamburger.classList.remove('active')
})