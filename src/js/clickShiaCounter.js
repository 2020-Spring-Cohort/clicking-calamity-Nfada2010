let clickShiaCount=0

class clickShiaCount {
    
    constructor() {
        this.clickShiaCount = 0;
    }
    countShiaClick ()  {
        this.clickShiaCount++;
    }

    getShiaCount(){
        return clickShiaCount;
    }

  
}


const buyShia = (ClickShiaCount,buyShia) =>{
    const shiaCost = Math.floor(100 * Math.pow(1.1,shia));
    if(ClickCount >= shiaCost){
        ClickShiaCount = ClickShiaCount + 1;
        ClickCount = ClickCount - shiaCost;
        document.querySelector('ClickShiaCount').innerHTML=ClickShiaCount;
        document.querySelector('ClickCount').innerHTML=ClickCount;
    };

    let nextShiaPrice = Math.floor(100 * Math.pow(1.1,ClickShiaCount));
    document.querySelector('shiaCost').innerHTML = nextShiaPrice;
};
window.setInterval(function(){
	
	clickCount(shia);
	
}, 1000);