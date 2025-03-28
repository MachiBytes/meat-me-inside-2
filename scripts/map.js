var map = L.map("map").setView([14.584985, 121.059572], 17); // Set initial position and zoom

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([14.584985, 121.059572])
  .addTo(map)
  .bindPopup("Visit our physical store!")
  .openPopup();
