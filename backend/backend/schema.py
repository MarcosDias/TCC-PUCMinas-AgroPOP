import graphene

import cadastro.schema


class Query(
    cadastro.schema.QueryUsers, 
    cadastro.schema.QueryCategoria, 
    graphene.ObjectType):
    pass


class Mutation(cadastro.schema.Mutation, graphene.ObjectType,):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
