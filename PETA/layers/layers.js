var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_atributpeta_0 = new ol.format.GeoJSON();
var features_atributpeta_0 = format_atributpeta_0.readFeatures(json_atributpeta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atributpeta_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_atributpeta_0.addFeatures(features_atributpeta_0);var lyr_atributpeta_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_atributpeta_0, 
                style: style_atributpeta_0,
    title: 'atributpeta<br />\
    <img src="styles/legend/atributpeta_0_0.png" />  39311 - 67266 <br />\
    <img src="styles/legend/atributpeta_0_1.png" />  67266 - 95222 <br />\
    <img src="styles/legend/atributpeta_0_2.png" />  95222 - 123177 <br />\
    <img src="styles/legend/atributpeta_0_3.png" />  123177 - 151133 <br />\
    <img src="styles/legend/atributpeta_0_4.png" />  151133 - 179088 <br />'
        });

lyr_atributpeta_0.setVisible(true);
var layersList = [baseLayer,lyr_atributpeta_0];
lyr_atributpeta_0.set('fieldAliases', {'id': 'id', 'kecamatan': 'kecamatan', 'kodepos': 'kodepos', 'jml pnddk': 'jml pnddk', });
lyr_atributpeta_0.set('fieldImages', {'id': 'TextEdit', 'kecamatan': 'TextEdit', 'kodepos': 'TextEdit', 'jml pnddk': 'TextEdit', });
lyr_atributpeta_0.set('fieldLabels', {'id': 'no label', 'kecamatan': 'no label', 'kodepos': 'no label', 'jml pnddk': 'no label', });
lyr_atributpeta_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});