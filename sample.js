let map;
let infowindow1;
let infowindow2;
let infowindow3;

function initialize() {
  // 最初の表示位置を設定する
  const latlng = new google.maps.LatLng(35.66730952009043, 139.69132466530615);
  const opts = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  // マーカー1を設置
  const m_latlng1 = new google.maps.LatLng(35.66730952009043, 139.69132466530615);
  marker1 = new google.maps.Marker({
    position: m_latlng1,
    map: map
  });

  // マーカー2を設置
  const m_latlng2 = new google.maps.LatLng(35.66892897138947, 139.6905787878878);
  marker2 = new google.maps.Marker({
    position: m_latlng2,
    map: map
  });

  // マーカー3を設置
  const m_latlng3 = new google.maps.LatLng(35.66708920605387, 139.69117821560377);
  marker3 = new google.maps.Marker({
    position: m_latlng3,
    map: map,
  });

  infowindow1 = new google.maps.InfoWindow({
    content: 'エッグタルトはサクサク♪',
    position: m_latlng1,
  });

  infowindow2 = new google.maps.InfoWindow({
    content: 'ティラミスはふわっふわ♪',
    position: m_latlng2,
  });

  infowindow3 = new google.maps.InfoWindow({
    content: 'コーヒーでホット一息♪',
    position: m_latlng3,
  });

  infowindow1.open(map);
  infowindow2.open(map);
  infowindow3.open(map);

  // マーカーを任意の地図に設定するにはsetMapメソッドを使ってもOK
  // marker1.setMap(map);
  // marker2.setMap(map);
  // marker3.setMap(map);
}

function clearInfoWindow() {
  infowindow1.close(map);
  infowindow2.close(map);
  infowindow3.close(map);
}

// マーカー１に遷移
function toNataDeCristiano() {
  map.panTo(new google.maps.LatLng(35.66730952009043, 139.69132466530615));
  clearInfoWindow();
  infowindow1.open(map);
}

// マーカー2に遷移
function toIlChianti() {
  map.panTo(new google.maps.LatLng(35.66892897138947, 139.6905787878878));
  clearInfoWindow();
  infowindow2.open(map);
}

// マーカー3に遷移
function toMameTora() {
  map.panTo(new google.maps.LatLng(35.66708920605387, 139.69117821560377));
  clearInfoWindow();
  infowindow3.open(map);
}
