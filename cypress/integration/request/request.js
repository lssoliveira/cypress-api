// STEPS DE TESTE DO CUCUMBER (.feature) UTILIZANDO CYPRESS.

import postsapi from '../../api/posts-api'
import signupFactory from '../../factories/signup-factory'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const API_URL = Cypress.env('API_BASE_URL')

Given('que possuo as informações necessárias para fazer a request GET do cenário {string}', (type) => {
  // baseUrl: https://jsonplaceholder.typicode.com
  switch (type) {
    case 'negativo':
      postsapi.requestGet.url = `${API_URL}/posts/1500`;
      break;
    default:
  }
})

When('chamar o endpoint posts.GET do cenário {string}', (type) => {
  cy.request(postsapi.requestGet)
  .then((response) => {
    switch (type) {
      case 'negativo':
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty
        break;
      default:
        expect(response.status).to.eq(200);
        expect(response.body).hasOwnProperty('id', 'userId', 'title', 'body');
        expect(response.body[0]).has.property('id', 1);
        expect(response.body[0]).has.property('userId', 1);
        expect(response.body[0]).has.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        expect(response.body[0]).has.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
    }
  })    
})

Then('ter validado o response', () => {
  // AS VALIDAÇÕES FORAM FEITAS JUNTAMENTE COM A REQUEST NO STEP 'When' (Quando).
})

Given('que possuo as informações necessárias para fazer a request POST do cenário {string}', (type) => {
  // baseUrl: https://jsonplaceholder.typicode.com
  switch (type) {
    case 'negativo':
      postsapi.requestPost.url = `${API_URL}/posts/4004`;
      break;
    default:
  }
})

When('chamar o endpoint posts.POST do cenário {string}', (type) => {
  const PostBodyRequest = signupFactory.PostBodyRequest()

  cy.request(postsapi.requestPost)
  .then((response) => {
    switch (type) {
      case 'negativo':
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty
        break;
      default:
        expect(response.status).to.eq(201);
        expect(response.body).has.property('id', PostBodyRequest.id);
        expect(response.body).has.property('userId', PostBodyRequest.userId);
        expect(response.body).has.property('title', PostBodyRequest.title);
        expect(response.body).has.property('body', PostBodyRequest.body)
    }
  })
})

Given('que possuo as informações necessárias para fazer a request PUT do cenário {string}', (type) => {
  // baseUrl: https://jsonplaceholder.typicode.com
  switch (type) {
    case 'negativo':
      postsapi.requestPut.url = `${API_URL}/posts`;
      break;
    default:
  }
})

When('chamar o endpoint posts.PUT do cenário {string}', (type) => {
  const PutBodyRequest = signupFactory.PutBodyRequest()

  cy.request(postsapi.requestPut)
  .then((response) => {
    switch (type) {
      case 'negativo':
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty
        break;
      default:
        expect(response.status).to.eq(200);
        expect(response.body).has.property('id', PutBodyRequest.id);
        expect(response.body).has.property('userId', PutBodyRequest.userId);
        expect(response.body).has.property('title', PutBodyRequest.title);
        expect(response.body).has.property('body', PutBodyRequest.body)
    }
  })
})

Given('que possuo as informações necessárias para fazer a request PATCH do cenário {string}', (type) => {
  // baseUrl: https://jsonplaceholder.typicode.com
  switch (type) {
    case 'negativo':
      postsapi.requestPatch.url = `${API_URL}`;
      break;
    default:
  }
})

When('chamar o endpoint posts.PATCH do cenário {string}', (type) => {
  const PatchBodyRequest = signupFactory.PatchBodyRequest()

  cy.request(postsapi.requestPatch)
  .then((response) => {
    switch (type) {
      case 'negativo':
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty
        break;
      default:
        expect(response.status).to.eq(200);
        expect(response.body).has.property('id', 20);
        expect(response.body).has.property('userId', 2);
        expect(response.body).has.property('title', PatchBodyRequest.title);
        expect(response.body).has.property('body', PatchBodyRequest.body)
    }
  })
})

Given('que possuo as informações necessárias para fazer a request DELETE do cenário {string}', (type) => {
  // baseUrl: https://jsonplaceholder.typicode.com
  switch (type) {
    case 'negativo':
      postsapi.requestDelete.url = `${API_URL}`;
      break;
    default:
  }
})

When('chamar o endpoint posts.DELETE do cenário {string}', (type) => {
  cy.request(postsapi.requestDelete)
  .then((response) => {
    switch (type) {
      case 'negativo':
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty
        break;
      default:
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty
    }
  })
})