AOS.init();

const dataDoEvento = new Date("May 17,2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval ( function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMS = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOevento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOevento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMS);

    document.getElementById ('contador').innerHTML = `O maior evento de tecnologia do Brasil começa em ${diasAteOEvento}d ${horasAteOevento}h ${minutosAteOEvento}m ${segundosAteOevento}s`;

    if (diasAteOEvento == 0 && horasAteOevento <= 24 && horasAteOevento > 0) {
        document.getElementById('contador').innerHTML = ` É Hoje!!! faltam ${horasAteOevento}h  ${minutosAteOEvento}m e ${segundosAteOevento}s`};

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML= 'Evento Expirado'
    }

},1000);