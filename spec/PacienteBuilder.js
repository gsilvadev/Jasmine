function PacienteBuilder(){
    var nome = "Gilson";
    var idade = 24;
    var peso = 80;
    var altura = 1.77;

    var clazz = {
        build : function(){
            return new Paciente(nome, idade, peso, altura);
        },
        comNome : function(nome){
            this.nome = nome;
            return this;
        },
        comIdade : function(idade){
             this.idade = idade;
            return this;
        },
        comPeso : function(peso){
             this.peso = peso;
            return this;
        },
        comAltura : function(altura){
             this.altura = altura;
        }
    }

    return clazz;
}