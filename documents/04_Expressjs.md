ExpressJS
=========

익스프레스는 노드로 만든 패키지 중 하나로 웹프레임웍이다. 우리는 익스프레스를 이용해 웹서버와 유사항 API 서버를 만들어 볼 것이다. 익스프레스의 자세한 사용법은 [여기](http://expressjs.com/ko/)를 참고하도록 하자. 모든 라이브러리는 시간을 내어 공식 문서를 꾸준히 읽어볼 것을 권장한다. 


## 익스프레스로 Hello world!

이전에는 노드로 헬로 월드를 찍어보는 간단한 코드를 작성했다. 지금 이후부터는 npm을 이용해 프로젝트를 구성할 것이다. 참고로 npm은 노드를 설치하게되면 함께 설치되는 명령어다. 

먼저 프로젝트 폴더를 만들고 프로젝트를 초기화 한다.

```
mkdir api-server-study 
cd api-server-study
npm init
```

프로젝트에 대한 정보를 묻고 입력하는 단계가 있는데 그냥 모두 기본값을 사용하면 된다. 그냥 엔터를 입력하고 넘어간다. 모두 완료되면 우리 프로젝트 폴더에는 pakcage.json 파일이 생성되었을 것이다. 이 파일은 프로젝트에서 두 가지 기능을 수행한다. 프로젝트에서 사용하는 노드 패키지를 설치한뒤 그 정보를 기록하는 것이 첫번째 기능이다. 그리고 몇가지 스크립트를 정의한 뒤 그 스크립트를 실행하는 기능이 두번재다.

이번에는 익스프레스를 설치해 보자.

```
npm install express --save-dev
```

npm을 이용해 express를 다운로드 하게되는데 node_moudles 폴더에 저장한뒤 package.json 파일의 dependencies에 익스프레스 설치 정보를 기록한다. 

```
"dependencies": {
    "express": "^4.14.0"
  },
```

app.js 파일을 만들고 익스프레스 모듈을 가져와서 서버 코드를 작성해 보자.

app.js:

```javascript
var express = require('express');
var app = express();

app.use('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

package.json에 노드 실행 스크립트를 추가하자.

```
"scripts": {
    "start": "node app"
  },
```

`npm start`로 서버를 구동한다.

```
npm start
```

서버는 3000번 포트에서 클라이언트 요청에 대해 리슨하게 된다. 그리고 터미널에는 "Example app listening on port 3000!" 란 문자열을 출력하게 된다. 

서버에서 hello world 문자열을 응답 받기 위해 curl을 이용해 서버로 리퀘스트를 전송해 보자.

```
curl -X GET 'localhost:3000/'
hello world
```

서버로부터 "hello world" 문자열을 응답 받았다. 


## 라우팅 

API 서버의 꽃은 라우팅이다. 라우팅은 클라이언트의 요청을 적절하게 분리하여 그에 맞는 응답을 보내주는 것이다. a라는 요청이 오면 A라는 로직이 구동되어 응답하고, b라는 요청이 들어오면 B라는 로직이 구동되어 응답되도록 연결해 주는 것이 라우팅의 역할이다. 익스프레스는 라우팅 함수를 제공하고 이것을 이용하여 구조적인 라우팅 로직을 만들어 낼 수 있다.

api/user/index.js 파일을 만들고 이곳에 유저(user) 리소스에 대한 라우팅 로직을 만들어 보겠다.
 
```
/api
  /user
    /index.js
app.js
```

```javascript
var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  res.send('post /users');
});

router.get('/me', function (req, res) {
  res.send('get /users/me');
});

router.get('/', function (req, res) {
  res.status(400).send('get /users');
});


router.put('/', function (req, res) {
  res.send('put /users');
});

router.delete('/', function (req, res) {
  res.send('delete /users');
});

module.exports = router;
```

express.Router() 함수로 라우팅 객체를 만들수 있다. 이 라우팅 객체는 HTTP 메소드 이름과 매치되는 함수를 제공하는데 이를 이용해 각 각의 메소드에 해당하는 라우팅을 설정할 수 있다. 각 함수의 첫번째 파라매터는 구체적인 URL을 설정한다. 그리고 두번째 함수는 그 URL로 요청이 들어올 경우 수행하는 콜백 함수인 셈이다. 다시 콜백함수는 req, res 두개의 파라매터를 받는다. 각 각 요청(request)과 응답(response) 객체인데 [여기 문서](http://expressjs.com/ko/4x/api.html#req)를 읽어 보도록 하자. 마지막에는 `module.exports`를 이용해 이 파일을 모듈로 만들고 다른 파일에서 가져다 사용할수 있도록 했다.
 
 이제 app.js에서 이 모듈을 사용해 보자.
 
app.js:

```javascript
var express = require('express');
var app = express();

app.use('/users', require('./api/user/index.js'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
```

`app.use('/users', require('./api/user/index.js'))` 부분이 추가 되었다. 

익스프레스는 미들웨어라는 개념이 있고 하나의 기능을 수행하는 것이다. 세션을 사용하려면 세션 미들웨어를 추가하고 쿠키가 필요하면 쿠피 미들웨어를 추가하는 형식이다. 미들웨어를 추가하려면 익스프레스 객체의 `use()` 함수를 사용한다.

다시 코드로 돌아와서 보면 우리는 방금 작성한 user 미들웨어를 사용한 셈이다. 단 `use()` 함수 첫번째 파라메터로 '/users' 문자열을 추가했는데 이것은 리퀘스트 중 '/users'라는 문자열로 시작되는 요청은 두번째 파라매터로 넣은 user 미들웨어에서 로직을 처리하겠다는 의미다. 

이러한 구조를 확장하면 각 리소스별로 로직을 분리하여 작성할 수 있다. 만약 post라는 리소스를 정의하고 이 리소스에 대한 API를 만든다고 생각해 보자. user 모듈을 만든것 처럼 /api/post/index.js 파일에 post에 대한 라우팅 로직을 만들고 app.js 파일에 '/posts' 문자열과 함께 post 미들웨어를 추가하면 될 것이다. 코드로 보면 이렇다. 
 
 ```javascript
 app.use('/users', require('./api/user/index.js'));
 app.use('/posts', require('./api/post/index.js'));
 ```


## 테스트 

