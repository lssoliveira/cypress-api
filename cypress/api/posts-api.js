// ORQUESTRAÇÃO DE REQUESTS DA API POSTS.

import SignupFactory from '../factories/signup-factory'

const API_URL = Cypress.env('API_BASE_URL')
const headersRequest = Cypress.env('headers')
const PostBodyRequest = SignupFactory.PostBodyRequest()
const PutBodyRequest = SignupFactory.PutBodyRequest()
const PatchBodyRequest = SignupFactory.PatchBodyRequest()

class PostsApi {

    requestGet = {
        method: 'GET',
        url: `${API_URL}/posts`,
        headers: headersRequest,
        failOnStatusCode: false
    };

    requestPost = {
        method: 'POST',
        url: `${API_URL}/posts`,
        headers: headersRequest,
        body: PostBodyRequest,
        failOnStatusCode: false
    }

    requestPut = {
        method: 'PUT',
        url: `${API_URL}/posts/40`,
        headers: headersRequest,
        body: PutBodyRequest,
        failOnStatusCode: false
    }

    requestPatch = {
        method: 'PATCH',
        url: `${API_URL}/posts/20`,
        headers: headersRequest,
        body: PatchBodyRequest,
        failOnStatusCode: false
    }

    requestDelete = {
        method: 'DELETE',
        url: `${API_URL}/posts/5`,
        headers: headersRequest,
        failOnStatusCode: false
    }
}

export default new PostsApi;