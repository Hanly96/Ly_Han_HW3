(() => {
    let abilities = document.querySelector('#abiText'),
        learning  = document.querySelector('#learningText'),
        light     = document.querySelector('#logo'), 
        website   = document.querySelector('#website'),
        ux        = document.querySelector('#ux'),
        graphic   = document.querySelector('#graphic'),
        part2     = document.querySelector('#learningEx'),
    
    
    
    
    tl = new TimelineMax ({});
    
    
    //Animation that happen automatically when the page load
    function startAnim(){
        tl.from(abilities, 2,{
            opacity:0
        });
        tl.from(learning, 2,{
            opacity:0
        });
    
    
    }
    
    //Animation that happen when the page load in Part 2
    
    
    
    
    function rotateLight(){
        TweenMax.from(light, 1,{
            rotation: 360
        })
    }
    function scaleWeb(){
        TweenMax.from(website, 1,{
            x:5,
            y:5,
            scale: 1.3
        })   
    }
    
    function fadeUx(){
        TweenMax.from(ux, 4,{
            opacity:0
        })   
    }
    
    function moveGraphic(){
        TweenMax.from(graphic, 1,{
        x:300, 
        opacity:0, 
        scale:0.5
        })
    }
    
    
    
    //Event Listener Abilities Part 01
    window.addEventListener('load',startAnim,false);
    light.addEventListener('mouseover',rotateLight,false);
    website.addEventListener('mouseover',scaleWeb,false);
    ux.addEventListener('mouseover',fadeUx,false);
    graphic.addEventListener('mouseover',moveGraphic,false);
    
    
    //Event Listener Learning Experience Part 02
    window.addEventListener('load',startPart2,false);
    
    
    
    
    })();