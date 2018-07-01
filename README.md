# AgroPOP - Trabalho de Conclusão de Curso de Arquitetura de Software Distribuído

Trabalho de conclusão de curso de Arquitetura de Software Distribuído pela PUCMinas. AGROPOP – UM SISTEMA DE E-COMMERCE DE PRODUTOS AGRÍCOLAS

Para acessar o ambiente em produção:
- https://agropop.tk - E-Commerce e Backoffice
- https://agropop-api.herokuapp.com/admin/ - Área Administrativa do sistema

## Pré-Requisitos para execução

Com o Python (3.6) e do Node (10.0.0) instalado.

Inicie criando um ambiente virtual Python (Virtualenv, mas também indico o Virtualenvwrapper).

Com o ambiente virtual ativo:

- ```$ pip install -r requirements.txt```

Acesse a pasta back-end
Crie o super usuário

- ```$ python manage.py createsuperuser```

Preencha o banco com dados básicos

- ```$ python manage.py loaddata dumpdata.db.json```

Rode o back-end

- ```$ python manage.py runserver 5000```

Em um novo terminal
Acesse o front-end

- ```$ yarn install```

Rodando o front-end

- ```$ yarn dev```