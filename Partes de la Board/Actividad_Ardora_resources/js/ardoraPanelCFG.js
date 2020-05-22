//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=25; attempts=0; attemptsMax=5;
var score=0; scoreMax=25; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones, has finalizado"; messageTime="Se acabó el tiempo"; messageError="¡No es esa!"; messageAttempts="No tienes más intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[318,298,276,234,192,156,115,34,510,507,519,510,471,480,445,416,349,272,226,187,60,34,34,41,33]; var posY=[379,349,373,355,354,356,349,312,240,217,179,150,139,82,56,57,61,61,61,61,107,130,167,199,254];
var coorx=["MzEz", "Mjkz", "Mjcx", "MjI5", "MTg3", "MTUx", "MTEw", "Mjk", "NTA1", "NTAy", "NTE0", "NTA1", "NDY2", "NDc1", "NDQw", "NDEx", "MzQ0", "MjY3", "MjIx", "MTgy", "NTU", "Mjk", "Mjk", "MzY", "Mjg"]; var coory=["Mzc5", "MzQ5", "Mzcz", "MzU1", "MzU0", "MzU2", "MzQ5", "MzEy", "MjQw", "MjE3", "MTc5", "MTUw", "MTM5", "ODI", "NTY", "NTc", "NjE", "NjE", "NjE", "NjE", "MTA3", "MTMw", "MTY3", "MTk5", "MjU0"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "Pila", "SouthBridge", "", "", "", "", "", "Conector de disket", "", "Puente sur", "", "North Bridge", "Socket", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Chipset de Puente Sur", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "SouthBridge", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Conectores de sonido", "LAN", "Puertos USB", "VGA", "Paralelo", "Serial", "HDMI", "PS/2", "PCI", "Conector interno de audio", "Conector interno de USB", "Pila de BIOS", "Puente sur", "Jumper", "Conectores de gabinete", "Conect. SATA", "Conect. de ventilador", "Conector IDE", "Conector de disquete", "Conector ATX", "Chipset", "Slot RAM/DIMM", "Puente norte", "Sócalo", "Conector P4"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="QWN0aXZpZGFkX0FyZG9yYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
