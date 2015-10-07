window.onload = function() {
    var vizjson_url = 'https://team.cartodb.com/u/aureliamoser/api/v2/viz/32a9049a-46ad-11e5-974c-0e5e07bb5d8a/viz.json'; // <-- Paste viz.json URL between quotes

    var options = {
           sql: "SELECT * FROM nyc_bikelanes",
           // cartocss: ""
       }

       var sublayers = [];

       // instantiate map object from Leaflet
       var mapObj = new L.Map(map, {  // <-- Replace map_id with your #id for rendering
           center: [40.714249, -73.957407], // New York
           zoom: 11 // zoom projection to adjust starting point zoom
       });


       // add basemap tiles
       L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(mapObj);

       // add data tile layers here (if you have multiple layers, you can manipulate them in js here)
       cartodb.createLayer(mapObj,vizjson_url)
           .addTo(mapObj)
           .done(function(layer) {
               console.log("Map successfully created.");
               sublayers[0] = layer.getSubLayer(0);
               sublayers[0].set(options); // altering the SQL and CartoCSS; see above
           })
           .error(function(err) {
               console.log("Map not created: " + err);
           });
    }