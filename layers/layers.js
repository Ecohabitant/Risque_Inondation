var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MauricieRegion_Lineas_1 = new ol.format.GeoJSON();
var features_MauricieRegion_Lineas_1 = format_MauricieRegion_Lineas_1.readFeatures(json_MauricieRegion_Lineas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MauricieRegion_Lineas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MauricieRegion_Lineas_1.addFeatures(features_MauricieRegion_Lineas_1);
var lyr_MauricieRegion_Lineas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MauricieRegion_Lineas_1, 
                style: style_MauricieRegion_Lineas_1,
                popuplayertitle: 'MauricieRegion_Lineas',
                interactive: false,
                title: '<img src="styles/legend/MauricieRegion_Lineas_1.png" /> MauricieRegion_Lineas'
            });
var format_Zone_Risque_Inondation_S_2 = new ol.format.GeoJSON();
var features_Zone_Risque_Inondation_S_2 = format_Zone_Risque_Inondation_S_2.readFeatures(json_Zone_Risque_Inondation_S_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_Risque_Inondation_S_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_Risque_Inondation_S_2.addFeatures(features_Zone_Risque_Inondation_S_2);
var lyr_Zone_Risque_Inondation_S_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_Risque_Inondation_S_2, 
                style: style_Zone_Risque_Inondation_S_2,
                popuplayertitle: 'Zone_Risque_Inondation_S',
                interactive: true,
                title: '<img src="styles/legend/Zone_Risque_Inondation_S_2.png" /> Zone_Risque_Inondation_S'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MauricieRegion_Lineas_1.setVisible(true);lyr_Zone_Risque_Inondation_S_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MauricieRegion_Lineas_1,lyr_Zone_Risque_Inondation_S_2];
lyr_MauricieRegion_Lineas_1.set('fieldAliases', {'RES_NO_IND': 'RES_NO_IND', 'RES_DE_IND': 'RES_DE_IND', 'RES_CO_REG': 'RES_CO_REG', 'RES_NM_REG': 'RES_NM_REG', 'RES_CO_REF': 'RES_CO_REF', 'RES_CO_VER': 'RES_CO_VER', });
lyr_Zone_Risque_Inondation_S_2.set('fieldAliases', {'Descriptio': 'Descriptio', 'Nm_rapport': 'Nm_rapport', });
lyr_MauricieRegion_Lineas_1.set('fieldImages', {'RES_NO_IND': 'TextEdit', 'RES_DE_IND': 'TextEdit', 'RES_CO_REG': 'TextEdit', 'RES_NM_REG': 'TextEdit', 'RES_CO_REF': 'TextEdit', 'RES_CO_VER': 'TextEdit', });
lyr_Zone_Risque_Inondation_S_2.set('fieldImages', {'Descriptio': 'TextEdit', 'Nm_rapport': 'TextEdit', });
lyr_MauricieRegion_Lineas_1.set('fieldLabels', {'RES_NO_IND': 'no label', 'RES_DE_IND': 'no label', 'RES_CO_REG': 'no label', 'RES_NM_REG': 'no label', 'RES_CO_REF': 'no label', 'RES_CO_VER': 'no label', });
lyr_Zone_Risque_Inondation_S_2.set('fieldLabels', {'Descriptio': 'no label', 'Nm_rapport': 'no label', });
lyr_Zone_Risque_Inondation_S_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});