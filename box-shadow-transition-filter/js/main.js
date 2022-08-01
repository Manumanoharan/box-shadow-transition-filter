function startAd(){
    setTimeout(function(){
        document.getElementById('trans').classList.add('anim');
    },500)
}
window.load=startAd()