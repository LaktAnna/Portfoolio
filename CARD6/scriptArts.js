var kunstAnimation = bodymovin.loadAnimation({
    container: document.getElementById('kunst'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'CARD6/dataArts.json',
    prerender: true,
})

document.getElementById('kunst').addEventListener('mouseover', function(){kunstAnimation.setDirection(1); kunstAnimation.play(); })
document.getElementById('kunst').addEventListener('mouseleave', function(){kunstAnimation.setDirection(-1); kunstAnimation.play(); })
