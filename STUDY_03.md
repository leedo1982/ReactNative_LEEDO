
# 3주차
## Networking 
모바일 앱은 remote url을 통해 리소스를 가져와야 한다.
REST API에 대한 POST 요청을 만들거나, 다른 서버에서 정적 콘텐츠(static content) 청크를 가져와야 할 수 있다.

### Using Fetch
React Native는 네트워킹 요구에 맞는 Fetch API를 제공

요청하는 방법의 예
```javascript
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
```

Networking은 본질적으로 비동기 작업
fetch mehtod는 비동기 방식으로 작동하는 코드를 작성하는 직관적인 Promise를 반환
async/await 사용가능( 비동기 코드를 동기식으로)
```javascript
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
```

### WebSocket Support
웹소켓도 지원한다.

```javascript
var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
  // connection opened
  ws.send('something'); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};
```

## More Resources
### popular Libraries 
react를 공부해 보아라.
state 관리를 위해 redux를 공부하라.
더많은 라이브러리를 찾으러면 Awesome React Native를 찾아보아라

### Examples
React Native에서 가능한 기능을 보려면 Showcase의 응용 프로그램을 사용해보라! 
GitHub에는 몇 가지 예제 애플리케이션이 있습니다.


### Extending Reacgt Native
github에 오픈소스화 하여 같이 나아가자.

