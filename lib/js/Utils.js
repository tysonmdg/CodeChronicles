//GAME SETTINGS:
const GAME_TITLE   = "Lunar Legends: A Journey Beyond";
const GAME_VERSION = "0.1.0";

const DEBUG         = true;
const PIXELART      = true; //para el tema del escalado de imagen
const ZOOM          = 1;

const SCREEN_WIDTH  = 656;
const SCREEN_HEIGHT = 373;

const SCREEN_MIN_WIDTH  = 328;
const SCREEN_MIN_HEIGHT = 188;

const SCREEN_MAX_WIDTH  = 1312;
const SCREEN_MAX_HEIGHT = 752;

const TRANSPARENT = true; //para poner fondo transparente o no

//RUTAS A RECURSOS:
const IMAGES_PATH = "rsc/img/";
const MUSIC_PATH  = "rsc/music/";
const SCENES_PATH = "js/scenes/";
const OBJECT_PATH = "js/obj/";

const BGM_PATH = MUSIC_PATH + "BGM/"; //Música de fondo (BackGround Music); música de fondo en loop
const BGS_PATH = MUSIC_PATH + "BGS/"; //Sonido de fondo (BackGround Sound); sonido ambiente de fondo en loop
const ME_PATH  = MUSIC_PATH + "ME/";  //Efecto musical (Music Effect); las típicas melodías cortas sin loop de cuando mueres/pasas un nivel/encuentras un objeto etc
const SE_PATH  = MUSIC_PATH + "SE/";  //Efecto de sonido (Sound Effect); sonido corto sin loop que se aplica cuando disparas, rompes/abres algo etc.

//FUNCIONES PARA OBTENER LAS RUTAS A RECURSOS:
function getImg(name)   { return IMG_PATH    + name; };
function getScene(name) { return SCENES_PATH + name; };
function getObj(name)   { return OBJECT_PATH + name; };

function getBGM(name) { return BGM_PATH + name; };
function getBGS(name) { return BGS_PATH + name; };
function getME(name)  { return ME_PATH  + name; };
function getSE(name)  { return SE_PATH  + name; };
