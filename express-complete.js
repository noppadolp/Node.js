const express= require('express');
const body_parser = require('body-parser');
const app = express();

const sensor_data = {
    "0": {
        "name" : "RTD",
        "value" : 700,
        "unit" : "*C"
    },
    "1" :{
        "name" : "Flow transducer",
        "value" : 205,
        "unit"  : "m^3/h"
    }
};

app.use(body_parser());
app.set("views", "views-ejs");
app.set('view engine','ejs');

app.get('/',function(req, res){
    res.render('index');
});

app.get('/device', function(req, res){
    const sensor_id = req.query.sensor_id;
    if(sensor_id in sensor_data == false) {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end("404 Device not found!");
    }
    else{
        const sensor_name = sensor_data[sensor_id].name;
        const sensor_value = sensor_data[sensor_id].value;
        const sensor_unit = sensor_data[sensor_id].unit;
        res.render('device',
        {name: sensor_name, value: sensor_value, unit: sensor_unit},
        );
    }
})

app.post('/create_device', function(req, res){
        const new_id = req.body.new_id;
        const new_name = req.body.new_name;
        const new_value = req.body.new_value;
        const new_unit = req.body.new_unit;
        
        sensor_data[new_id] = {  // Create new data, update database
            "name" : new_name,
            "value" : new_value,
            "unit" : new_unit
        };
        
        res.render('device',
        {name: new_name, value: new_value, unit: new_unit},
        );
});


app.listen(8080,function(){
    console.log('Express get query example');
});
