from typing import Any
from django.db import models
from django.contrib.auth.models import (
                  BaseUserManager,AbstractBaseUser)
from django.contrib.auth.models import PermissionsMixin

class UserManager(BaseUserManager):
    # create and sava user with an email, name and password
    def create_user(self, email, name, is_admin=False, password=None):
        if not email:
            raise ValueError('User must have an email address')
        user = self.model(
            email = self.normalize_email(email),
            name = name,
            is_admin = is_admin
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    # create and sava supeuser with an email, name and password
    def create_superuser(self, email, name, is_admin=False, password=None):
        user = self.model(
            email = email,
            password=password,
            name = name,
            is_admin = is_admin
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# custum user model
class User(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(
        verbose_name='Email',
        max_length=255,
        unique=True,
    )

    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    objects = UserManager()


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','is_admin']

    def __str__(self):
        return self.email
    
    def get_full_name(self):
        return self.name
    
    def has_perm(self):
        "dose the user haav a specific permission?"
        return self.is_admin
    
    def has_module_perms(self, app_lavel):
        return True
    
    @property
    def is_staff(self):
        return self.is_admin


    


