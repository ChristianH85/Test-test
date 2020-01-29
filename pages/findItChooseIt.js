const chooseLink= function(){
    //finds first link with sahi. there is a warning for multiple matches 
    //and partial text could be refined but the spec said it should be the 
    //top result and it is 
    this.rightLink= element(by.partialLinkText('sahi'))
    this.clickLink = function(){
        this.rightLink.click()
    }
}
module.exports= new chooseLink