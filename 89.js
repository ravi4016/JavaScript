let array1=[1,3,7,8];
           let array2=[2,4,2,3,4];
         
           let array3=array1.concat(array2);
           array3.sort();
           document.write(array3);
           var len=array3.length;
           var index=parseInt(len/2);
          document.write(array3[index]);
               if(len%2==0){
                   document.write(","+array3[index-1]);
              }