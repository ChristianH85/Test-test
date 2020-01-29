const pageData= function(){
    
   this.dataPromise= async function(){
       
        this.dataA=element(by.xpath('/html/body/footer/ul/li[2]/span[1]/a')).getText()
        this.dataB=element(by.xpath('/html/body/footer/ul/li[2]/span[2]/a')).getText()
        this.dataC=element(by.xpath('/html/body/footer/ul/li[2]/span[3]/a')).getText()

        let data1=element(by.xpath('/html/body/footer/ul/li[2]/span[1]/a')).getText()
        let data2=element(by.xpath('/html/body/footer/ul/li[2]/span[2]/a')).getText()
        let data3=element(by.xpath('/html/body/footer/ul/li[2]/span[3]/a')).getText()
      
        
        let res1 = await data1
        let res2 = await data2 
        let res3 = await data3
        console.log('Sales'+" "+res1)
        console.log('Support'+" "+res2)
        console.log('Phone'+" "+res3)
        return [res1,res2,res3]
    }

}
module.exports= new pageData