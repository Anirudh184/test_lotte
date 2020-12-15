


bodymovin.loadAnimation({
    container: document.getElementById('logo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "o.json"
})


bodymovin.loadAnimation({
    container: document.getElementById('cs'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "data.json"
})

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
  if(detectMob()){
    bodymovin.loadAnimation({
        container: document.getElementById('main'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "mobile.json"
    })
  }else{
    bodymovin.loadAnimation({
        container: document.getElementById('main'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "bg.json"
    })
  }