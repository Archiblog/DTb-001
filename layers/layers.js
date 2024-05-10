var wms_layers = [];

var format_AllareasKmltoshapefile_0 = new ol.format.GeoJSON();
var features_AllareasKmltoshapefile_0 = format_AllareasKmltoshapefile_0.readFeatures(json_AllareasKmltoshapefile_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllareasKmltoshapefile_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllareasKmltoshapefile_0.addFeatures(features_AllareasKmltoshapefile_0);
var lyr_AllareasKmltoshapefile_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllareasKmltoshapefile_0, 
                style: style_AllareasKmltoshapefile_0,
                popuplayertitle: "All areas - Kml to shape file",
                interactive: true,
                title: '<img src="styles/legend/AllareasKmltoshapefile_0.png" /> All areas - Kml to shape file'
            });
var format_DTbserviceroads_1 = new ol.format.GeoJSON();
var features_DTbserviceroads_1 = format_DTbserviceroads_1.readFeatures(json_DTbserviceroads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DTbserviceroads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DTbserviceroads_1.addFeatures(features_DTbserviceroads_1);
var lyr_DTbserviceroads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DTbserviceroads_1, 
                style: style_DTbserviceroads_1,
                popuplayertitle: "DTb service roads",
                interactive: true,
                title: '<img src="styles/legend/DTbserviceroads_1.png" /> DTb service roads'
            });

        var lyr_OpenRailWayMapStandard_2 = new ol.layer.Tile({
            'title': 'OpenRailWayMap - Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png'
            })
        });
var format_DTbservicerailways_3 = new ol.format.GeoJSON();
var features_DTbservicerailways_3 = format_DTbservicerailways_3.readFeatures(json_DTbservicerailways_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DTbservicerailways_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DTbservicerailways_3.addFeatures(features_DTbservicerailways_3);
var lyr_DTbservicerailways_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DTbservicerailways_3, 
                style: style_DTbservicerailways_3,
                popuplayertitle: "DTb service railways",
                interactive: true,
                title: '<img src="styles/legend/DTbservicerailways_3.png" /> DTb service railways'
            });
var format_TransferAreas_4 = new ol.format.GeoJSON();
var features_TransferAreas_4 = format_TransferAreas_4.readFeatures(json_TransferAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransferAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransferAreas_4.addFeatures(features_TransferAreas_4);
var lyr_TransferAreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransferAreas_4, 
                style: style_TransferAreas_4,
                popuplayertitle: "Transfer Areas",
                interactive: true,
                title: '<img src="styles/legend/TransferAreas_4.png" /> Transfer Areas'
            });
var format_FacultyAreas_5 = new ol.format.GeoJSON();
var features_FacultyAreas_5 = format_FacultyAreas_5.readFeatures(json_FacultyAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultyAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultyAreas_5.addFeatures(features_FacultyAreas_5);
var lyr_FacultyAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacultyAreas_5, 
                style: style_FacultyAreas_5,
                popuplayertitle: "Faculty Areas",
                interactive: true,
                title: '<img src="styles/legend/FacultyAreas_5.png" /> Faculty Areas'
            });

lyr_AllareasKmltoshapefile_0.setVisible(true);lyr_DTbserviceroads_1.setVisible(true);lyr_OpenRailWayMapStandard_2.setVisible(true);lyr_DTbservicerailways_3.setVisible(true);lyr_TransferAreas_4.setVisible(true);lyr_FacultyAreas_5.setVisible(true);
var layersList = [lyr_AllareasKmltoshapefile_0,lyr_DTbserviceroads_1,lyr_OpenRailWayMapStandard_2,lyr_DTbservicerailways_3,lyr_TransferAreas_4,lyr_FacultyAreas_5];
lyr_AllareasKmltoshapefile_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_l': 'gx_media_l', });
lyr_DTbserviceroads_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DTbservicerailways_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TransferAreas_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_l': 'gx_media_l', });
lyr_FacultyAreas_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AllareasKmltoshapefile_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'gx_media_l': 'TextEdit', });
lyr_DTbserviceroads_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_DTbservicerailways_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TransferAreas_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'gx_media_l': '', });
lyr_FacultyAreas_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_AllareasKmltoshapefile_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_l': 'no label', });
lyr_DTbserviceroads_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DTbservicerailways_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TransferAreas_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_l': 'no label', });
lyr_FacultyAreas_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FacultyAreas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});