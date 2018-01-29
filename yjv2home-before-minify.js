// Bing map
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        /* No need to set credentials if already passed in URL */
        /* credentials: 'Your Bing Maps Key', */
        center: new Microsoft.Maps.Location(1.296897, 103.780373),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        disableScrollWheelZoom: true,
        zoom: 18,
    });
    map.setOptions({
        minZoom: 5,
    });
    var center = map.getCenter();

    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {
        title: 'Yan Jie',
        subTitle: 'Group @ NUS',
        color:'yellow',
    });

    //Add the pushpin to the map
    map.entities.push(pin);   
    //Pushpin Hover Style
    Microsoft.Maps.Events.addHandler(pin, 'mouseover', function (e) {
        e.target.setOptions({ color: 'blue' });
    });

    Microsoft.Maps.Events.addHandler(pin, 'mousedown', function (e) {
        e.target.setOptions({ color: 'purple' });
    });

    Microsoft.Maps.Events.addHandler(pin, 'mouseout', function (e) {
        e.target.setOptions({ color: 'yellow' });
    });
}
