const fs = require('fs');
const ping = require('ping');
//const sleep = require('system-sleep');

function demoPing() {

    var host2 = [];
    var data = fs.readFileSync('Listado-ip.txt', 'utf8');

    if (data) {
        host2 = data.split('\r\n');

        host2.forEach(function(host) {
            ping.sys.probe(host, function(active) {
                var info = active ? 'IP ' + host + ' = Active' : 'IP ' + host + ' = Non-Active';

                clock = new Date()
                hour = clock.getHours()
                minutes = clock.getMinutes()
                seconds = clock.getSeconds()
                milisecond = clock.getMilliseconds()
                console.log(hour + ':' + minutes + ':' + seconds + ':' + milisecond + ' ' + info);
            });
        });


    } else
        console.log("error al leer archivo de texto");

}


var intervalo = setInterval(function() {

    demoPing()

}, 3000);

//var contador = 0;
// while (contador <= 2) {
//     demoPing()
//         //sleep(2 * 1000);
//     contador++;
// }