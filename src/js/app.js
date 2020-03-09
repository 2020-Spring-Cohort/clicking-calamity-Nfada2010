
  var i = 0
  function countClick()  {
      document.getElementById("clickCount").innerHTML = i++ + s + q;
  }
      var s = 0
      function shiaClick()  {
          document.getElementById("shiaCount").innerHTML = s++ + 1;
      }
          var q = 0
      function stackClick()  {
          document.getElementById("stackCount").innerHTML = q++ + 1;
      }


      function updateClickCountersDisplays(){
          document.getElementById("clickCountDisplay").innerHTML=getClickCount;
          document.getElementById("shiaCountDisplay").innerHTML=getShiaCount;
          document.getElementById("stackCountDisplay").innerHTML=getStackCount;
      }

      function updateCosts(){
          document.getElementById("shiaCost").innerHTML = shiaCost
          document.getElementById("stackCost").innerHTML = stackCost

      }


const makeCookieIntoClickCounter = (_countClick,clickCountDisplay,clickCounter)=>{
    countClick.addEventListener('click',()=>{
        clickCounter.countClick();
        updateClickCountersDisplays();
    })
}

    const makeCookieStackIntoClickStackCounter = (_stackClick,stackCountDisplay,stackCount)=>{
        countStackClick.addEventListener('click',()=>{
            stackClick.countStackClick();
            clickCount - stackCost;
            updateClickCountersDisplays();
        })
    }

    const makeShiaIntoClickShiaCounter = (_shiaClick,shiaCountDisplay)=>{
        countShiaClick.addEventListener('click',()=>{
            shiaClick.countShiaClick();
            clickCount - shiaCost;
            updateClickCountersDisplays();
        })
    }
  
    

    function timer(){
        clickCount = clickCount + shiaClick;
        clickCount = clickCount + stackCount;
        updateClickCountdisplay();
        updateShiaCountDisplay();
        updateStackCountDisplay();
        setInterval(timer,100)

    };

    
    const clickCountButton = document.querySelector('clickCounter');
    const clickShiaButton = document.querySelector('shiaClick') 
    const clickStackButton = document.querySelector('stackClick')

      
