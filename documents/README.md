백엔드 개발자를 위한 노드 개발 노하우 
=============================

## 목차 

### 기본 

- Node.js
- 사용하는 툴 소개
- HTTP에 대해
- Express.js
- Test
    - supertest
    - mocha
    - should
    - istanbul
    
- Documentation
    - Swagger

### 기능 구현

- Authentication
    - passport
    - session authentication
    - jwt (json web token)
    - express-jwt

- Database and ORM
    - Mysql
        - node-mysql
        - sequelize
        - modeling
    - Mongodb
        - mongoose

- Libraries
    - Why I add lib folders?

- Components
    - Error
    - Startup check
    - Push Notification
        - apns
        - gcm
        - baidu push
        - aws sns
    - Mail
        - node-mailer
        - aws ses
    - Image
        - 로컬에 구현
        - aws lambda

### 배포, 운영

- Deploy
    - aws
    - ec2
    - forever, pm2
    - git hooks를 이용한 배포
    - elastic beanstalk
    - elastic beanstalk cli