const map = () => {
	/* myMap */
ymaps.ready(init);
    let myMap,
      myPlacemark1;


    function init(){     
        myMap = new ymaps.Map("map", {
            center: [44.504216306347296,34.15167827740982],
            zoom: 17,
            controls: ['smallMapDefaultSet']
        });
        myMap.controls.add('routeEditor');
        myMap.controls
        .remove('geolocationControl')
        .remove('searchControl')
        .remove('trafficControl')
        .remove('rulerControl');
         myMap.behaviors.disable([
         	'drag',
         	'scrollZoom'	
    	 ]);

    	 var myPin = new ymaps.GeoObjectCollection({}, {
		    preset: 'islands#orangeDotIcon',
		    draggable: false 
		});

    	
        myPlacemark1 = new ymaps.Placemark([44.504216306347296,34.15167827740982], { 
        	balloonContentHeader: '<span class="map-color">Строительная компания "Оптима"</span>',
            balloonContentFooter: 'Республика Крым, г.Ялта, ул. Южнобережное шоссе, 38',
            hintContent: 'Строительная компания "Оптима"'
        });
        myPin.add(myPlacemark1);
        myMap.geoObjects.add(myPin);
    }
/* //myMap */
}
export default map;