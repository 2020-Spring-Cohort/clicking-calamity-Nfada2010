describe('manipulates click counter', () =>{
    let testClickDisplay;
    let testShiaDisplay;
    let testStackDisplay;
    let testClickCounter;
    let testStackCounter;
    let testShiaCounter;

beforeEach(() => {
    testclickCount = new ClickCount();
    testStackCount = new ClickStackCount();
    testShiaCount = new ClickShiaCount();
    testClickDisplay = document.createElement('clickCountDisplay');
    testShiaDisplay = document.createElement('clickShiaCountDisplay');
    testStackDisplay = document.createElement('clickStackCountDisplay');
})

describe('updateClickDisplay() have element match current clickCount'), () =>{

    it('clickDisplay element should have an innerText of \'0\' at the begining'), () =>{
        updateClickCountDisplay(testClickDisplay,testclickCount);
        expect(testClickDisplay.innerTest).toBe('0');
    };

    it('clickDisplay element should have innerText of 1 when click once'),() =>{
        testclickCount.clickCount();
        updateClickCountDisplay(testClickDisplay,testClickCount);
        expect(testClickDisplay.innerTest).toBe('1');
    };

    describe('makeCookieintoClickCounter() makes cookie into clickCounter'),() =>{
        // beforeEach(() =>{
        //     testClickCounter.click();
        // })

        it('should update clickCount when clicked'),() =>{
            expect(testClickCount.getClickCount()).toBe(1);
        };

        it('should update clickCountDisplay when clicked'), () => {
            expect(testClickDisplay.innerText).toBe('1');
        }
    }

    describe('makeCookieStackIntoStackCounter() makes a button into stackCounter'),() => {
        beforeEach(() => {
            testStackCount.click();
        })
        it('should update stackCount when clicked'),() =>{
            expect(testStackCount.getStackCount()).toBe(1);
        };

        it('should update clickStackDisplay when clicked'),() => {
            expect(testStackDisplay.innerText).toBe('1');
        }
      
    }
}
})



