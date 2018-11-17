var tellimusedAnimation = bodymovin.loadAnimation({
    container: document.getElementById('tellimused'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'dataForMoney.json',
    prerender: true,
})

document.getElementById('tellimused').addEventListener('mouseover', function(){tellimusedAnimation.setDirection(1); tellimusedAnimation.play(); })
document.getElementById('tellimused').addEventListener('mouseleave', function(){tellimusedAnimation.setDirection(-1);tellimusedAnimation.play(); })
