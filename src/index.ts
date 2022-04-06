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
  const triangleCoords = [
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

  const fsgArlberg = new google.maps.Polygon({
    paths: triangleCoords,
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
