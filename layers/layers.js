var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoDBPositron_1 = new ol.layer.Tile({
            'title': 'CartoDB Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_HobokenBikeLanes_2 = new ol.format.GeoJSON();
var features_HobokenBikeLanes_2 = format_HobokenBikeLanes_2.readFeatures(json_HobokenBikeLanes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HobokenBikeLanes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HobokenBikeLanes_2.addFeatures(features_HobokenBikeLanes_2);
var lyr_HobokenBikeLanes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HobokenBikeLanes_2, 
                style: style_HobokenBikeLanes_2,
                popuplayertitle: 'Hoboken Bike Lanes',
                interactive: true,
                title: '<img src="styles/legend/HobokenBikeLanes_2.png" /> Hoboken Bike Lanes'
            });
var format_JerseyCityBikeLanes_3 = new ol.format.GeoJSON();
var features_JerseyCityBikeLanes_3 = format_JerseyCityBikeLanes_3.readFeatures(json_JerseyCityBikeLanes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JerseyCityBikeLanes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JerseyCityBikeLanes_3.addFeatures(features_JerseyCityBikeLanes_3);
var lyr_JerseyCityBikeLanes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JerseyCityBikeLanes_3, 
                style: style_JerseyCityBikeLanes_3,
                popuplayertitle: 'Jersey City Bike Lanes',
                interactive: true,
    title: 'Jersey City Bike Lanes<br />\
    <img src="styles/legend/JerseyCityBikeLanes_3_0.png" /> BIKE LANE<br />\
    <img src="styles/legend/JerseyCityBikeLanes_3_1.png" /> PROTECTED BIKE LANE<br />\
    <img src="styles/legend/JerseyCityBikeLanes_3_2.png" /> SHARED USE LANE<br />\
    <img src="styles/legend/JerseyCityBikeLanes_3_3.png" /> SHARED USE PATH<br />\
    <img src="styles/legend/JerseyCityBikeLanes_3_4.png" /> <br />' });
var format_HobokenProtectedOffroad_4 = new ol.format.GeoJSON();
var features_HobokenProtectedOffroad_4 = format_HobokenProtectedOffroad_4.readFeatures(json_HobokenProtectedOffroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HobokenProtectedOffroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HobokenProtectedOffroad_4.addFeatures(features_HobokenProtectedOffroad_4);
var lyr_HobokenProtectedOffroad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HobokenProtectedOffroad_4, 
                style: style_HobokenProtectedOffroad_4,
                popuplayertitle: 'Hoboken Protected & Off-road',
                interactive: true,
    title: 'Hoboken Protected & Off-road<br />\
    <img src="styles/legend/HobokenProtectedOffroad_4_0.png" /> Off-Street Bike Path<br />\
    <img src="styles/legend/HobokenProtectedOffroad_4_1.png" /> Protected Bike Lane<br />\
    <img src="styles/legend/HobokenProtectedOffroad_4_2.png" /> Waterfront Walkway<br />\
    <img src="styles/legend/HobokenProtectedOffroad_4_3.png" /> <br />' });
