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

    describe('Click companions', () =>{
        it("clickCounter should have 0 when new,", () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });
    });
    // console.log(underTest.clickCount)
    // console.log(clickCount)
});
});