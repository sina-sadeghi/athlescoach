from django.contrib import admin
from account.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.

class UserModelAdmin(BaseUserAdmin):
    # the fields to be used in displayin the user model
    #these override the defenation on the base UserModelAdmin
    #the refrence specific fields on auth.User.

    list_display = ('id', 'email', 'name','is_active', 'is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        ('User Credentials', {
            "fields": ('email','password'       
            ),
        }),
        ('Personal info', {
            "fields": ('name',
            ),
        }),
        ('Permissions', {
            "fields": ('is_admin','is_active'
            ),
        }),
    )

    add_fieldsets = (
        (None, {
            'classes' : ('wide',),
            'fields' : ('email', 'name', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email','id')


#regiser the new usermodeladmin
admin.site.register(User, UserModelAdmin)
    
