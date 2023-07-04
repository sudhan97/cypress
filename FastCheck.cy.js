import urls from "../sitemapurl/urls.json";
const failedUrl = []
it("should succesfully load each url in the sitemap", () => {
  urls.forEach((url) => {
    cy.request({
      url: url,
      failOnStatusCode:false
    })
      .then((resp) => {
        if(resp.status===200){
          expect(resp.status).to.eq(200);
        }
       else{
        failedUrl.push(url)
        expect(resp.status).to.eq(404)
       }
      })
  });
});


