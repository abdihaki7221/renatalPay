// import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { WorldVectorMapComponent } from '@component/vector-maps/world-vector-map.component';
// import { NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
// import { countryList } from '@views/dashboard/data';
// import 'jsvectormap'
// import 'jsvectormap/dist/maps/world.js'

// @Component({
//   selector: 'sessionbycounty',
//   standalone: true,
//   imports: [NgbDropdownModule,NgbProgressbarModule,WorldVectorMapComponent],
//   templateUrl: './sessionbycounty.component.html',
//   styles: ``,
//   schemas:[CUSTOM_ELEMENTS_SCHEMA]
// })
// export class SessionbycountyComponent {

//   countryList = countryList

//   worldMapConfig = {
//     map: 'world',
//     selector: '#world-map-markers',
//     zoomOnScroll: true,
//     zoomButtons: false,
//     markersSelectable: true,
//     markers: [
//         { name: "Canada", coords: [56.1304, -106.3468] },
//         { name: "Brazil", coords: [-14.2350, -51.9253] },
//         { name: "Russia", coords: [61, 105] },
//         { name: "China", coords: [35.8617, 104.1954] },
//         { name: "United States", coords: [37.0902, -95.7129] }
//     ],
//     markerStyle: {
//         initial: { fill: "#7f56da" },
//         selected: { fill: "#1bb394" }
//     },
//     labels: {
//         markers: {
//             render: (marker:any) => marker.name
//         }
//     },
//     regionStyle: {
//         initial: {
//             fill: 'rgba(169,183,197, 0.3)',
//             fillOpacity: 1,
//         },
//     },
//   }
// }
