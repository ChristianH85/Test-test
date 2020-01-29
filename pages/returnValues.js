const pageData= function(){
    
   this.dataPromise= async function(){
        //promise prevents test from failing before data is present to be tested
        this.data= new Promise((resolve, reject)=>{
        this.dataA=element(by.xpath('/html/body/footer/ul/li[2]/span[1]/a')).getText()
        this.dataB=element(by.xpath('/html/body/footer/ul/li[2]/span[2]/a')).getText()
        this.dataC=element(by.xpath('/html/body/footer/ul/li[2]/span[3]/a')).getText()
        })
        this.results=await this.data
        
        return this.results
    }

}
module.exports= new pageData