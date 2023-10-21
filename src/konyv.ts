export class Konyv{
    constructor(public cim:string, public rating:number){
        if (rating <1 || rating>10) {
            throw new Error("Az értékelésnek 1 és 10 közötti számnak kell lennie");
        }
    }
    public ToString() {
        return "Könyv címe: "+this.cim+" Értékelés: "+this.rating;
    }
   
}