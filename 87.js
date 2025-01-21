var num=197,temp=num,sum=0,rem=0;
         var digits = [];
         while(temp>0){
             rem=temp%10;
             digits.unshift(rem);
             temp=parseInt(temp/10);
         }
         console.log(digits);
         while(sum<num){
             sum=0;
             for(let i=0;i<digits.length;i++){
                 sum+=digits[i];
                 digits[i]=digits[i+1];
             }
             digits[digits.length-1] = sum;
               console.log(digits);
         }
         if(num===sum){
             document.write("keith number");
         }else
         document.write("not keith number");