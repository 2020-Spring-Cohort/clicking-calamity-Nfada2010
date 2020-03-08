
let clickCount=0
let shiaCount=0
let stackCount=0

class ClickCounter {
    
    constructor() {
        this.clickCount = 0;
        this.shiaCount=0;
        this.stackCount = 0;
        this.shiaCost = 100;
        this.stackCost = 10;
        var i = 0

    }



     buyShia(){
        clickCount - this.shiaCost 
        if(this._clickCount < this.shiaCost){
            this._clickCount =0;
        }
        else(this.clickCount>this.shiaCost);{
           this._clickCount - this.shiaCost;
            this.shiaClick++;
        }
    }


     buyStack(){
        clickCount - this.stackCost 
        if(this._clickCount < this.stackCost){
            this._clickCount=0;
        }
        else(this.clickCount>this.stackCost);{
            this.stackClick++;
        }
    }

     getShiaCount(){
        return this.shiaCount;
    }

     getStackCount(){
        return this.stackCount;
    }

     reset(){
        this._clickCount = 0;
        this._shiaCount = 0;
        this._stackCount = 0;
    }
}

     

