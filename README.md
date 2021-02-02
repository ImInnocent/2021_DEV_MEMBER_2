# Tart Dev Assignment 2
Backend: Python (Django)   
Frontend: Javascript (React) + Material-UI   
Database: sqlite

# Trouble Shootings
원인: Channels의 버전이 3.0 미만일 경우에 에러 발생   
해결: pip install -U channels
https://stackoverflow.com/questions/64668204/attributeerror-type-object-chatconsumer-has-no-attribute-as-asgi   
    
원인: Channels Redis가 버전이 일정 이상일 경우 에러 발생
해결: pip install channels-redis==2.4.2
channels-redis를 설치 후, channels를 따로 최신으로 설치해야 한다.
consumer.as_asgi()를 호출하려면 3.0이상이어야 하기 때문 
https://stackoverflow.com/questions/62786988/redis-err-unknown-command-bzpopmin



# References
Django channels
https://channels.readthedocs.io/en/latest/tutorial/part_3.html
   
React Router DOM
https://reactrouter.com/web/guides/quick-start

Material-UI   
https://material-ui.com/
