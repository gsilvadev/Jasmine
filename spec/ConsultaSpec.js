describe("Consulta", function(){
    var gilson;

    beforeEach(function(){
        gilson = new PacienteBuilder().build();
    });

    describe("Tipo de consulta pública", function(){
        it("Deve mostrar consula de retorno", function(){
            var consulta = new Consulta(gilson, ["proc1", "proc2", "proc3"], false, true, new Date(2017, 6, 1));

            expect(consulta.preco()).toEqual(0);
        });

        it("Deve calcular o preço para procedimentos comuns", function(){
            var consulta = new Consulta(gilson, ["proc1", "proc2", "proc3"], false, false, new Date(2017, 6, 1));

            expect(consulta.preco()).toEqual(75);
        });
    });

    describe("Tipo de consulta particular", function(){
        it("Deve calcular o preço para procedimentos comuns particulares", function(){
            var consulta = new Consulta(gilson, ["proc1", "proc2", "proc3"], true, false, new Date(2017, 6, 1));

            expect(consulta.preco()).toEqual(150);
        });

        it("Deve calcular o preço para procedimentos especiais particulares", function(){
            var consulta = new Consulta(gilson, ["raio-x"], true, false, new Date(2017, 6, 1));

            expect(consulta.preco()).toEqual(55*2);
        });
    });
});