var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dataHtmlCss.json',
    prerender: true,
})

document.getElementById('anim').addEventListener('mouseover', function(){ bodymovin.setDirection(1); animation.play(); })
document.getElementById('anim').addEventListener('mouseleave', function(){ bodymovin.setDirection(-1); animation.play(); })
