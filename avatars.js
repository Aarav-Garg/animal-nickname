    function avatar(){
    var possible = ["Budgerigar.svg","Cassowary.svg","Galah.svg","ThornyDevil.svg","BlueWhale.svg","Wombat.svg","Quoll.svg","Numbat.svg","Kangaroo.svg","Platypus.svg","Frogmouth.svg","FairyWren.svg","Corella.svg","BlackSwan.svg","Cockatoo.svg","Gecko.svg","Emu.svg","TassieDevil.svg","SugarGlider.svg","Echidna.svg","FlyingFox.svg","Magpie.svg","Wallaby.svg","Goanna.svg","Bilby.svg"]  
    
    var LenNum = possible.length;
    var pos = Math.random() * (LenNum - 1) + 1;
    var Num = Math.trunc(pos);
    var finFil = possible[Num];
    var prefix = "avatar/";
    var final = prefix.concat(final);
    return(final);
    console.log("Made using Aarav Garg's Avatar Generator. © 2020");
    }
