import BrowserHelpers from "helpers/Browser.helpers"

import NetworkNativeMap from "maps/Native-Map/Network-Native-Map"
import NetworkNativeMapDOM from "maps/Native-Map/Network-Native-Map-DOM"
import NetworkGoogleMaps from "maps/Google-Maps/Network-Google-Maps.js"

class InitializeParams{

    constructor(){

        this.maps = {
            activated: true,
            type: "NativeMap",
            style: "dark",
            id: "map",
        };


        /**
         * On Window Load
         */
        BrowserHelpers.addEvent(window, "load", (event) => {
            console.log("User-Interface-Loaded");
            this.load();
        });

    }

    load(){
        this.loadMaps();
    }


    async loadMaps(){

        if (this.maps.activated === false) return false;

        if (this.maps.type === "NativeMap"){

            NetworkNativeMapDOM.addHTML(this.maps.id);

            NetworkNativeMap.createMap(this.maps.id);
            await NetworkNativeMap.initialize();
        }

    }

}

export default new InitializeParams();