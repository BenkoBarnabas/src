    import Bizso from "./lib/assets/collection/tanar/Bizso.png"
    import Farkas from "./lib/assets/collection/tanar/Farkas.png"
    import Moni from "./lib/assets/collection/tanar/Moni.png"
    import Nagyora from "./lib/assets/collection/tanar/Nagyora.png"
    import Rozgonyi from "./lib/assets/collection/tanar/Rozgonyi.png"
    import Tabi from "./lib/assets/collection/tanar/Tabi.png"
    import Bencus from "./lib/assets/collection/tanar/Bencus.png"
    import Dobi from "./lib/assets/collection/tanar/Dobi.png"
    import IvanEva from "./lib/assets/collection/tanar/IvanEva.png"
    import KocsiAndi from "./lib/assets/collection/tanar/KocsiAndi.png"
    import KoPasz from "./lib/assets/collection/tanar/KoPasz.png"
    import Kuti from "./lib/assets/collection/tanar/Kuti.png"
    import Matos from "./lib/assets/collection/tanar/Matos.png"
    import Meszaros from "./lib/assets/collection/tanar/Meszaros.png"
    import Marti from "./lib/assets/collection/tanar/Marti.png"
    import Jeff from "./lib/assets/collection/tanar/Jeff.png"

    import Arho from "./lib/assets/collection/diak/Arho.png"
    import Barni from "./lib/assets/collection/diak/Barni.png"
    import Eszter from "./lib/assets/collection/diak/Eszter.png"
    import Olivia from "./lib/assets/collection/diak/Olivia.png"
    import Zalan from "./lib/assets/collection/diak/Zalan.png"
    import Zeno from "./lib/assets/collection/diak/Zeno.png"

    //gacha SRC
    import BizsoGacha from "./lib/assets/collection/tanar/BizsoGacha.png"
    import FarkasGacha from "./lib/assets/collection/tanar/FarkasGacha.png"
    import MoniGacha from "./lib/assets/collection/tanar/MoniGacha.png"
    import NagyoraGacha from "./lib/assets/collection/tanar/NagyoraGacha.png"
    import RozgonyiGacha from "./lib/assets/collection/tanar/RozgonyiGacha.png"
    import TabiGacha from "./lib/assets/collection/tanar/TabiGacha.png"
    import BencusGacha from "./lib/assets/collection/tanar/BencusGacha.png"
    import DobiGacha from "./lib/assets/collection/tanar/DobiGacha.png"
    import IvanEvaGacha from "./lib/assets/collection/tanar/IvanEvaGacha.png"
    import KocsiAndiGacha from "./lib/assets/collection/tanar/KocsiAndiGacha.png"
    import KoPaszGacha from "./lib/assets/collection/tanar/KoPaszGacha.png"
    import KutiGacha from "./lib/assets/collection/tanar/KutiGacha.png"
    import MatosGacha from "./lib/assets/collection/tanar/MatosGacha.png"
    import MeszarosGacha from "./lib/assets/collection/tanar/MeszarosGacha.png"
    import MartiGacha from "./lib/assets/collection/tanar/MartiGacha.png"
    import JeffGacha from "./lib/assets/collection/tanar/JeffGacha.png"

    import ArhoGacha from "./lib/assets/collection/diak/ArhoGacha.png"
    import BarniGacha from "./lib/assets/collection/diak/BarniGacha.png"
    import EszterGacha from "./lib/assets/collection/diak/EszterGacha.png"
    import OliviaGacha from "./lib/assets/collection/diak/OliviaGacha.png"
    import ZalanGacha from "./lib/assets/collection/diak/ZalanGacha.png"
    import ZenoGacha from "./lib/assets/collection/diak/ZenoGacha.png"


    export class diakCards {
        constructor(name, description, health, attack, source, stars, cost, type, gachaSRC) {
            this.name = name;
            this.description = description;
            this.health = health;
            this.attack = attack;
            this.source = source;
            this.stars = stars;
            this.cost = cost;
            this.type = type
            this.gachaSRC = gachaSRC;
        }
    }

    export class tanarCards {
        constructor(name, description, health, attack, source, stars, cost, type, gachaSRC) {
            this.name = name;
            this.description = description;
            this.health = health;
            this.attack = attack;
            this.source = source;
            this.stars = stars;
            this.cost = cost;
            this.type = type
            this.gachaSRC = gachaSRC;
        }
    }

    //TANAROK
    export const BizsoCard = new tanarCards("Bizsó", "Kedvence egy jó python feladat. Ha szépen kéred, kienged a hátsó kijáraton. Szexi apuka.", 9, 5, Bizso, 4, 2, "character", BizsoGacha); 
    export const FarkasCard = new tanarCards("Dr. Farkas", "Filozófusszakállát évente vágja. Ennek ellenére mindig visszanő. Nem kell félni tőle.", 17, 8, Farkas, 5, 4, "character", FarkasGacha);
    export const MoniCard = new tanarCards("Móni", "Hobbifilozófus. Képes 45 percig elemezni egy 10 soros lírai alkotást. Lenyűgöző!", 8, 6, Moni, 4, 2, "character", MoniGacha);
    export const NagyoraCard = new tanarCards("Big D", "Average tank build. Not much to say.", 30, 4, Nagyora, 3, 5, "character", NagyoraGacha);
    export const RozgonyiCard = new tanarCards("Rozgonyi", "Szeret sütni. Szeret még legózni és gombócot enni is. A fiát láthatólag annyira nem.", 17, 3, Rozgonyi, 3, 3, "character", RozgonyiGacha);
    export const TabiCard = new tanarCards("Tábi", "Tesitanár és röplabdaedző. Epic gamer szabadidejében. Sose hagyja ki az alkalmat, hogy politizáljon.", 6, 7, Tabi, 3, 2, "character", TabiGacha);

    //not yet detailed
    export const BencusCard = new tanarCards("Bencus", "Másodállásban professzionális diáktanya dolgozó.", -1, -1, Bencus, 5, -1, "character", BencusGacha);
    export const DobiCard = new tanarCards("Dobby", "Dob", -1, -1, Dobi, 6, -1, "character", DobiGacha);
    export const IvanEvaCard = new tanarCards("Iván Éva", "Average Edward Allen Poe fan, nem egy szakbarbár. Irigylésre méltó!", -1, -1, IvanEva, 3, -1, "character", IvanEvaGacha);
    export const KocsiAndiCard = new tanarCards("KocsiAndi", "Lorem Ipsum", -1, -1, KocsiAndi, 3, -1, "character", KocsiAndiGacha);
    export const KoPaszCard = new tanarCards("KoPasz", "Lorem Ipsum", -1, -1, KoPasz, 5, -1, "character", KoPaszGacha);
    export const KutiCard = new tanarCards("Kuti", "Lorem Ipsum", -1, -1, Kuti, 5, -1, "character", KutiGacha);
    export const MatosCard = new tanarCards("Matos", "Lorem Ipsum", -1, -1, Matos, 4, -1, "character", MatosGacha);
    export const MartiCard = new tanarCards("Marti", "Az ing, nem azing. Hetest kér.", -1, -1, Marti, 4, -1, "character", MartiGacha);
    export const MeszarosCard = new tanarCards("Mészaros", "Lorem Ipsum", -1, -1, Meszaros, 3, -1, "character", MeszarosGacha);
    export const JeffCard = new tanarCards("Jeff", "Plays golf with you on the weekends. Loves his wife, kids and family dog.", -1, -1, Jeff, 6, -1, "character", JeffGacha);

    //DIAKOK
    export const ArhoCard = new diakCards("Arhó", "7 évesen megfejtette a tudományt. Hisz a szabad akaratban.", 12, 6, Arho, 4, 3, "character", ArhoGacha); 
    export const BarniCard = new diakCards("Barni", "Szeretik a lányok, szeretik a fiúk, ő pedig a krumplis tésztát szereti.", 18, 7, Barni, 3, 4, "character", BarniGacha);
    export const EszterCard = new diakCards("Eszter", "Nem tart otthon tyúkokat, de nagyon szeretne. Este 9-kor kizavarják a kollégium gépterméből.", 5, 5, Eszter, 3, 1, "character", EszterGacha);
    export const OliviaCard = new diakCards("Olívia", "Lehelt már számtalanszon visszautasította. Oliver ikertestvére. Lehel ezt még nem tudja.", 12, 4, Olivia, 4, 2, "character", OliviaGacha);
    export const ZalanCard = new diakCards("Zalán", "Mindenki kedvenc DÖK elnöke. Volt. Fasza bőrdzseki!", 10, 5, Zalan, 5, 3, "character", ZalanGacha);
    export const ZenoCard = new diakCards("Zénó", "SG DÖK elnök. Ha a terem hátsó sarkában valaki fulladozik a nevetéstől, ő az.", 10, 6, Zeno, 6, 7, "character", ZenoGacha);

    export let tanarCardsArr = [BizsoCard, FarkasCard, MoniCard, NagyoraCard, RozgonyiCard, TabiCard,BencusCard,DobiCard,IvanEvaCard,KocsiAndiCard,KoPaszCard,KutiCard,MatosCard,MeszarosCard,JeffCard]
    export let diakCardsArr = [ArhoCard, BarniCard, EszterCard, OliviaCard, ZalanCard, ZenoCard]


    export let URTanars = []
    export let FiveStarTanars = []
    export let FourStarTanars = []
    export let ThreeStarTanars = []

    export let URDiaks = [ZenoCard] //dont ask, just dont
    export let FiveStarDiaks = []
    export let FourStarDiaks = []
    export let ThreeStarDiaks = []


    function CountStars(cardArr,type){ //im lazy
        for(let i = 0; i < cardArr.length; i++){
            if(cardArr[i].stars == 6){
                if(type == "tanar"){
                    URTanars.push(cardArr[i])
                } 
                else if(type == "diak"){
                    URDiaks.push(cardArr[i])
                }   
            }
            if(cardArr[i].stars == 5){
                if(type == "tanar"){
                    FiveStarTanars.push(cardArr[i])
                } 
                else if(type == "diak"){
                    FiveStarDiaks.push(cardArr[i])
                }   
            }
            if(cardArr[i].stars == 4){
                if(type == "tanar"){
                    FourStarTanars.push(cardArr[i])
                } 
                else if(type == "diak"){
                    FourStarDiaks.push(cardArr[i])
                }
            }
            if(cardArr[i].stars == 3){
                if(type == "tanar"){
                    ThreeStarTanars.push(cardArr[i])
                } 
                else if(type == "diak"){
                    ThreeStarDiaks.push(cardArr[i])
                } 
            }
        }
    }

    CountStars(tanarCardsArr,"tanar")
    CountStars(diakCardsArr,"diak")