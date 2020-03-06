
  var i = 0
  function countClick()  {
      document.getElementById("clickCount").innerHTML = i++ + 1;
  }
      var s = 0
      function shiaClick()  {
          document.getElementById("shiaCount").innerHTML = s++ + 1;
      }
          var q = 0
      function stackClick()  {
          document.getElementById("stackCount").innerHTML = q++ + 1;
      }

const updateClickCountdisplay = (clickCountElement, clickCount)=>{
    clickCountElement.innerText = clickCount.getClickCount();
}

const updateShiaCountDisplay = (clickShiaElement, shiaCount)=>{
    clickShiaElement.innerText = shiaCount.getShiaCount();
}

const updateStackCountDisplay = (clickStackElement, stackCount)=>{
    clickStackElement.innerText = stackCount.getStackCount();
}


const makeCookieIntoClickCounter = (_countClick,clickCountDisplay,clickCounter)=>{
    countClick.addEventListener('click',()=>{
        clickCounter.countClick();
        updateClickCountdisplay(clickCountDisplay,countClick,ClickCounter)
    })

    const makeCookieStackIntoClickStackCounter = (_stackClick,stackCountDisplay)=>{
        countStackClick.addEventListener('click',()=>{
            stackClick.countStackClick();
            updateStackCountDisplay(stackCountDisplay,stackClick)
        })
    }
  
    }
    
    const clickCountButton = document.querySelector('clickCounter');
    const clickShiaButton = document.querySelector('shiaClick') 
    const clickStackButton = document.querySelector('stackClick')

      
