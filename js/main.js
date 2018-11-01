

TweenMax.from("#learningText", 4, { opacity:0});
//TweenMax.from("#logo", 1.2, {rotation:360});


var waypoint = new Waypoint({
    element: document.querySelector('#learningHeader').querySelector('#learningText'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!');
      runAnimation(this.element, []);
    },
    offset: 100
});

(() => {
    const logoAnim = document.querySelector("#logo");

    logoAnim.addEventListener("mouseover", function() {
        //debugger;
        TweenMax.from("#logo", 1.2, {rotation:360});
    });
})();