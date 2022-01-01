# Especificação dos Requisitos

### Especificações dos Casos de Uso


### Diagrama dos Casos de Uso
```plantuml
@startuml Diagrama de Casos de Uso

left to right direction
:Aluno de Ecomp:
:Visitante: 
:Servidor de Email:
:Professor de Ecomp: 
:Orientador:
:Co-Orientador:
:Banca Examinadora:


package SiteDeAcompanhamentoDosTCCsDeEcomp{
    (Criar Conta) 
    (Fazer Login) 
    (Visualizar Cronograma)
    (Solicitar Registro do TCC)
    (Acessar Lista de TCCs Registrados)
    (Baixar TCC)
    (Avaliar TCC)
    (Solicitar Certificado)
    (Agendar Apresentacao de Defesa do TCC)
    (Buscar TCC)
    (Solicitar Remocao do TCC)
}

:Visitante: --> (Visualizar Cronograma)
:Visitante: --> (Acessar Lista de TCCs Registrados)
:Visitante: --> (Baixar TCC)
:Visitante: --> (Buscar TCC)

:Professor de Ecomp: -up-> (Criar Conta)
:Professor de Ecomp: -up-> (Fazer Login)
:Professor de Ecomp: -up-> (Agendar Apresentacao de Defesa do TCC)
:Professor de Ecomp: -up-> (Visualizar Cronograma)
:Professor de Ecomp: -up-> (Acessar Lista de TCCs Registrados)
:Professor de Ecomp: -up-> (Baixar TCC)
:Professor de Ecomp: --> (Buscar TCC)

:Aluno de Ecomp: --> (Criar Conta)
:Aluno de Ecomp: --> (Fazer Login)
:Aluno de Ecomp: --> (Solicitar Certificado)
:Aluno de Ecomp: --> (Visualizar Cronograma)
:Aluno de Ecomp: --> (Baixar TCC)
:Aluno de Ecomp: --> (Acessar Lista de TCCs Registrados)
:Aluno de Ecomp: --> (Solicitar Registro do TCC)
:Aluno de Ecomp: --> (Buscar TCC)
:Aluno de Ecomp: --> (Solicitar Remocao do TCC)

:Orientador: -up-|> :Banca Examinadora:
:Co-Orientador: -up-|> :Banca Examinadora:
:Banca Examinadora: -up-|> :Professor de Ecomp:
:Banca Examinadora: --> (Avaliar TCC)

(Agendar Apresentacao de Defesa do TCC) --> :Aluno de Ecomp:
(Criar Conta) --> :Servidor de Email:
(Solicitar Registro do TCC) --> :Orientador:
(Solicitar Certificado) --> :Professor de Ecomp:
(Solicitar Remocao do TCC) --> :Professor de Ecomp:

@enduml
```