describe('manipulates click counter', () =>{
    let testClickDisplay;
    let testShiaDisplay;
    let testStackDisplay;

beforeEach(() => {
    testClickDisplay = document.createElement('clickCount');
    testShiaDisplay = document.createElement('clickShiaCount');
    testStackDisplay = document.createElement('clickStackCount');
})

describe('updateClickDisplay() have element match current clickCount'), () =>{

    it('clickDisplay element should have an innerText of \'0\' at the begining'), () =>{
        updateClickCountdisplay(testClickDisplay,ClickCount)
        expect(testClickDisplay.innerTest).toBe('0');
    }
}
