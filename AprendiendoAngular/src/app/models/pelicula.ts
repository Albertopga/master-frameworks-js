export class Pelicula {
    // manera antigua de definir clases
    /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title: string, year: number, image: string) {
        this.title = title;
        this.year = year;
        this.image = image;
    }
    */
    //   así se hace más rápido 
    constructor(
        public title: string,
        public year: number,
        public image: string,
    ) { }
}