var format_NYCBikeRoutes_5 = new ol.format.GeoJSON();
var features_NYCBikeRoutes_5 = format_NYCBikeRoutes_5.readFeatures(json_NYCBikeRoutes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NYCBikeRoutes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYCBikeRoutes_5.addFeatures(features_NYCBikeRoutes_5);
var lyr_NYCBikeRoutes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NYCBikeRoutes_5, 
                style: style_NYCBikeRoutes_5,
                popuplayertitle: 'NYC Bike Routes',
                interactive: true,
    title: 'NYC Bike Routes<br />\
    <img src="styles/legend/NYCBikeRoutes_5_0.png" /> Protected<br />\
    <img src="styles/legend/NYCBikeRoutes_5_1.png" /> Conventional<br />\
    <img src="styles/legend/NYCBikeRoutes_5_2.png" /> Shared Lane / Signed Route<br />\
    <img src="styles/legend/NYCBikeRoutes_5_3.png" /> Link<br />\
    <img src="styles/legend/NYCBikeRoutes_5_4.png" /> <br />' });

        var lyr_Labels_6 = new ol.layer.Tile({
            'title': 'Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_CartoDBPositron_1.setVisible(true);lyr_HobokenBikeLanes_2.setVisible(true);lyr_JerseyCityBikeLanes_3.setVisible(true);lyr_HobokenProtectedOffroad_4.setVisible(true);lyr_NYCBikeRoutes_5.setVisible(true);lyr_Labels_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CartoDBPositron_1,lyr_HobokenBikeLanes_2,lyr_JerseyCityBikeLanes_3,lyr_HobokenProtectedOffroad_4,lyr_NYCBikeRoutes_5,lyr_Labels_6];
lyr_HobokenBikeLanes_2.set('fieldAliases', {'FID': 'FID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', 'Jurisdctn': 'Jurisdctn', 'Dir': 'Dir', 'Cnty_Rte': 'Cnty_Rte', 'Crb2CrbWdt': 'Crb2CrbWdt', 'ROWwidth': 'ROWwidth', 'BlckLngth': 'BlckLngth', 'Bike_Lane': 'Bike_Lane', 'StBegin': 'StBegin', 'StEnd': 'StEnd', 'F2013_Grade': 'F2013_Grade', 'F2019_TAP': 'F2019_TAP', 'INSTALL_MO': 'INSTALL_MO', 'INSTALL_YR': 'INSTALL_YR', 'RESTRIPE_M': 'RESTRIPE_M', 'RESTRIPE_Y': 'RESTRIPE_Y', 'F2012': 'F2012', 'F2013': 'F2013', 'F2014': 'F2014', 'F2015': 'F2015', 'F2016': 'F2016', 'F2017': 'F2017', 'F2018': 'F2018', 'F2019': 'F2019', 'F2020': 'F2020', 'BUFFER': 'BUFFER', 'F2021': 'F2021', 'Shape__Length': 'Shape__Length', });
lyr_JerseyCityBikeLanes_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'type': 'type', 'from': 'from', '_to': '_to', 'direction': 'direction', 'ward': 'ward', 'shape_leng': 'shape_leng', 'street_nam': 'street_nam', 'lane_count': 'lane_count', 'miles': 'miles', });
lyr_HobokenProtectedOffroad_4.set('fieldAliases', {'FID': 'FID', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', 'Jurisdctn': 'Jurisdctn', 'Dir': 'Dir', 'Cnty_Rte': 'Cnty_Rte', 'Crb2CrbWdt': 'Crb2CrbWdt', 'ROWwidth': 'ROWwidth', 'BlckLngth': 'BlckLngth', 'Bike_Lane': 'Bike_Lane', 'F2019_TAP': 'F2019_TAP', 'INSTALL_MO': 'INSTALL_MO', 'INSTALL_YR': 'INSTALL_YR', 'RESTRIPE_M': 'RESTRIPE_M', 'RESTRIPE_Y': 'RESTRIPE_Y', 'F2012': 'F2012', 'F2013': 'F2013', 'F2014': 'F2014', 'F2015': 'F2015', 'F2016': 'F2016', 'F2017': 'F2017', 'F2018': 'F2018', 'F2019': 'F2019', 'F2020': 'F2020', 'TYPE': 'TYPE', 'Shape__Length': 'Shape__Length', });
lyr_NYCBikeRoutes_5.set('fieldAliases', {':id': ':id', ':version': ':version', ':created_at': ':created_at', ':updated_at': ':updated_at', 'segmentid': 'segmentid', 'bikeid': 'bikeid', 'prevbikeid': 'prevbikeid', 'status': 'status', 'boro': 'boro', 'street': 'street', 'fromstreet': 'fromstreet', 'tostreet': 'tostreet', 'onoffst': 'onoffst', 'facilitycl': 'facilitycl', 'allclasses': 'allclasses', 'bikedir': 'bikedir', 'lanecount': 'lanecount', 'ft_facilit': 'ft_facilit', 'tf_facilit': 'tf_facilit', 'ft2facilit': 'ft2facilit', 'tf2facilit': 'tf2facilit', 'instdate': 'instdate', 'ret_date': 'ret_date', 'grnwy': 'grnwy', 'gwsystem': 'gwsystem', 'gwsys2': 'gwsys2', 'spur': 'spur', 'gwyjuris': 'gwyjuris', });
lyr_HobokenBikeLanes_2.set('fieldImages', {'FID': 'Range', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'LINEARID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RTTYP': 'TextEdit', 'MTFCC': 'TextEdit', 'Jurisdctn': 'TextEdit', 'Dir': 'TextEdit', 'Cnty_Rte': 'Range', 'Crb2CrbWdt': 'Range', 'ROWwidth': 'Range', 'BlckLngth': 'TextEdit', 'Bike_Lane': 'TextEdit', 'StBegin': 'TextEdit', 'StEnd': 'TextEdit', 'F2013_Grade': 'Range', 'F2019_TAP': 'TextEdit', 'INSTALL_MO': 'TextEdit', 'INSTALL_YR': 'TextEdit', 'RESTRIPE_M': 'TextEdit', 'RESTRIPE_Y': 'TextEdit', 'F2012': 'TextEdit', 'F2013': 'TextEdit', 'F2014': 'TextEdit', 'F2015': 'TextEdit', 'F2016': 'TextEdit', 'F2017': 'TextEdit', 'F2018': 'TextEdit', 'F2019': 'TextEdit', 'F2020': 'TextEdit', 'BUFFER': 'TextEdit', 'F2021': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_JerseyCityBikeLanes_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'type': 'TextEdit', 'from': 'TextEdit', '_to': 'TextEdit', 'direction': 'TextEdit', 'ward': 'TextEdit', 'shape_leng': 'TextEdit', 'street_nam': 'TextEdit', 'lane_count': 'TextEdit', 'miles': 'TextEdit', });
lyr_HobokenProtectedOffroad_4.set('fieldImages', {'FID': 'Range', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'LINEARID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RTTYP': 'TextEdit', 'MTFCC': 'TextEdit', 'Jurisdctn': 'TextEdit', 'Dir': 'TextEdit', 'Cnty_Rte': 'Range', 'Crb2CrbWdt': 'Range', 'ROWwidth': 'Range', 'BlckLngth': 'TextEdit', 'Bike_Lane': 'TextEdit', 'F2019_TAP': 'TextEdit', 'INSTALL_MO': 'TextEdit', 'INSTALL_YR': 'TextEdit', 'RESTRIPE_M': 'TextEdit', 'RESTRIPE_Y': 'TextEdit', 'F2012': 'TextEdit', 'F2013': 'TextEdit', 'F2014': 'TextEdit', 'F2015': 'TextEdit', 'F2016': 'TextEdit', 'F2017': 'TextEdit', 'F2018': 'TextEdit', 'F2019': 'TextEdit', 'F2020': 'TextEdit', 'TYPE': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_NYCBikeRoutes_5.set('fieldImages', {':id': 'TextEdit', ':version': 'TextEdit', ':created_at': 'DateTime', ':updated_at': 'DateTime', 'segmentid': 'TextEdit', 'bikeid': 'TextEdit', 'prevbikeid': 'TextEdit', 'status': 'TextEdit', 'boro': 'TextEdit', 'street': 'TextEdit', 'fromstreet': 'TextEdit', 'tostreet': 'TextEdit', 'onoffst': 'TextEdit', 'facilitycl': 'TextEdit', 'allclasses': 'TextEdit', 'bikedir': 'TextEdit', 'lanecount': 'TextEdit', 'ft_facilit': 'TextEdit', 'tf_facilit': 'TextEdit', 'ft2facilit': 'TextEdit', 'tf2facilit': 'TextEdit', 'instdate': 'DateTime', 'ret_date': 'DateTime', 'grnwy': 'TextEdit', 'gwsystem': 'TextEdit', 'gwsys2': 'TextEdit', 'spur': 'TextEdit', 'gwyjuris': 'TextEdit', });
lyr_HobokenBikeLanes_2.set('fieldLabels', {'FID': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'LINEARID': 'hidden field', 'FULLNAME': 'header label - visible with data', 'RTTYP': 'hidden field', 'MTFCC': 'hidden field', 'Jurisdctn': 'hidden field', 'Dir': 'hidden field', 'Cnty_Rte': 'hidden field', 'Crb2CrbWdt': 'hidden field', 'ROWwidth': 'hidden field', 'BlckLngth': 'hidden field', 'Bike_Lane': 'inline label - visible with data', 'StBegin': 'hidden field', 'StEnd': 'hidden field', 'F2013_Grade': 'hidden field', 'F2019_TAP': 'hidden field', 'INSTALL_MO': 'hidden field', 'INSTALL_YR': 'hidden field', 'RESTRIPE_M': 'hidden field', 'RESTRIPE_Y': 'hidden field', 'F2012': 'hidden field', 'F2013': 'hidden field', 'F2014': 'hidden field', 'F2015': 'hidden field', 'F2016': 'hidden field', 'F2017': 'hidden field', 'F2018': 'hidden field', 'F2019': 'hidden field', 'F2020': 'hidden field', 'BUFFER': 'hidden field', 'F2021': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_JerseyCityBikeLanes_3.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'type': 'header label - visible with data', 'from': 'hidden field', '_to': 'hidden field', 'direction': 'hidden field', 'ward': 'hidden field', 'shape_leng': 'hidden field', 'street_nam': 'inline label - visible with data', 'lane_count': 'hidden field', 'miles': 'hidden field', });
lyr_HobokenProtectedOffroad_4.set('fieldLabels', {'FID': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'LINEARID': 'hidden field', 'FULLNAME': 'header label - visible with data', 'RTTYP': 'hidden field', 'MTFCC': 'hidden field', 'Jurisdctn': 'hidden field', 'Dir': 'hidden field', 'Cnty_Rte': 'hidden field', 'Crb2CrbWdt': 'hidden field', 'ROWwidth': 'hidden field', 'BlckLngth': 'hidden field', 'Bike_Lane': 'inline label - visible with data', 'F2019_TAP': 'hidden field', 'INSTALL_MO': 'hidden field', 'INSTALL_YR': 'hidden field', 'RESTRIPE_M': 'hidden field', 'RESTRIPE_Y': 'hidden field', 'F2012': 'hidden field', 'F2013': 'hidden field', 'F2014': 'hidden field', 'F2015': 'hidden field', 'F2016': 'hidden field', 'F2017': 'hidden field', 'F2018': 'hidden field', 'F2019': 'hidden field', 'F2020': 'hidden field', 'TYPE': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_NYCBikeRoutes_5.set('fieldLabels', {':id': 'hidden field', ':version': 'hidden field', ':created_at': 'hidden field', ':updated_at': 'hidden field', 'segmentid': 'hidden field', 'bikeid': 'hidden field', 'prevbikeid': 'hidden field', 'status': 'hidden field', 'boro': 'hidden field', 'street': 'header label - visible with data', 'fromstreet': 'hidden field', 'tostreet': 'hidden field', 'onoffst': 'hidden field', 'facilitycl': 'inline label - visible with data', 'allclasses': 'hidden field', 'bikedir': 'hidden field', 'lanecount': 'hidden field', 'ft_facilit': 'hidden field', 'tf_facilit': 'hidden field', 'ft2facilit': 'hidden field', 'tf2facilit': 'hidden field', 'instdate': 'hidden field', 'ret_date': 'hidden field', 'grnwy': 'hidden field', 'gwsystem': 'hidden field', 'gwsys2': 'hidden field', 'spur': 'hidden field', 'gwyjuris': 'hidden field', });
lyr_NYCBikeRoutes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});