function count(){
    let shopString=localStorage.getItem('shops');
    if(shopString){
        let shopArray=JSON.parse(shopString);
        if(shopArray!=null){
            $('#count').text(shopArray.length);
        }
    }
    else{
        $('#count').text('0');
            
        }
}