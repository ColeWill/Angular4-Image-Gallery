import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
	visibleImages = [];
	
	getImages(){
//returns a copy of the image array below (ALL of the images)
		return this.visibleImages = IMAGES.slice(0);
	}
// get the image whose id I pass in
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}
}

const IMAGES = [
	
	{"id":2, "category": "Nature",  "caption":"hello", "url":"assets/img/asoggetti-369147.jpg"},
	{"id":3, "category": "Aerial",   "caption":"hello", "url":"assets/img/chris-brignola-7766.jpg"},
	{"id":4, "category": "Nature",  "caption":"hello", "url":"assets/img/david-marcu-114194.jpg"},
	{"id":5, "category": "Aerial",  "caption":"hello", "url":"assets/img/james-donaldson-365418.jpg"},
	{"id":6, "category": "Aerial",  "caption":"hello", "url":"assets/img/lachlan-dempsey-397956.jpg"},
	{"id":7, "category": "Nature",  "caption":"hello", "url":"assets/img/samuel-scrimshaw-114346.jpg"},
	{"id":8, "category": "Nature",  "caption":"hello", "url":"assets/img/lambert-yuri-108539.jpg"},
	{"id":9, "category": "Nature",  "caption":"hello", "url":"assets/img/photo-1435783099294-283725c37230.jpeg"},
	{"id":10, "category": "Nature", "caption":"hello", "url":"assets/img/photo-1456244440184-1d494704a505.jpeg"},
	{"id":11, "category": "Nature", "caption":"hello", "url":"assets/img/photo-1470138831303-3e77dd49163e.jpeg"},
	{"id":12, "category": "Nature", "caption":"hello", "url":"assets/img/photo-1479030160180-b1860951d696.jpeg"},
	{"id":13, "category": "Other",  "caption":"hello", "url":"assets/img/photo-1506351421178-63b52a2d2562.jpeg"},
	{"id":14, "category": "Aerial", "caption":"hello", "url":"assets/img/photo-1510279770292-4b34de9f5c23.jpeg"},
	{"id":15, "category": "Other",  "caption":"hello", "url":"assets/img/ray-hennessy-229596.jpg"},
	{"id":16, "category": "Nature", "caption":"hello", "url":"assets/img/rina-miele-400320.jpg"}
]












