export class Die {
    
    private value: number;
    private imageUrl: string;
     
    constructor() { 
        this.roll();
    }
     
    private roll(){
        
        this.value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        this.imageUrl = '/assets/images/side' + this.value + '.png';

    }

    public reroll(){
        this.roll();
    }

    public getValue() {
        return this.value;
    }

    public getImageUrl() {
        return this.imageUrl;
    }
}