function TheLargestNumber(){
   let a1 = document.getElementById("firstid").value;
   let b1 = document.getElementById("secondid").value;
   let c1 = document.getElementById("thirdid").value;
   //var d = document.getElementById("rusultid");
 let a = parseFloat(a1);
  let b = parseFloat(b1);
  let c = parseFloat(c1);
  if ((a=='')||(b=='')||(c=='')){
       alert ('Input all numbers');
      } else {
        if (a>b){
          if (a>c){alert ('The 1st number is largest and equal: '+a);}
          else{ //else2
           if (a==c){ 
             alert ('The 1st and the 3rd numbers are equal. And equal: '+a)} else { //else 3
               if (a<c){
             alert ('The 3rd number is largest and equal: '+c); } //else 3    
               }
             } //else 2
          } //(a>b)
      
       if (a==b && a==c){
   alert ('All three numbers are equal. And equal:  '+a);
 }  
     if(b>a){
     if(b>c) { alert ('The 2nd number is largest and equal: '+b);
          }
     else { //else 1
       if(b<c){alert ('The 3rd number is largest and equal: '+c);}
     
     else { //else 2
       if(b==c){
       alert ('The 2nd and the 3rd numbers are equal. And equal: '+b)  
       }
        } //else 2
     } //else 1
   } // b>a
      if(a==b){
        if(a>c){
        alert ('The 1st and the 2nd numbers are equal. And equal: '+a)  
        }
        else {
          if(a<c){
            {alert ('The 3rd number is largest and equal: '+c);}
          }
        }
        
      } 
       
     } //end of 1st else
     } //end of function     
 
// function TheLargestNumber(a,b,c){
//    var a = document.getElementById("firstid").value;
//    var b = document.getElementById("secondid").value;
//    var c = document.getElementById("thirdid").value;

//   parseFloat(a);
//   parseFloat(b);
//   parseFloat(c);
//   if(a>=b&&a>=c){
//     console.log('1');}
//     else if(b>a&&b>c){console.log('2');}
//     else if(c>a&&c>b){console.log('3');
//   }
// }//f