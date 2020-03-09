


class ClickCounter {



//      clickCount=0
//  shiaCount=0
//  stackCount=0




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
            clickShiaButton.disabled = false;
            this._clickCount -= 100;
            this.shiaCount++;
        }
        else()=>{
            clickShiaButton.disabled = true;
        };

    }


    shiaCost(){
        if(this.clickCount >= this.shiaCost){
            this.clickCount = this.clickCount - this.shiaCost;
            this.shiaCost +=Math.floor(this.shiaCost*.20);
        }
    
    }


     buyStack(){
        if(this.clickCount >= this.stackCost){
            this.clickCount -= 10;
            this.stackCount++;
        }

    
    }


    stackCost(){
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

    getStackCount(){
        return 0;
    }

    reset(){
        this._clickCount = 0;
        this._shiaCount = 0;
        this._stackCount = 0;
        updateClickCountersDisplays();
    }
}

     

