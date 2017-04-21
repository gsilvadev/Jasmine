function MaiorEMenor (){
    var maior;
    var menor;

    var clazz = {
        encontra : function(nums){
            maior = Number.MIN_VALUE;
            menor = Number.MAX_VALUE;

            nums.forEach(function(num){
                if(num > maior) maior = num;
                if(num < menor) menor = num;
            });
        },
        pegaMaior : function(){return maior;},
        pegaMenor : function(){return menor;}
    }
    return clazz;
}