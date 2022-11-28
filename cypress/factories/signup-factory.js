// GERADOR DA MASSA UTILIZADA NOS TESTES

const headersRequest = Cypress.env('headers')

export default {

    PostBodyRequest: function () {

        var bodyRequestData = {
            title: 'testepost',
            body: 'fazendo request post',
            userId: 80,
            id: 101
        }
        return bodyRequestData
    },

    PutBodyRequest: function () {

        var bodyRequestData = {
            title: 'testeput',
            body: 'fazendo request put',
            userId: 1,
            id: 40
        }
        return bodyRequestData
    },

    PatchBodyRequest: function () {

        var bodyRequestData = {
            title: 'testepatch',
            body: 'fazendo request patch'
        }
        return bodyRequestData
    },
}
