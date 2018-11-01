(() => {
let skill1 = document.querySelector('#logo'),
    skill2 = document.querySelector('#website');
   


    //Animation that happen when the page loads
tl = new TimelineMax;
function startAnim (){
    tl.from(skill1,1,{
        x:-100,
        opacity: 0
    });

    tl.from(skill2,1,{
        opacity: 0
    })

}    





function rotateLight(){
    TweenMax.from(logo, 1,{
        ratation: 360
    });
}

//Event Listener
window.addEventListener('load',startAnim,false)


})();