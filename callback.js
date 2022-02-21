const workCallback = (callback) =>{
    setTimeout(()=>{
        //callback('This is my error', undefined);
        callback(undefined, ['vishal','vidit']);
    },2000);

}

workCallback((error, result)=>{
    if(error){
        return console.log(error); 
    }
    
    console.log(result);
})