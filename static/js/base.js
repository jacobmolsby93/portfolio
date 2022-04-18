
// Particles floating around homescreen
let particle = document.getElementById('particles-js')
$(document).ready(function () {
    particlesJS.load(particle, '/static/js/particle-config.json');  
    console.log("something is happening")
})

// Circle around cursor 
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px"
});

// If cursor leaves window hide
document.addEventListener("mouseleave", function(e){
    if( e.clientY < 0) {
         cursor.style.display = 'none'
    } else if (e.clientX > 0) {
        cursor.style.display = 'none'
    }
}, false);
// Cursors enter window show again
document.addEventListener("mouseenter", function(e){
    if( e.clientY > 0) {
         cursor.style.display = 'block'
    }
}, false);

// Circle color change on click,
// Target clicked change color
document.body.addEventListener('click', function(e) {
    cursor.style.opacity = '1'
    setTimeout(() => {
        cursor.style.opacity = ".4";
    }, 100)
    if (e.target.tagName === 'A') {
        e.target.style.color = "#fff"
        setTimeout(() => {
            e.target.style.color = '#888';
            e.target.style.transition = '.2s'
        }, 100)
    }
})

// Cursor becomes white on hover over links
$('a').hover(function() {
    $('.cursor').css('opacity', '1')
}, function() {
    $('a').mouseleave(function() {
        $('.cursor').css('opacity', '.4')
    })
})

$('.select-project-logo').hover(function() {
    $('.cursor').css('opacity', '1')
}, function() {
    $('.select-project-logo').mouseleave(function() {
        $('.cursor').css('opacity', '.4')
    })
})

// On hover show image, offcanavas menu
// Home list item
$(".item-home").hover(function(){
    $('.image-background-container-portfolio').hide()
    $('.image-background-container-about').hide()
    $('.image-background-container-home').show()
}, function () {
    $('.image-background-container-home').fadeOut(40)
})
// Portfolio list item
$(".item-portfolio").hover(function(){
    $('.image-background-container-home').hide()
    $('.image-background-container-about').hide()
    $('.image-background-container-portfolio').show()
}, function () {
    $('.image-background-container-portfolio').fadeOut(40)
})
// About list item
$(".item-about").hover(function(){
    $('.image-background-container-home').hide()
    $('.image-background-container-portfolio').hide()
    $('.image-background-container-about').show()
}, function () {
    $('.image-background-container-about').fadeOut(40)
})
