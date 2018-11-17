var hobidAnimation = bodymovin.loadAnimation({
    container: document.getElementById('hobid'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dataHobbies.json',
    prerender: true,
})

document.getElementById('hobid').addEventListener('mouseover', function(){hobidAnimation.setDirection(1); hobidAnimation.play(); })
document.getElementById('hobid').addEventListener('mouseleave', function(){hobidAnimation.setDirection(-1); hobidAnimation.play(); })
