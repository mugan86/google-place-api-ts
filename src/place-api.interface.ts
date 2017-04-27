import { Place } from './place.model';

export interface GooglePlaceApiIF {
   /**
     * Input find term search to get results from Google Places API
     * @param term
     */
    startFindByTerm(term:string):string;

    /**
     * Input location to get results from Google Places API
     * @param lat: Location latitude coordinate
     * @param lng: Location longitude coordinate
     * @param name: Location name
     * @param type: Service type to find near
     */
     startFindByLocation(lat:string, lng:string, name:string, type: string): void;

    /**
     * GetMore details about select place
     * @param placeId: Place identify number (unique) (before use reference)
     * @return Select place id info in Place Object
     */
    getMoreDetailsToSelectPlace(placeId: string):Place;

    /**
     * Add types with pass in parameter to save in types list
     * @param type
     */
    addTypesToSearchWithFilters(type:string): void;
}