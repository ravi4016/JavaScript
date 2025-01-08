let Distance=8;
let Fare;
if(Distance<=5)
    {
    Fare=Distance*10;
    }
    else if(Distance>5)
        {
            extradistance=Distance-5;
            Fare=5*10+extradistance*8;
            console.log("Total traveled charge is "+Fare+" Rs")
        }
