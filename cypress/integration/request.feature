Feature: API - JSONPLACEHOLDER
  
  Validação de contratos Positivos e Negativos nas requisições GET, POST, PUT, PATCH, DELETE

  Scenario Outline: Validar o contrato <tipo> do endpoint posts.GET
    Given que possuo as informações necessárias para fazer a request GET do cenário "<tipo>"
    When chamar o endpoint posts.GET do cenário "<tipo>"
    Then ter validado o response
      Examples:
      | tipo     |
      | positivo |
      | negativo |

  Scenario Outline: Validar o contrato <tipo> do endpoint posts.POST
    Given que possuo as informações necessárias para fazer a request POST do cenário "<tipo>"
    When chamar o endpoint posts.POST do cenário "<tipo>"
    Then ter validado o response
      Examples:
      | tipo     |
      | positivo |
      | negativo |    
  
  Scenario Outline: Validar o contrato <tipo> do endpoint posts.PUT
    Given que possuo as informações necessárias para fazer a request PUT do cenário "<tipo>"
    When chamar o endpoint posts.PUT do cenário "<tipo>"
    Then ter validado o response
      Examples:
      | tipo     |
      | positivo |
      | negativo |

  Scenario Outline: Validar o contrato <tipo> do endpoint posts.PATCH
    Given que possuo as informações necessárias para fazer a request PATCH do cenário "<tipo>"
    When chamar o endpoint posts.PATCH do cenário "<tipo>"
    Then ter validado o response
      Examples:
      | tipo     |
      | positivo |
      | negativo |


  Scenario Outline: Validar o contrato <tipo> do endpoint posts.DELETE
    Given que possuo as informações necessárias para fazer a request DELETE do cenário "<tipo>"
    When chamar o endpoint posts.DELETE do cenário "<tipo>"
    Then ter validado o response
      Examples:
      | tipo     |
      | positivo |
      | negativo |