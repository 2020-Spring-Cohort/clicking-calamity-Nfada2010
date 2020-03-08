


class ClickCounter {
     clickCount=0
 shiaCount=0
 stackCount=0


    constructor() {
        this.clickCount = 0;
        this.shiaCount=0;
        this.stackCount = 0;
        this.shiaCost = 100;
        this.stackCost = 10;
        var i = 0
        var q = 0
        var s = 0

    }

    

     buyShia(){
        if(this._clickCount>=this.shiaCost){
            this._clickCount -= 100;
            this.shiaCount++;
        }


        // clickCount - this.shiaCost 
        // if(this._clickCount < this.shiaCost){
        //     this._clickCount =0;
        // }
        // else(this.clickCount>this.shiaCost);{
        //    this._clickCount - this.shiaCost;
        //     this.shiaClick++;
        // }
    }


    shiaCost(){
        this.shiaCost=100;
        if(this.clickCount >= this.shiaCost){
            this.clickCount = this.clickCount - this.shiaCost;
            this.shiaCost +=Math.floor(this.shiaCost*.10);
        }
    }


     buyStack(){
        if(this._clickCount >= this._stackCost){
            this._clickCount -= 10;
            this._stackCount++;
        }

        // clickCount - this.stackCost 
        // if(this._clickCount < this.stackCost){
        //     this._clickCount=0;
        // }
        // else(this.clickCount>this.stackCost);{
        //     this.stackClick++;
        // }
    }


    stackCost(){
        this.stackCost = 10;
        if(this.clickCount >= this.stackCost){
            this.clickCount = this.clickCount - this.stackCost;
            this.stackCost +=Math.floor(this.stackCost*.10);
        }
    }


    getShiaCount(){
        return 0;
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

     

