import {Serie} from "./Serie";


export class SerieDetail extends Serie {
    constructor(id: number, title: string, channel: string, seasons: number, description: string, link: string, imageUrl: string) {
        super(id, title, channel, seasons, description, link, imageUrl);
    }
}