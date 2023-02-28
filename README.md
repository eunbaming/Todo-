# Todo 앱


Javascipt로 아이템 추가와 삭제, 필터링이 가능한 반응형 웹페이지 구축

![Todo-app](https://user-images.githubusercontent.com/110072947/221762117-884feca1-5d95-4506-9968-605f144f1bc8.png)

+ Demo : https://todo-app-pearl-chi.vercel.app/

<br/>
<br/>

### 개발 목표

Javascipt를 활용하여 아이템 생성, 삭제, 상태표시 등의 기술에 대한 이해를 기반으로 하여 반응형 웹페이지 개발

<br/>
<br/>

### 사용 기술

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 아이템들의 상태에 따른 슬라이드바 개발

![Todo-app](https://user-images.githubusercontent.com/110072947/221763368-5a489171-26e5-4e8e-8a47-0bb323ae0401.png)

```javascript
...
if (event) {
    mode = "event.target.id";
    underLine.style.left = event.currentTarget.offsetLeft + "px";
    underLine.style.width = event.currentTarget.offsetWidth + "px";
    underLine.style.top = event.currentTarget.offsetTop + (event.currentTarget.offsetHeight - 4) + "px";
  };
...
```

<br/>

+ 아이템의 상태에 따라 각각의 tab에 필터링되도록 개발

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221764150-cdcb6581-7fd1-471e-aeaf-237253a9b20a.png" width="250"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221764154-ce768922-586d-4209-9125-aa8afce4dd7a.png" width="250"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221764159-129e64e2-1acb-42ee-8b54-74861c506682.png" width="250"></a>

<br/>

+ 반응형 웹페이지 개발

[Web ver.]

![Todo-app](https://user-images.githubusercontent.com/110072947/221764621-3257da83-52fd-42b7-8774-a97456fe0d2c.png)

[Mobile ver.]

![Todo-app](https://user-images.githubusercontent.com/110072947/221764631-a33feac8-2d2c-43b5-80d8-84fa4693a6f6.png)

<br/>
<br/>

# 개선 사항

+ ongoing이나 done 탭에서 아이템 삭제 시 바로 ui에 보여지지 않고 다른 tab을 눌렀다가 다시 들어가야 삭제되는 문제 해결 필요


