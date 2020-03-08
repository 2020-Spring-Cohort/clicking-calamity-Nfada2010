

describe('click counter tests', () =>{
    let underTest ;
    beforeEach(() => {
        // clickCount = 0;
        // clickCompanion = 0;
        // underTest = new clickCompanion();
       underTest = new ClickCount();
      
    })

describe('countClick() records clicks and clickCounter() gives the click count', () => {
    
    it('countClick() 1 time should result in a clickCount of 1.', () => {
        underTest.countClick();
        expect(underTest.clickCount).toBe(1);

    });
    it('countClick() 2 time should result in a clickCount of 2.', () => {
        underTest.countClick();
        underTest.countClick();
        expect(underTest.clickCount).toBe(2);

    });

    describe('Click shia', () =>{
        it("clickShiaCounter should have 0 when new,", () => {
            expect(underTest.getShiaCount()).toBe(0);
        });
    });
  
});

const buyShia = (ClickShiaCount,buyShia,clickCounter) =>{
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
});