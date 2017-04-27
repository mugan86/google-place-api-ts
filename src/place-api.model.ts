import { GooglePlaceApiIF } from './place-api.interface';
import { Place } from './place.model';
export class GooglePlaceAPI implements GooglePlaceApiIF {
    startFindByTerm(term: string): string {
        throw new Error('Method not implemented.');
    }
    startFindByLocation(lat: string, lng: string, name: string, type: string): void {
        throw new Error('Method not implemented.');
    }
    getMoreDetailsToSelectPlace(placeId: string): Place {
        throw new Error('Method not implemented.');
    }
    addTypesToSearchWithFilters(type: string): void {
        throw new Error('Method not implemented.');
    }


}