/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">

function initMap(): void {
  const fsgArlbergCoords = [
    { lng: 10.1150953, lat: 47.1317349 },
    { lng: 10.1221334, lat: 47.1258954 },
    { lng: 10.1356947, lat: 47.1240266 },
    { lng: 10.1446211, lat: 47.1171349 },
    { lng: 10.1617872, lat: 47.110476 },
    { lng: 10.1772367, lat: 47.1108265 },
    { lng: 10.1885664, lat: 47.1239098 },
    { lng: 10.2119123, lat: 47.1135135 },
    { lng: 10.2608358, lat: 47.117719 },
    { lng: 10.2970564, lat: 47.1290488 },
    { lng: 10.3550779, lat: 47.1395588 },
    { lng: 10.3696691, lat: 47.1375737 },
    { lng: 10.3969633, lat: 47.1385079 },
    { lng: 10.4227125, lat: 47.1488993 },
    { lng: 10.3991949, lat: 47.1624401 },
    { lng: 10.3717291, lat: 47.1652413 },
    { lng: 10.3494131, lat: 47.159989 },
    { lng: 10.3250372, lat: 47.1660582 },
    { lng: 10.298773, lat: 47.1597556 },
    { lng: 10.2953398, lat: 47.1555534 },
    { lng: 10.2730238, lat: 47.1506505 },
    { lng: 10.2613508, lat: 47.1390917 },
    { lng: 10.2553427, lat: 47.1495998 },
    { lng: 10.2409231, lat: 47.1595222 },
    { lng: 10.211054, lat: 47.1598723 },
    { lng: 10.2053892, lat: 47.1520514 },
    { lng: 10.1816999, lat: 47.1467978 },
    { lng: 10.168482, lat: 47.1491328 },
    { lng: 10.1425611, lat: 47.1479653 },
    { lng: 10.124365, lat: 47.142711 },
  ];

  const sondereggerCoords = [
    { lat: 46.9721664, lng: 10.1759641 },
    { lat: 46.9713172, lng: 10.1630037 },
    { lat: 46.9652551, lng: 10.1650207 },
    { lat: 46.9626777, lng: 10.167896 },
    { lat: 46.9602213, lng: 10.1915233 },
    { lat: 46.9655225, lng: 10.198776 },
    { lat: 46.9665768, lng: 10.2150838 },
    { lat: 46.9705596, lng: 10.2240102 },
    { lat: 46.9804568, lng: 10.258085 },
    { lat: 46.9832675, lng: 10.2699296 },
    { lat: 46.9893569, lng: 10.2733628 },
    { lat: 46.9997774, lng: 10.2937905 },
    { lat: 47.0031724, lng: 10.3154199 },
    { lat: 47.0257613, lng: 10.3260629 },
    { lat: 47.0347708, lng: 10.3507821 },
    { lat: 47.0410883, lng: 10.366575 },
    { lat: 47.0350048, lng: 10.364515 },
    { lat: 47.0338349, lng: 10.3816812 },
    { lat: 47.055943, lng: 10.3998773 },
    { lat: 47.0520835, lng: 10.4050271 },
    { lat: 47.0567617, lng: 10.4348962 },
    { lat: 47.0470541, lng: 10.451719 },
    { lat: 47.0616733, lng: 10.4707734 },
    { lat: 47.0870427, lng: 10.47455 },
    { lat: 47.0885621, lng: 10.4537789 },
    { lat: 47.081549, lng: 10.4161851 },
    { lat: 47.0782758, lng: 10.3664033 },
    { lat: 47.0893803, lng: 10.3404824 },
    { lat: 47.0864583, lng: 10.3300111 },
    { lat: 47.0645966, lng: 10.3377359 },
    { lat: 47.0510309, lng: 10.3267495 },
    { lat: 47.0390995, lng: 10.3056352 },
    { lat: 47.0268145, lng: 10.291044 },
    { lat: 47.0252933, lng: 10.2699296 },
    { lat: 47.0066843, lng: 10.2628915 },
    { lat: 46.993338, lng: 10.2328508 },
    { lat: 46.999192, lng: 10.2289025 },
    { lat: 46.9857268, lng: 10.2110498 },
    { lat: 46.9810424, lng: 10.1935403 },
    { lat: 46.973078, lng: 10.18633 },
  ];

  const mbsMontafonCoords = [
    { lat: 47.1174463, lng: 9.8596179 },
    { lat: 47.1000361, lng: 9.8418537 },
    { lat: 47.0884682, lng: 9.8476016 },
    { lat: 47.0835591, lng: 9.876784 },
    { lat: 47.0750255, lng: 9.8956668 },
    { lat: 47.0600591, lng: 9.8812472 },
    { lat: 47.0531591, lng: 9.8937785 },
    { lat: 47.0556152, lng: 9.9126612 },
    { lat: 47.0648535, lng: 9.9215876 },
    { lat: 47.0574864, lng: 9.9336039 },
    { lat: 47.0419302, lng: 9.9373805 },
    { lat: 47.0274226, lng: 9.9464785 },
    { lat: 47.0304648, lng: 9.962958 },
    { lat: 47.0689459, lng: 9.9322306 },
    { lat: 47.0694136, lng: 9.9456202 },
    { lat: 47.0779481, lng: 9.9464785 },
    { lat: 47.0806368, lng: 9.9270808 },
    { lat: 47.0889357, lng: 9.9346339 },
    { lat: 47.0945456, lng: 9.9481951 },
    { lat: 47.0954805, lng: 9.9651896 },
    { lat: 47.0899876, lng: 9.9900805 },
    { lat: 47.0961817, lng: 9.9909388 },
    { lat: 47.1033098, lng: 9.9943721 },
    { lat: 47.1084508, lng: 10.006045 },
    { lat: 47.112423, lng: 9.985789 },
    { lat: 47.1085676, lng: 9.9698245 },
    { lat: 47.1062308, lng: 9.974116 },
    { lat: 47.1016739, lng: 9.9679362 },
    { lat: 47.1016739, lng: 9.9641597 },
    { lat: 47.106815, lng: 9.9590098 },
    { lat: 47.1047119, lng: 9.9524867 },
    { lat: 47.1010896, lng: 9.9401271 },
    { lat: 47.1043614, lng: 9.932059 },
    { lat: 47.096766, lng: 9.9039065 },
    { lat: 47.0987526, lng: 9.8862254 },
    { lat: 47.1019076, lng: 9.878329 },
    { lat: 47.1105537, lng: 9.8735224 },
    { lat: 47.1139417, lng: 9.8745524 },
    { lat: 47.1155772, lng: 9.8663127 },
    { lat: 47.118264, lng: 9.862707 },
  ];

  const ewerkeCoords = [
    { lat: 47.22741, lng: 9.6171437 },
    { lat: 47.22725, lng: 9.6112859 },
    { lat: 47.2304338, lng: 9.6008897 },
    { lat: 47.2301022, lng: 9.5883101 },
    { lat: 47.2227089, lng: 9.5891443 },
    { lat: 47.2227717, lng: 9.5957412 },
    { lat: 47.2214062, lng: 9.5973598 },
    { lat: 47.2150516, lng: 9.6044411 },
    { lat: 47.2140023, lng: 9.6025741 },
    { lat: 47.2102269, lng: 9.6082924 },
    { lat: 47.2089953, lng: 9.5950583 },
    { lat: 47.207709, lng: 9.5951363 },
    { lat: 47.2067433, lng: 9.6122943 },
    { lat: 47.2110872, lng: 9.6197187 },
    { lat: 47.2080845, lng: 9.632722 },
    { lat: 47.2075888, lng: 9.631499 },
    { lat: 47.2042872, lng: 9.6401952 },
    { lat: 47.2014515, lng: 9.6481608 },
    { lat: 47.2007516, lng: 9.6499096 },
    { lat: 47.1955904, lng: 9.6528064 },
    { lat: 47.1990313, lng: 9.6475493 },
    { lat: 47.1993439, lng: 9.6240525 },
    { lat: 47.1941793, lng: 9.6151809 },
    { lat: 47.187923, lng: 9.6143498 },
    { lat: 47.1886592, lng: 9.6264859 },
    { lat: 47.1908347, lng: 9.633498 },
    { lat: 47.1861183, lng: 9.6423257 },
    { lat: 47.1851928, lng: 9.6502941 },
    { lat: 47.1944084, lng: 9.6606532 },
    { lat: 47.2023965, lng: 9.6599153 },
    { lat: 47.2039668, lng: 9.6695112 },
    { lat: 47.2111897, lng: 9.6584926 },
    { lat: 47.2122241, lng: 9.661089 },
    { lat: 47.2206483, lng: 9.6492444 },
    { lat: 47.2253117, lng: 9.6435367 },
    { lat: 47.224583, lng: 9.6337091 },
    { lat: 47.2252825, lng: 9.624868 },
  ];

  const expertTschanettCoords = [
    { lat: 47.2488295, lng: 9.6401293 },
    { lat: 47.2496452, lng: 9.6612437 },
    { lat: 47.254539, lng: 9.6640761 },
    { lat: 47.2630438, lng: 9.6572096 },
    { lat: 47.275915, lng: 9.6641619 },
    { lat: 47.2854062, lng: 9.6495707 },
    { lat: 47.2900056, lng: 9.6250231 },
    { lat: 47.2805734, lng: 9.6173842 },
    { lat: 47.2802241, lng: 9.6072562 },
    { lat: 47.2620536, lng: 9.5988448 },
    { lat: 47.2533156, lng: 9.6082003 },
    { lat: 47.2490043, lng: 9.62407 },
  ];

  const bizauBezauCoords = [
    { lat: 47.3882712, lng: 9.8635466 },
    { lat: 47.381995, lng: 9.8621733 },
    { lat: 47.377113, lng: 9.8858626 },
    { lat: 47.3694403, lng: 9.8783095 },
    { lat: 47.3575804, lng: 9.8738463 },
    { lat: 47.3475788, lng: 9.8645766 },
    { lat: 47.344322, lng: 9.884146 },
    { lat: 47.3410651, lng: 9.9074919 },
    { lat: 47.3447873, lng: 9.9253447 },
    { lat: 47.3454852, lng: 9.9442275 },
    { lat: 47.3450199, lng: 9.9613936 },
    { lat: 47.3522309, lng: 9.9613936 },
    { lat: 47.3589758, lng: 9.9589903 },
    { lat: 47.3652548, lng: 9.96929 },
    { lat: 47.3699054, lng: 9.9716933 },
    { lat: 47.3738581, lng: 9.9531539 },
    { lat: 47.3764155, lng: 9.9387343 },
    { lat: 47.371998, lng: 9.9284346 },
    { lat: 47.3726955, lng: 9.9167616 },
    { lat: 47.372463, lng: 9.8961623 },
    { lat: 47.3812976, lng: 9.9023421 },
    { lat: 47.3803677, lng: 9.915045 },
    { lat: 47.3843196, lng: 9.9291213 },
    { lat: 47.3905956, lng: 9.9181349 },
    { lat: 47.387109, lng: 9.895475 },
  ];

  const strTVCoords = [
    { lat: 47.5435682, lng: 9.8750424 },
    { lat: 47.5421777, lng: 9.8789906 },
    { lat: 47.5364993, lng: 9.8774456 },
    { lat: 47.5341814, lng: 9.8736691 },
    { lat: 47.5319793, lng: 9.8760723 },
    { lat: 47.529893, lng: 9.8753857 },
    { lat: 47.5234019, lng: 9.8738407 },
    { lat: 47.5180692, lng: 9.8771023 },
    { lat: 47.5193445, lng: 9.8946118 },
    { lat: 47.5137795, lng: 9.9141812 },
    { lat: 47.5218949, lng: 9.9504017 },
    { lat: 47.5116925, lng: 9.9402737 },
    { lat: 47.5007924, lng: 9.9413037 },
    { lat: 47.5006764, lng: 9.9661946 },
    { lat: 47.5097214, lng: 9.9825024 },
    { lat: 47.5134317, lng: 9.9749493 },
    { lat: 47.520156, lng: 9.9658512 },
    { lat: 47.5344132, lng: 9.9622463 },
    { lat: 47.5344132, lng: 9.9562382 },
    { lat: 47.5382377, lng: 9.9418186 },
    { lat: 47.5341814, lng: 9.9378704 },
    { lat: 47.529893, lng: 9.9253391 },
    { lat: 47.5301249, lng: 9.9189877 },
    { lat: 47.532327, lng: 9.9133228 },
    { lat: 47.5381218, lng: 9.9093746 },
    { lat: 47.5420618, lng: 9.9069714 },
    { lat: 47.5451905, lng: 9.8982166 },
    { lat: 47.5441476, lng: 9.8899769 },
    { lat: 47.5487824, lng: 9.881737 },
  ];

  const fsgArlberg = new google.maps.Polygon({
    paths: fsgArlbergCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const sonderegger = new google.maps.Polygon({
    paths: sondereggerCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const mbsMontafon = new google.maps.Polygon({
    paths: mbsMontafonCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const ewerke = new google.maps.Polygon({
    paths: ewerkeCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const expertTschanett = new google.maps.Polygon({
    paths: expertTschanettCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const bizauBezau = new google.maps.Polygon({
    paths: bizauBezauCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const strTV = new google.maps.Polygon({
    paths: strTVCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  async function checkAddress(address: string): Promise<boolean> {
    const geocoder = new google.maps.Geocoder();

    const result = await geocoder.geocode({ address });
    const { results } = result;

    return google.maps.geometry.poly.containsLocation(
      results[0].geometry.location,
      fsgArlberg
    );
  }

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 47.013963, lng: 10.214255 },
      zoom: 9,
    }
  );

  checkAddress("Alte Arlbergstraße 33, 6580 St. Anton am Arlberg").then(
    (result) => {
      console.log(
        `${
          result ? `✅ ist ` : `❌ ist nicht`
        } in FSG Arlberg: Alte Arlbergstraße 33, 6580 St. Anton am Arlberg`
      );
    }
  );
  checkAddress("Gutenbergstrasse 1, 6858 Schwarzach").then((result) => {
    console.log(
      `${
        result ? `✅ ist ` : `❌ ist nicht`
      } in FSG Arlberg: Gutenbergstrasse 1, 6858 Schwarzach`
    );
  });

  fsgArlberg.setMap(map);
  sonderegger.setMap(map);
  mbsMontafon.setMap(map);
  ewerke.setMap(map);
  expertTschanett.setMap(map);
  bizauBezau.setMap(map);
  strTV.setMap(map);

  google.maps.event.addListener(map, "click", (e) => {
    const resultColor = google.maps.geometry.poly.containsLocation(
      e.latLng,
      fsgArlberg
    )
      ? "blue"
      : "red";

    const resultPath = google.maps.geometry.poly.containsLocation(
      e.latLng,
      fsgArlberg
    )
      ? // A triangle.
        "m 0 -1 l 1 2 -2 0 z"
      : google.maps.SymbolPath.CIRCLE;

    new google.maps.Marker({
      position: e.latLng,
      map,
      icon: {
        path: resultPath,
        fillColor: resultColor,
        fillOpacity: 0.2,
        strokeColor: "white",
        strokeWeight: 0.5,
        scale: 10,
      },
    });
  });
}
export { initMap };
