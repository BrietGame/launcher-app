export default class Game {
    game_id: number;
    titre: string;
    thumb: string;
    sortie: string;
    dev: string;
    devLogo: string;
    constructor(game_id: number, titre: string, thumb: string, sortie: string, dev: string, devLogo: string) {
        this.game_id = game_id;
        this.titre = titre;
        this.thumb = thumb;
        this.sortie = sortie;
        this.dev = dev;
        this.devLogo = devLogo;
    }
}