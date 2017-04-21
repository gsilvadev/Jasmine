function Agendamento(){

    var clazz = {
        para : function(consulta){
            var umDiaEmMilliSegundos = 24 * 60 * 60 * 1000;
            var vinteDiasDepoisEmMilliSegundos =  umDiaEmMilliSegundos * 20;
            
            var novaData = new Date(consulta.getData().getTime() + vinteDiasDepoisEmMilliSegundos);

            while(novaData.getDay() == 0 || novaData.getDay() == 7) {
                novaData = new Date(novaData.getTime() + umDiaEmMilliSegundos);
            }

            return new Consulta(consulta.getPaciente(), 
                                consulta.getProcedimentos(),
                                consulta.isPerticular(),
                                consulta.isRetorno(),
                                novaData);
        }
    }
    return clazz;
}