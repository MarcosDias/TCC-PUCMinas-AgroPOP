from django.db import models


class Categoria(models.Model):
    nome = models.CharField(max_length=100)
    ordem = models.PositiveIntegerField(blank=True, null=True)
    super_categoria = models.ForeignKey(
        'Categoria',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='subcategorias'
    )

    def __str__(self):
        return self.nome

    class Meta:
        ordering = ('ordem',)
        verbose_name_plural = 'categorias'
        verbose_name = 'categoria'


class SubCategorias (models.Model):
    nome = models.CharField(max_length=100)
    super_categoria = models.ForeignKey(
        'Categoria',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='sub_categorias'
    )

    def __str__(self):
        return self.nome

    class Meta:
        ordering = ('nome',)
        verbose_name_plural = 'categorias'
        verbose_name = 'categoria'
