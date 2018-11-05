export class MarkerConf {

    public lat: number;
    public lng: number;

    public title = "Sin titulo";
    public desc = "Sin Descripción";

    constructor (lat: number, lng:number){
        this.lat = lat;
        this.lng = lng;
    }

}