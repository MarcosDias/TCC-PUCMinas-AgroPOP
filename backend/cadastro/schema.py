from django.contrib.auth import get_user_model

import graphene
import graphql_jwt
from graphene_django import DjangoObjectType

from cadastro.models import Categoria


class UserType(DjangoObjectType):
    id = graphene.ID()
    name = graphene.String()
    email = graphene.String()
    is_staff = graphene.Boolean()
    is_superuser = graphene.Boolean()

    class Meta:
        model = get_user_model()
        only_fields = ['id', 'name', 'email', 'is_staff', 'is_superuser']


class QueryUsers(graphene.ObjectType):
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return get_user_model().objects.all()


class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        name = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate(self, info, name, password, email):
        newUser = get_user_model()(email=email)
        newUser.set_password(password)
        newUser.name = name
        newUser.save()

        return CreateUser(user=newUser)


class TokenAuth(graphql_jwt.JSONWebTokenMutation):
    default_message = 'Por favor, utilize credenciais válidas!'

    user = graphene.Field(UserType)

    @classmethod
    def resolve(cls, root, info):
        return cls(user=info.context.user)


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    token_auth = TokenAuth.Field()
    # verify_token = graphql_jwt.Verify.Field()
    # refresh_token = graphql_jwt.Refresh.Field()


class CategoriaType(DjangoObjectType):
    class Meta:
        model = Categoria


class QueryCategoria(object):
    all_categorias = graphene.List(CategoriaType)
    all_subcategorias = graphene.List(CategoriaType)

    def resolve_all_categorias(self, info, **kwargs):
        return Categoria.objects.filter(super_categoria__isnull=True)

    def resolve_all_subcategorias(self, info, **kwargs):
        return Categoria.objects.select_related('categoria').order_by('name')
