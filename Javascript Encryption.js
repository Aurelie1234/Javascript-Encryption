function encryption(s) {
    // Write your code here
    
let len=s.length;
let sqr=Math.sqrt(len);
let row=Math.floor(sqr);
let col=Math.ceil(sqr);


if(row*col<len) {
        if(row<col) row+=1;
        else col+=1;
    }
    
let arr=[];
let k=0;


for(let i=0;i<row;i++){              
        let sub=s.slice(k,k+col);          
        arr.push(sub);
        k+=col;
    }
    
let result='';


for(let i=0;i<arr[0].length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j][i]!=undefined) result+=arr[j][i];
            else break;
        }
        result+=' ';
    }
return result;
}
