let arr=[4, 5, 67, 1, 0, 17]; 
let medyana, arif, min=999999999, max=-99999999999; 
let sum=0;
for ( let i=0; i<arr.length; i++ ){
    sum=sum+arr[i]; 
    if ( arr[i]<min )
        min=arr[i]; 
    if ( arr[i]>max )
        max=arr[i]; 
}
arif=sum/arr.length; 
if ( arr.length%2!=0 ){
    medyana=arr[arr.length/2-1]; 
}else
    medyana=(arr[arr.length/2-1]+arr[arr.length/2])/2; 

console.log( arif, max, min, medyana )