describe("Paciente", function(){

    it("Deve calcular o imc", function(){
        var gilson = new Paciente("Gilson", 24, 80, 1.77);

        expect(gilson.imc()).toEqual(80 / (1.77 * 1.77));
    });
    
    it("Deve calcular os batimentos", function(){
        var gilson = new Paciente("Gilson", 24, 80, 1.77);

        expect(gilson.batimentos()).toEqual(1009152000);
    });
});