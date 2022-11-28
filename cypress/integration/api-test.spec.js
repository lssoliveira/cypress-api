// ARQUIVO DE TESTES APENAS COM CYPRESS. (sem cucumber)

import postsapi from '../api/posts-api'
import signupFactory from '../factories/signup-factory'

describe("Testing API Endpoints Using Cypress", () => {

  it('GET Request', () => {
    cy.request(postsapi.requestGet)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).has.property('id', 1);
      expect(response.body[0]).has.property('userId', 1);
      expect(response.body[0]).has.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      expect(response.body[0]).has.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
    })
  })

  it("POST Request", () => {
    const PostBodyRequest = signupFactory.PostBodyRequest()

    cy.request(postsapi.requestPost)
    .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.be.a('number')
      expect(response.body).has.property('id', PostBodyRequest.id);
      expect(response.body).has.property('userId', PostBodyRequest.userId);
      expect(response.body).has.property('title', PostBodyRequest.title);
      expect(response.body).has.property('body', PostBodyRequest.body)
    })
  })

  it("PUT Request", () => {
    const PutBodyRequest = signupFactory.PutBodyRequest()

    cy.request(postsapi.requestPut)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.be.a('number')
      expect(response.body).has.property('id', PutBodyRequest.id);
      expect(response.body).has.property('userId', PutBodyRequest.userId);
      expect(response.body).has.property('title', PutBodyRequest.title);
      expect(response.body).has.property('body', PutBodyRequest.body)
    })
  })

  it("PATCH Request", () => {
    const PatchBodyRequest = signupFactory.PatchBodyRequest()

    cy.request(postsapi.requestPatch)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.property('id', 20);
      expect(response.body).has.property('userId', 2);
      expect(response.body).has.property('title', PatchBodyRequest.title);
      expect(response.body).has.property('body', PatchBodyRequest.body)
    })
  })

  it("DELETE Request", () => {
    cy.request(postsapi.requestDelete)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.empty
    })
  })
})