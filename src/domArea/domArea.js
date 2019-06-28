function domArea(){
    this.height = window.screen.availHeight;
    
}
domArea.prototype.binding = function(className,Inside,outer){
    let dom = document.getElementsByClassName(className);
    window.onscroll = function(){
        for( let a = 0; a < dom.length ; a++ ) {
            if(dom[a].getBoundingClientRect().top < this.height && dom[a].getBoundingClientRect().top > 0){
                Inside();
            }else{
                outer();
            }
        }
    }
}

export default domArea