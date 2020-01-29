const gSearch =  function(){
  this.startPage ='http://google.com'
  this.input=element(by.name('q'))
  this.searchBtn= element.all(by.buttonText('Google Search')).get(1)
  this.searchTerm=function(query){
    //takes input and types characters specified in spec
    this.input.sendKeys(query)
  }
  this.clickSearch= function(){
    // chooses the right button 
    this.searchBtn.click()
  }
};
module.exports= new gSearch()