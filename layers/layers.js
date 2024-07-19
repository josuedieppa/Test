var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Points_1 = new ol.format.GeoJSON();
var features_Points_1 = format_Points_1.readFeatures(json_Points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_1.addFeatures(features_Points_1);
var lyr_Points_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_1, 
                style: style_Points_1,
                popuplayertitle: "Points",
                interactive: true,
    title: 'Points<br />\
    <img src="styles/legend/Points_1_0.png" /> 1<br />\
    <img src="styles/legend/Points_1_1.png" /> 2<br />\
    <img src="styles/legend/Points_1_2.png" /> 3<br />\
    <img src="styles/legend/Points_1_3.png" /> 4<br />\
    <img src="styles/legend/Points_1_4.png" /> 5<br />\
    <img src="styles/legend/Points_1_5.png" /> 6<br />\
    <img src="styles/legend/Points_1_6.png" /> 7<br />\
    <img src="styles/legend/Points_1_7.png" /> 8<br />\
    <img src="styles/legend/Points_1_8.png" /> 9<br />\
    <img src="styles/legend/Points_1_9.png" /> 10<br />\
    <img src="styles/legend/Points_1_10.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Points_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Points_1];
lyr_Points_1.set('fieldAliases', {'id': 'id', });
lyr_Points_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Points_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Points_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});