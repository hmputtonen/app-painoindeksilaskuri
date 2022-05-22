import { AppComponent } from "./app.component";


describe("Perustoiminnallisuus", () => {

    const app = new AppComponent();

    it("käynnistyy", () => {

        expect(app).toBeTruthy();

    });

    /*
    it("laskee painoindeksin, kun syöttöarvot ovat oikein", () => {

        app.virhe = "";
        app.paino = 100;
        app.pituus = 230;
        app.painoindeksi = undefined;
        app.laskePainoindeksi();


        expect(app.paino).toBeLessThanOrEqual(230);
        expect(app.paino).toBeGreaterThanOrEqual(30);
        expect(app.pituus).toBeLessThanOrEqual(230);
        expect(app.pituus).toBeGreaterThanOrEqual(100);

        expect(app.painoindeksi).toBeTruthy();

    });
    

    for(let i = 100 ; i <= 230 ; i++){
    it(`laskee painoindeksin, kun syötetty pituus on ${i} `, () => {

        app.virhe = "";
        app.paino = 100;
        app.pituus= i;
        app.painoindeksi = undefined;
        app.laskePainoindeksi();

        expect(app.painoindeksi).toBeTruthy();


    });
}

    for(let i = 30 ; i <= 230 ; i++){
        it(`laskee painoindeksin, kun syötetty paino on ${i} `, () => {

            app.virhe = "";
            app.paino = i;
            app.pituus= 100;
            app.painoindeksi = undefined;
            app.laskePainoindeksi();

            expect(app.painoindeksi).toBeTruthy();


        });
    }
*/
        it("näyttää virheen epäsopivilla syötteillä", () => {

        app.virhe = "";
        app.paino = 240;
        app.pituus = 90;
        app.laskePainoindeksi();
        
        expect(app.painoindeksi).not.toBeTruthy();
        expect(app.virhe).toContain(`Syöttötiedoissa virhe. Käytä ainoastaan numeerisia arvoja väliltä`);

    });

});