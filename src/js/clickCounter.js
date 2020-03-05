
let clickCount=0

class ClickCount {
    
    constructor() {
        this.clickCount = 0;
        this.shiaCount=0;
        this.stackCount = 0;
        this.shiaCost = 100;
        this.stackCost = 10;


    }
    countClick ()  {
        this.clickCount++;
    }

    shiaClick(){
    this.shiaClick++;
    }

    stackClick(){
        this.stackClick++;
        }



    buyShia(){
        clickCount - this.shiaCost 
        if(this._clickCount < this.shiaCost){
            this._clickCount =0;
        }
        else(this.clickCount>this.shiaCost){
            this.shiaClick++;
        }
    }

    buyStack(){
        clickCount - this.stackCost 
        if(this._clickCount < this.stackCost){
            this._clickCount=0;
        }
        else(this.clickCount>this.stackCost){
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