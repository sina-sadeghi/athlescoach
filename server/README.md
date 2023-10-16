DjangoDjoserAuthentication

Api Documentation with postman:
https://web.postman.co/workspace/6c855e4f-0e75-43df-8fba-8e9f54b55be7/documentation/28427492-20291ac0-a55c-4b4d-b988-82baa274efea

with this api you can Implementation base authentication with jwt by Djoser library .

in this project first user send email,name and password then we send activate link to his/her email and afer clik on link we register his account.
for login we use email and password .
when user login with jwt we create access and refresh token .

for familier with this project you can read Djoser documentation in below link:

https://djoser.readthedocs.io/en/latest/introduction.html





Api Documentation with postman:

https://web.postman.co/workspace/6c855e4f-0e75-43df-8fba-8e9f54b55be7/documentation/28427492-20291ac0-a55c-4b4d-b988-82baa274efea

for run this project after clone with this command:
```
git clone https://github.com/nikkhoofard/DjangoDjoserAuthentication.git
```
create virtualenv with this command and install lib from requirments file:
```
virtualenv venv
```
and then activate virtual:
```
venv/scripts/activae
```
and the run this command:
```
pip install -r requirements.txt
```
for run project first run makemigrations and migrate:
```
py manage.py makemigrations
```
and then :
```
py manage.py migrate
```
now run server and use from endpoints:
```
py manage.py runserver
```



