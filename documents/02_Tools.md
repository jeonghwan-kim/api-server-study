사용하는 툴 소개
============

## 깃 (Git)

개발하기도 바쁜데 소스도 관리해야하나 라는 의문이 들지 모르겠지만 좋은 개발자는 소스관리도 잘한다. 깃은 리눅스를 만든 리누스 또르발스가 만든 오픈소스 중 하나다. 그가 리눅스 커널을 만들때 소스 관리를 위해 깃을 만들어 사용했고 둘 다 오픈소스로 배포했다. 당시 리눅스 커널 개발은 세계 각지의 커널 개발자들이 붙어서 작업했는데 그러한 개발 방식이 깃을 통해 이뤄졌고 깃은 그러한 원격지에서의 협력을 위한 특징을 잘 가지고 있다.

우리는 깃의 기능중 일부만 사용할 것인데 코드를 작업 내용별로 저장하고 중앙 저장소에 업로드한다. 개발팀에는 마스터 개발자를 한명 두고 이 친구는 업로드 되는 소스들을 하나로 합치는 작업을 한다. 당연히 프로젝트의 전체 코드에 대한 이해와 통찰이 있어야만 가능한다.

그럼 깃에서 사용할 기능들에 대해 알아보자.

맥에서는 간다히 홈브루로 깃을 설치할 수 있다. (윈도우와 리눅스는 생략) 2.7.0 버전의 깃이 설치되었다.

```
brew install git
git –version
git version 2.7.0
```

깃으로 코드 관리할 프로젝트 폴더를 hello-world란 이름으로 만들고폴더로 이동한다.

```
mkdir hello-world && cd hellp-world
```

전에 만든 헬로 월드 코드를 작성한 파일을 다시 만든다.

```
echo “console.log(‘hello world’);” > app.js
```

자 여기서 부터가 깃 명령어를 사용한 코드 관리 방법을 설명하는 부분이다. 아직 헬로 월드 폴더에는 깃을 적용하지 않았다. 깃을 통해서 현재 폴더를 관리하려면 init 명령어로 깃을 초기화 해야한다.

```
git init
```

명령어를 실행하고 나면 현재 폴더에는 .git이라는 이름의 숨김 폴더가 만들어 진다. 현재 폴더에 파일이 추가되거나 편집되는 등 코드 변화가 감지되면 깃은 이러한 변경이력을 추적하게 된다.

깃에서는 코드의 현재 상태를 저장하는 것을 “커밋(commit)”한다라고 표현한다. 커밋을 일종의 코드 스냅샷이라고 생각하면 된다.  그러면 최초의 커밋을 하나 만들어 보겠다

```
git add .
git commit –m “Initial commit”
```

이 두개의 명령어를 통해 변경된 코드를 모아서 하나의 커밋을 만들었다.커밋할 때는 개발자가 알아보기 쉽게 변경 내용에 대한 간단한 메모를 남길 수 있는데–m옵션을 추가하여 사용할 수 있다.

그럼 커밋되었는지 확인해 보자.

```
git log
```

커밋된 정보를 확인할 수 있다.

이렇게 커밋한 코드 변경이력은 여전히 개발자의 컴퓨터에 남아있다. 팀으로 개발 프로젝트를 하는 경우는 공동으로 사용하는 코드 저장소가 있어야하는데 이것을 깃 서버라고 한다. 반대로 우리가 지금 사용했던 것은 깃 클라이언트다. 별도로 깃 서버를 구축하여 사용할수도 있지만 우리는 깃헙이라는 웹서비스를 이용해서 우리의 코드 저장소로 삼겠다. 별도로 깃 서버를 구축하지 않고 깃헙의 깃 서버를 사용하는 것이다.


## 깃헙 (Github)

깃을 처음 접하게되는 이들이 혼동하는 것중에 하나는 깃헙을 깃과 동일하게 여기는 것이다. 아니다. 깃은 리누스가 만든 오픈소스이고 깃헙은 깃을 이용하여 만든 개발자를 위한 서비스이다. 깃을 좀더 편리하게 사용할수 있도록 여러가지 부가 기능을 추가해 놓은 것이다. 마치 워드프레스 오픈소스 코드가 있고 (wordpress.org) 이를 이용한 블로깅 서비스를 만든 워드프레스 닷컴(wordpress.com)이 별도로 있는 것과 같다.

작업을 계속 이어가겠다. 우리 컴퓨터에서 만든 헬로월드 프로젝트의 최초 커밋을 코드 저자소인 깃헙으로 업로드 해보자. 깃에서는 이것을 “푸시(push)”한다라고 표현한다.

깃헙 페이지로 이동해서 헬로월드 저장소를 하나 만든다.

만든 저장소의 주소를 복사한다. 내 컴퓨터의 깃은 이 주소를 통해 원격지로 코드를 푸시할수 있게될 것이다. 그럼 다시 내 컴퓨터의 쉘로 와서 이 원격지 주소를 우리 로컬 컴퓨터의 프로젝트와 연결해 보겠다.

```
git remote add origin [remote address]
```

이제 남은 것은 push 명령어를 통해 커밋한 코드를 원격지로 업로드 할 단계다.

```
git push origin master
[detail report]
```

코드가 전송되었다. 깃헙으로 다시 가서 화면을 갱신해보자. App.js  파일이 보일 것이다.

여기까지가 커밋과 푸시를 이용하여 코드를 원격 저장소에 업로드 해보았다. 이것이 가장 자주 사용하는 깃 명령어이고 개발 절차이기 때문에 꼭 손에 익도록 사용해야한다.

이외에도 깃은 브랜치(branch), 풀(pull) 등의 명령어를 사용하고 깃헙은 풀 리퀘스트(pull request) 라는 기능을 깃과는 별개로 제공한다. 이후 프로젝트를 진행하면서 이러한 기능들에 대해 설명하도록 하겠다.


## 웹스톰

텍스트 에디터 매우 개인적인적인 것이라서 뭘 사용하라고 강제할 수는 없는 일이다. 맥 환경에서 노드를 개발하는데 주로 사용했던 텍스트 에디터는 아래 네 가지로 정리할 수 있겠다.

- 서브라임텍스트
- 아톰
- 비쥬얼 스튜디오 코드
- 웹스톱


각각의 텍스트 에디터는 나름 장점과 단점이 있겠지만 나는 웹스톰을 권장한다. 웹스톰은 단순한 텍스트 에디터가 아니라 통합개발환경(IDE) 이다. 자바스크립트 문법 강조 기능, 코드 자동완성 등을 포함하여 텍스트 에디터로서의 기본적인 기능이 우선 갖춰줬다. 위에서 얘기한 깃을 GUI로 사용할수 있는 패널이 있다. 내장 터미널이 있어 프로젝트에 해당하는 경로로 쉘이 바로 이동된다. 노드 공식 사이트에서 제공하는 디버깅 툴이 있기는 하지만 여전히 불편하다. Gcc로 개발할 때 gdd를 사용하는 느낌이랄까? 웹스톰은 내장된 노드 디버거가 있어서 훨씬 쉽게 자바스크립트를 디버깅할 수 있는 환경을 제공한다.

물론 위에 언급한 다른 텍스트 에디터에서도 제공하는 기능이고 별도의 프로그인을 설치하면 사용 가능하다. 때문에 본인에 맞는 텍스트 에디터를 선택하길 바란다.

여기서는 웹스톰을 사용할 것인데 세부적인 사용방법에 대해서는 이후 각 섹션에서 필요한 부분에 대해 부분적으로 설명하도록 하겠다.