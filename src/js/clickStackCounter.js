let clickStackCount = 0;



class ClickStackCount {
    
    constructor() {
        this.clickStackCount = 0;
    }
    countClick ()  {
        this.clickStackCount++;
    }

    getCompanionCount(){
        return clickStackCount;
    }

  
}






const buyStack = (stack,buyStack) =>{
    const stackCost = Math.floor(10 * Math.pow(1.1,stack));
    if(ClickCount >= StackCost){
        stack = stack + 1;
        ClickCount = ClickCount - stackCost;
        document.querySelector('stackCount').innerHTML=stack;
        document.querySelector('ClickCount').innerHTML=ClickCount;
    };

    let nextStackPrice = Math.floor(100 * Math.pow(1.1,stack));
    document.querySelector('stackCost').innerHTML = nextStackPrice;
};