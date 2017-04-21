describe("MaiorEMenor", function(){
    it("Deve entender números em ordem não sequencial", function(){
        var nums = [9,4,7,5,5,6,2,54,5,8,5,3];
        var maiorEMenor = new MaiorEMenor();
        maiorEMenor.encontra(nums);

        expect(maiorEMenor.pegaMaior()).toEqual(54);
        expect(maiorEMenor.pegaMenor()).toEqual(2);
    });

    it("Deve entender números em ordem decrescente", function(){
        var nums = [9,8,7,6,5,4,3];
        var maiorEMenor = new MaiorEMenor();
        maiorEMenor.encontra(nums);

        expect(maiorEMenor.pegaMaior()).toEqual(9);
        expect(maiorEMenor.pegaMenor()).toEqual(3);
    });

    it("Deve entender números em ordem crescente", function(){
        var nums = [5,6,7,8];
        var maiorEMenor = new MaiorEMenor();
        maiorEMenor.encontra(nums);

        expect(maiorEMenor.pegaMaior()).toEqual(8);
        expect(maiorEMenor.pegaMenor()).toEqual(5);
    });

    it("Deve entender uma lista de números com apenas um elemento", function(){
        var nums = [5];
        var maiorEMenor = new MaiorEMenor();
        maiorEMenor.encontra(nums);

        expect(maiorEMenor.pegaMaior()).toEqual(5);
        expect(maiorEMenor.pegaMenor()).toEqual(5);
    });
});