
describe('Test',function(){
    
    const gSearch= require('./pages/gSearch') 
    const chooseLink= require('./pages/findItChooseIt')
    const pageData= require('./pages/returnValues')
    it('should navigate to google enter text and submit', function(){
        browser.waitForAngularEnabled(false);
        browser.get(gSearch.startPage.toString())
        expect(browser.getTitle()).toEqual('Google');
        gSearch.searchTerm('sahi automation tool')
        gSearch.clickSearch()
       
        })
    it('should find the right link and click', function(){
        chooseLink.clickLink()
      })
    it('should have matching data', function(){
        browser.waitForAngularEnabled(false);
        pageData.dataPromise()
        expect(pageData.dataA).toEqual('sales@sahipro.com')
        expect(pageData.dataB).toEqual('support@sahipro.com') 
        expect(pageData.dataC).toEqual('+91 80 4865 7865') 
    })
   
})