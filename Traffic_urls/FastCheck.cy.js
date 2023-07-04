import urls from './urls.js';
const failedUrl = []
it("Fast Checking traffic urls", () => {
  urls.forEach((url) => {
    cy.request({
      url: url.url,
      failOnStatusCode:false
    })
      .then((resp) => {
        if(resp.status===200){
          expect(resp.status).to.eq(200);
        }
       else{
        failedUrl.push(url.url)
        expect(resp.status).to.eq(404)
       }
      })
  });
});


