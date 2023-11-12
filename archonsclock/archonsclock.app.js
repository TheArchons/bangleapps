// Show launcher when middle button pressed
Bangle.setUI("clock");

Bangle.loadWidgets();

const storage = require('Storage');
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const bg = {
  width : 176, height : 176, bpp : 3,
  transparent : 2,
  buffer : atob("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/57575/57575/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPHPHPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/57575/575757575/5/575/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPP575757575/5/5/5/5/5/5/5/5/5/5/575757575/5/57575/5/5/5/575/575/57575757575/5/5/5/57575757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHHHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757995757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPHPPPHPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPP575757575757575757575757575/575757575/57575757575757575757575757575757575/5/5/5/57575757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPnPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757595757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPHPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5757575/5/575/5/5/5/5/5/5/5/5/5/5/575/5757575757575757575/575/57575757575/5/5/5757575757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPnPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757595757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/9/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757595757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPHPPPPPHPHPHPHP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7577757575757575757575755575777777777555777777777777777577777575757575757575757575757575PPPPPPHPPPPPPPPPPPPPHPHHFHHPPPHPHPHPPPHPHPHPHPHPHPHPHPHPHPHPHPHPPPPPHPPPHPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/okgkg/5/5/5/5/5/Y/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPHHHHHHPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7777777777777777777774gggggg777777777757777777777777777777757777777777777777777777777775PPPPHPPPHPPPHPHPHPPPPHFHFHFHHPPPPPPPPPHPHPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPHPHPPPPPPPPPHP5/5/5/5/5/5/5/5/5/5/5oggggggp/5/5/5/5/4/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPFHHHFHHHPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/7/7/7/7/7/7/7/7/7/75gkoggggg77777777757777777777777777777777777777777777777777777777775HPHPHPHPHPHPPPPPPPHPHHHHHHFHFPPPPPHPPPHHPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPHPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/54g8k8gko/5/5/5/5/475/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPHHHHHHHHHPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/7/7/7/7/7/7/7/7/7///4ss8sgr47777777775Z777777777777777777777777777777777777777777777777HPHPHPHPHPHPHPHPHPHPHPHHHnFHHPHPHPHPPPHHHPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/59ook8A/5/5/5/5/5/4/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPHHHHHHHPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/7/7/7/7/7/7/7/7/7///9sgsgA7/7/7/7/7/75J/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7HPHPHPHPHPHPHPHPHPHPHPHHHHBHHPHPHPHPHPHHHPHPHPHPHPHPHPHPHPHPHPHPHPHPHPHPPPHPHPHPHPHPHPPP5/5/5/5/5/5/5/5/5/5/5/gskgAAA/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/9/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPHHHAHFHHPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPP/7/7/7/7/7/7/7/7/7/7/4gAgAAAA7/7/7/7///5/7/7/7/7/7/7/7/7/7/7/7/7/7/7/7///7/7/7/7/7/7/7/7HPHPHPHPHPHPHPHPHPHPHHEHEHAHFHHPHPHPHPHHHPHPHPPPHPHPHPHPHPHPHPHPHPHPHPHvHPHPHPHPHPHPHPHP5/5/5/5/5/5/5/5/5/5/4AAAAAAAA/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPFFFFFFFHHPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPP/7/7/7/7/7/7////////4AAAAAAAA7/////7777Z755ZZZZZZZZZZZ7577//////////////////////////////PPPPPPHPHPHPHPHPHPHPBHEHAHAHFHHPPPPPPPHPHPHPHPHPHPHPHPHPHPHPHPHPHPHPHPHvPPHPHPHPHPHPHPHP5/5/5/5/5/5/5/5/5/55AAAgAAAAA/57ZbZ5J5J5J5I5I5I5J5J5J5J5J5J75/5/5/5/5/5/5/5/5/5/9/9/9/9/PPPPPPPPPPPPPPPPPPPHHFHFHFFBHHPPPHHHHHHHHHHHHHHHHHHHHHHHHHHHHHPPPPPPPPPHPPPPPPPPPPPPPPPP///////////////////IAAAAAAAAAJZIIIIIIAIAIIYIoIoIIIJZ5Z5IIIII55/////////9////////////////HPHPHPHPHPHPHPHPHPHHBHFHAHAHAHFHFHFHHHHHHHHHHHHHHHHPHHHHHHHHHHHPHPHPHPHPHPHPHPHPHPHPHPHP5/5/5/5/5/5/5/5/5/54AAAgAAAAAIAIAIAIAoAoA5I4A4A4I4I5J5IZI4I5I55/5/5/5/575/9/5/9/9/9/9/9/PPPPPPPPPPPPPPPPPPPHFBHFFAFBHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHPPPPPPPPPPPPPPPPPPPPPPPPP///////////////////5IAAAAAAAAAAAIIIIIIIIoI4Ioo4o4oJZ55YIIIJIJI5////////5////////////////HPHPHPHPHPHPHPHPHPHPAHFHAHAHBHHHHHHHHHHHHHHHHHHHHHHPHHHHHHHHHHHPHPHPHPHPHPHPHPHPHvHvHvHv9/9/9/9/9/9/9/9/9/9/AAAgAAAAAIIoIoI4A4I4IIAII5I5I5I5p5I5IZJ5I5A/9/9/9/979/9/9/9/9///9///PPPPPPPPPPPPPPPPPPPPFFHFFBFFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHPPPPPPPPPPPPPPPPPPPPPPPP///////////////////4AAAAAAAAAAAIIIIIIIIIIIIAIIooooJZ55IIIIJ4JIIJ///////5////////////////HvHvHvHvHvHvHvHvHvHHAHFHAHAHFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHvHvHvHvHvHvHvHvHvHvHvHv9/9/9/9/9/9/9/9/9/94AAAgAAAAAAAoAIAIA4I4Aog4AoAIAoA5I5IIIZI5I5IIJ5J/9/9/////////////////PPPPPPPPPPPPPPvPvPPFHFHFHFFFHFHHHHHHHHHHHHHHHFHFHHHHHHHHHHHHHHHHHHHHvPvPPPnPvPvPPPPPPPvP//////////////////4AAAAAAAAAAAAAAAAAAAAAAk8oAAAAAAJ54IIIIII5JIJIJJZ////5////////////////HvHvHvHvHvHvHvHvHvHHFHFHAHAHBHAHFHFHFHFHHHHHBHAHAHHHHHHHHHHHHHHHHHHvHvHvHvnvHvHvHvHvHvHv//////////////////4IAgAgAAAAAAAAAAAAAAAAAoAgAAAAA5J5J5p5I5I5IZI5IJJ/////////////////////vPvPvPvPvPvPvPvPvPHFHFHFHFHBHFFAFAFAFBHHHFHFHFBBHHHHHHHHHHHHHHHHHHHPvvvvHvnvvvvPvPvPvPvv//////////////////IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJZ5555555554pIIIIIJ////9////////////////HvHvHvHvHvHvHvHvHvFHEHEHBHAHBHAHAHAHAHFHFHFHFHBHHHHHHPHPHPHPHHHHHHHvHvHvHvnvHvHvHvHvHvHv//////////////////AAAAAAAAAAAAAAAAAAAAAIAIAoAIA5Z5Z557575555J5J5III/////////////////////vvvvvvvvvvvvvvvvvvHFHFHFHFFBFFHHHHHHHHHHHHHHHHHHPHPHPHHHHHHHHHPHHHHHPPvvHnvnvvvvvvvvvvvv//////////////////IAAAAAAAAAAA5Z5555555555555ZZZZZ5IJIpIpIpIJJ5Z5J5Z55/9////////////////HvHvHvnvHvHvnvnvHPFHAHAHAHAHBHHHHHHHHHHHHHHHHPHPHHHHHHHHHHHHHHHHHHHHHHHPHPHvnvnvnvnvnvnv////////////////95I4AAAAAAAAAoI5p5p5p5p5J5J5I5J5J5J555555959555555o9o555p/9/////////////vnvnvnvnvnvnvnvnvHHAFAFAFAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHnvnvnvnvnvnvn////////////////5Y5IAAAAAAAAIIIIJo5I5IoIIIIIIgoJ555555555555555555555IoJ555/////////////nvnvnvnvnvnvnvnvHHHHAHAHAHFHHHHHHHHHHHHHFHFHFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHvnvnvnvnvnvnv9/9/9/9/9/9/9/9/goAAAAAAAAAII5I5IoAoI4I4I5I4Agg5o5o5o5I5I5I5I5o5o5o9o9o9o5o/9/9/9/9/9/9/vnvnvnvnvnvnvnvnHHHAFAHAFFHHHHHHHHHHHHHHHHHHHFHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHvnvnvnvnvnvn///////////////9ggoAAAAAAAIIoIoIoIpIoooooooIIggI5o5o55555555545554945455555/////////////nvnvnvnvnvnvnvnvFHHHAHAHAHHHHHHHHHHHHHHHHHHHFHFHHHHHHHHHHHHHHHHHHHHHHHHHHHHvnvnvnvnvnvnv9/9/9/9/9/9/9/99AgIAAAAAAAAoAoAoAoA5I5I5I5I4AgApI5o5o5o5J5o5o5o9o9o9o9o5ApI/9/9/9/9/9/9/nnvnvnvnvnnnnnnnHHHAFHFAFHHHHHHHHHHHHHHHHHHHHFHHHHHHHHHHHHHHHHHHHHHHHHHHEHHHnnnnnnnnnnnn///////////////8gAIAAAAAAAIIoIoIIIIIoIoIoIoIIAAIoooo5ooAAJ5454549494945IAA5/////////////nvnvnvnvnvnvnvnvFHFHAHAHAHHHHHHHHHHHHHHHHHHHFHHHHHHHHHAFAHHHHHHHHHHHHHHHAHHvnvnvnvnvnvHH9/9/9/9/9/9/9/9/AAAAAoAAAoA4IoApIoAoAoIoIoIoAIAoI5I5I4AAAJo5o5o9o9o9o9oAAAA/9/9/9/9/9/g/nnnnnnnnnnnnnnnnHHHAFHFAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHFAAHHHHHHHHHHHHHHAHFHHnnnnnnnnnnnH///9/////99////98AAAAAAAAIoIoIoIoIoIoIoIoIoIIIoIooooooAAAA4ooo4o4o4o4ooAAAo9/////////989nnHnHnHnnnnnHvnnHHAHHHAHBHHHHHHHHHHHHHHHHHHHHHHHHHHHHHAHAHHHHHHHHHHHHHAFAHHnnvnvnvnvnvHv8949o9498/898/9984AAAoAAAoAoAoAoAoAoAoAoAoAoAoAoI5I5I4AAABI5I5o5o5o5o5AAAAA/9/9/9/9/9/t/HHHHHHHHHHHHHHHHHHFAHHFAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHBFAAHHHHHHHHHHHHHAAHHHHHHHHHHHHHHHH999999989998989894AAAIAAAAAAIAIIIIIAIIIIIIIIIIIIIIIAIAAAAA5Z5ooooooooIAAAA4o4o4ooI4IIAIoHHHHHHHHHHHHHHHHHHAHHHAHBHHHHHHHHHHHHHHHHHHHHHHHHHHHHHAHAHHHHHHHHHHHHHAHAHHHHHHHHHHHHHHHo5I4o5o4o4o5o5o5o4AAAIAAAIIoI4I4I4A4A4AoAoA4AoIoAoAIAAAAAAAoI4IoAoAoAoAAAAo9o944A/44I4A4HHHHHHHHHHHHHHHHHFFFHFFAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHBHAFHHHHHHFHHHHHAAAHHHHHHHHHHHHHHHHoIoIoIoIoIoIoo4o4IAAAAAAAAAAAAAAAAIAIAIAIAIAIAIAAAIAAAAAAAAIoIIAAAAAAAAAAN99444ooo4A4oAAHHHHHHHHHHHHHHHHHHAHFHAHFHFHFHFHFHFHFHFHBHBHBHAHAHHHAHAHFHBHHHHHAHAHAHAHAHHHHHHHHHFHHHEHo949494/9/9/9/8/54AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAoAAAAAAAAAAAAApo5o4A4A4AoooApHHHHHHHHHHHHHHHHHFFHAAFAAAAAFFAAHHHHHHHHHAAAAAAAAAAAABHABABAFAAAFAAAAAAAFHHHHHHHHHHHHHHH4ooIoooooo4o44999AAt4AAAAAAAAAAAp449994IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAoAAAoAAgAAHHHHHHHnHnHnHvHnHHEHAHAFAFAFAHHHHHFHHHFHAFAFAFAHAFAFAHAHBHFHHHBHHHAHAHAHAHHHHHHHEHEHHHEH9/9/9/9/5/5/5/4/5AA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAAAoAAAAAAAAAoAAAAAoAgAAAAPHPHPHPHPHPHHHHHPAHHHAFAAAAAHFHFHHHFHFHFHAAAAAHFAAAAAAFAHHFHHFHFHFFAAAAAFHHHHHHEHEHHHAFH/9/9/9/5/9/5544I4AAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHPHPHHHHFHHHFHBHFHHHAHAHAFAFBHAHAHAHAHAHAFAFAFAHAFAFAHAHAHAHAHAHAHAHAFAHAHFHAHAHAHAHAHAHA4AIAIAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHFHBHAHHHBHHFAHAFFAAAAAAFAFAAAAAAAAAAAAAAAAAAAAAAAFAAAEAEAAABAAAAAAEAAAAAAEAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHAHAHAHAHAHAHAHAHAFAHAHAHAFAFAHAFAHAFAFAFAFAFAFAFAFAFAFAFAHAHAFAHAFAFAFAFAFAHAHAHAHAHAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAFABAFAEAFAEAEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAEAAAEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
};
const bgtime = {
  width : 176, height : 29, bpp : 3,
  transparent : 2,
  buffer : atob("PPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/57575/57575/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPHPHPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/57575/575757575/5/575/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757575757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPP575757575/5/5/5/5/5/5/5/5/5/5/575757575/5/57575/5/5/5/575/575/57575757575/5/5/5/57575757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHHHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757995757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPHPPPHPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPP575757575757575757575757575/575757575/57575757575757575757575757575757575/5/5/5/57575757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPnPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757595757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPHPPPPPPPPPHPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP5757575/5/575/5/5/5/5/5/5/5/5/5/5/575/5757575757575757575/575/57575757575/5/5/5757575757PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPnPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP7575757575757575757575757575757575757595757575757575757575757575757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPHPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
};
const bgsec = {
  width : 48, height : 29, bpp : 3,
  transparent : 2,
  buffer : atob("PPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPP5/5/5/5/5/5/5/5/5/5/5/5/PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPPPPPPPPPPPPPHPPP575757575/5/5/5/57575757PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPHPPPPPPPPPPPPPPP575757575/5/5/5/57575757PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPP575757575/5/5/5757575757PPPPPPPPPPPPPPPPPPPPPPPP757575757575757575757575PPPPPPPPPPPPPPPPPPPPPPPP")
};

/* Custom version of Bangle.drawWidgets (does not clear the widget areas) Thanks to rozek */
// copied from the rolex app

Bangle.drawWidgets = function () {
  var w = g.getWidth(), h = g.getHeight();

  var pos = {
    tl:{x:0,   y:0,    r:0, c:0}, // if r==1, we're right->left
    tr:{x:w-1, y:0,    r:1, c:0},
    bl:{x:0,   y:h-24, r:0, c:0},
    br:{x:w-1, y:h-24, r:1, c:0}
  };

  if (global.WIDGETS) {
    for (var wd of WIDGETS) {
      var p = pos[wd.area];
      if (!p) continue;

      wd.x = p.x - p.r*wd.width;
      wd.y = p.y;

      p.x += wd.width*(1-2*p.r);
      p.c++;
    }

    g.reset();                                 // also loads the current theme

    try {
      for (var wd of WIDGETS) {
        g.setClipRect(wd.x,wd.y, wd.x+wd.width-1,23);
        wd.draw(wd);
      }
    } catch (e) { print(e); }

    g.reset();                               // clears the clipping rectangle!
    }
};

function getTemp() {
  var weatherJson;

  try {
    weatherJson = require("Storage").readJSON("weather.json");
    weatherJson = storage.readJSON('weather.json');
    let temp = weatherJson.weather.temp - 273.15;

    return temp.toString().padStart(2,0) + "C";
  } catch (e) {
    return "";
  }
}

function drawSec() {
  var d = new Date();
  var s = d.getSeconds();
  g.reset();
  g.setFont("6x8", 3);
  g.drawImage(bgsec, 128, 42);
  g.drawString(s.toString().padStart(2,0), 128, 43);

  if (s === 0) {
    draw();
  }
}

function draw() {
  // work out how to display the current timed
  var d = new Date();
  g.reset();
  g.setFont("6x8", 3);

  var h = d.getHours(), m = d.getMinutes(); s = d.getSeconds();
  var time = h.toString().padStart(2, 0) + ":" + m.toString().padStart(2,0) + ":" + s.toString().padStart(2,0);

  // Clear the area where we want to draw the time
  g.drawImage(bgtime, 0, 42);
  
  // draw the current time
  g.drawString(time, 20, 43);
}

function drawSlow() {
  g.drawImage(bg, 0, 0);
  Bangle.drawWidgets();
  g.reset();

  var d = new Date();

  // update date
  var month = d.getMonth() + 1, day = dayNames[d.getDay()], date = d.getDate();
  var dayweek = day + " " + month.toString().padStart(2,0) + "-" + date.toString().padStart(2,0);

  g.setFont("6x8", 2);
  g.drawString(dayweek, 20, 25);

  // update battery

  var bat = E.getBattery();

  if (bat < 30) {
    g.setColor(255, 0, 0);
  } else {
    g.setColor(0, 255, 0);
  }

  g.drawString(bat + "%", 20, 70);

  // update temperature
  var temp = getTemp();

  g.setColor(g.theme.fg);

  g.drawString(temp, 70, 70);

  draw();
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
drawSlow();
draw();

// now draw every second
var secondInterval = setInterval(drawSec, 1000);
var slowInterval = setInterval(drawSlow, 600000);
