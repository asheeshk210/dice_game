function randomNumber() {
    var rnum = Math.floor((Math.random() * 6) + 1);

    var d1 = document.getElementById("dice_p1_1");
    var d2 = document.getElementById("dice_p1_2");
    var d3 = document.getElementById("dice_p1_3");
    var d4 = document.getElementById("dice_p1_4");
    var d5 = document.getElementById("dice_p1_5");
    var d6 = document.getElementById("dice_p1_6");

    switch (rnum) {
        case 1:
            
            d1.style.display = "block";
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            break;
        case 2:
            d1.style.display = "none";
            d2.style.display = "block";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            break;

        case 3:
            d1.style.display = "none";
            d2.style.display = "none";
            d3.style.display = "block";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            break;

        case 4:
            d1.style.display = "none";
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "block";
            d5.style.display = "none";
            d6.style.display = "none";
            break;

        case 5:
            d1.style.display = "none";
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "block";
            d6.style.display = "none";
            break;

        case 6:
            d1.style.display = "none";
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "block";
            break;
        default:
            break;
    }

    // *******************************for second dice*****************************

    var rnum2 = Math.floor((Math.random() * 6) + 1);

    var e1 = document.getElementById("dice_p2_1");
    var e2 = document.getElementById("dice_p2_2");
    var e3 = document.getElementById("dice_p2_3");
    var e4 = document.getElementById("dice_p2_4");
    var e5 = document.getElementById("dice_p2_5");
    var e6 = document.getElementById("dice_p2_6");

    switch (rnum2) {
        case 1:
            e1.style.display = "block";
            e2.style.display = "none";
            e3.style.display = "none";
            e4.style.display = "none";
            e5.style.display = "none";
            e6.style.display = "none";
            break;
        case 2:
            e1.style.display = "none";
            e2.style.display = "block";
            e3.style.display = "none";
            e4.style.display = "none";
            e5.style.display = "none";
            e6.style.display = "none";
            break;

        case 3:
            e1.style.display = "none";
            e2.style.display = "none";
            e3.style.display = "block";
            e4.style.display = "none";
            e5.style.display = "none";
            e6.style.display = "none";
            break;

        case 4:
            e1.style.display = "none";
            e2.style.display = "none";
            e3.style.display = "none";
            e4.style.display = "block";
            e5.style.display = "none";
            e6.style.display = "none";
            break;

        case 5:
            e1.style.display = "none";
            e2.style.display = "none";
            e3.style.display = "none";
            e4.style.display = "none";
            e5.style.display = "block";
            e6.style.display = "none";
            break;

        case 6:
            e1.style.display = "none";
            e2.style.display = "none";
            e3.style.display = "none";
            e4.style.display = "none";
            e5.style.display = "none";
            e6.style.display = "block";
            break;
        default:
            break;
    }

    //*************************condition to check who win************************* */

    var r1 = document.getElementById("result_p1");
    var r2 = document.getElementById("result_p2");
    var r3 = document.getElementById("result_p3");

    var i1 = document.getElementById("p1_win_happy");
    var i2 = document.getElementById("p1_lost_sad");
    var i3 = document.getElementById("p2_win_happy");
    var i4 = document.getElementById("p2_lost_sad");
    if (rnum > rnum2) {
        i1.style.visibility="visible";
            i2.style.visibility="visible";
            i3.style.visibility="visible";
            i4.style.visibility="visible";

        i1.style.display="block";
        i2.style.display="none";
        i3.style.display="none";
        i4.style.display="block";


        r1.style.display="block";
        r2.style.display="none";
        r3.style.display="none";
    }
    else{
        i1.style.visibility="visible";
            i2.style.visibility="visible";
            i3.style.visibility="visible";
            i4.style.visibility="visible";

            
        i1.style.display="none";
        i2.style.display="block";
        i3.style.display="block";
        i4.style.display="none";


        r1.style.display="none";
        r2.style.display="block";
        r3.style.display="none";
    }
    if(rnum==rnum2){
        i1.style.visibility="hidden";
        i2.style.visibility="hidden";
        i3.style.visibility="hidden";
        i4.style.visibility="hidden";

        
        r1.style.display="none";
        r2.style.display="none";
        r3.style.display="block";
    }
    
   
}