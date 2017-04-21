describe("Agendamento", function(){
    var gilson;
    var agenda

    beforeEach(function(){
        gilson = new PacienteBuilder().build();
        agenda = new Agendamento();
    });

    it("Deve agendar consulta para vinte dias depois", function(){
        var consulta = new Consulta(gilson, ["raio-x", "gesso", "outro"], false, false, new Date(2017, 3, 1));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2017, 3, 21).toString());
    });

    it("Deve agendar consulta para vinte dias depois pulando o final de semana", function(){
        var consulta = new Consulta(gilson, ["raio-x", "gesso", "outro"], false, false, new Date(2017, 3, 3));
        var novaConsulta = agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2017, 3, 24).toString());
    });
});