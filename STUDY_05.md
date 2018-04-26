
# 5주차

## Images
### 정적 이미지 리소스
  정적 이미지를 앱에 추가하려면 소스 코드 트리의 어딘가에 놓고 다음과 같이 참조한다.
```javascript
<Image source={require('./my-icon.png')} />
```

@2x및 @3x접미어를 사용하여 다양한 화면 밀도에 대한 이미지를 제공 할 수 있다.
화면 밀도와 일치하는 이미지가없는 경우 가장 가까운 최상의 옵션이 선택된다.

윈도우에서 프로젝트에 새 이미지를 추가하는 경우 다시 시작해야 한다.

이점은 다음과 같다.
1.iOS 및 Android에서 동일한 시스템입니다.
1.이미지는 JavaScript 코드와 동일한 폴더에 있습니다. 구성 요소는 자체 포함되어 있습니다.
1.전역 이름 공간이 없습니다. 즉 이름 충돌에 대해 걱정할 필요가 없습니다.
1.실제로 사용 된 이미지 만 앱에 패키징됩니다.
1.이미지를 추가하고 변경하는 데는 앱을 다시 컴파일 할 필요가 없으므로 정상적으로 시뮬레이터를 새로 고침하십시오.
1.packager는 이미지 크기를 알고 있으므로 코드에서 복제 할 필요가 없습니다.
1.이미지는 npm 패키지 를 통해 배포 할 수 있습니다 .

### 이미지 아닌 정적 리소스
require위에서 설명한 구문은 정적뿐만 아니라 프로젝트의 오디오, 비디오 또는 문서 파일을 포함 할 수 있다.
flexGrow크기 정보는 현재 비 이미지 애셋에 전달되지 않으므로 대신 동영상은 절대 위치 지정을 사용해야한다

### 하이브리드 응용 프로그래밍 리소스의 이미
하이브리드 앱을 빌드하는 경 앱에 이미 번들된 이미지를 사용할 수 있다.

### 네트워크 이미
정적 리소스와 달리 이미지 크기를 수동지정 해야한다.
```javascript
// GOOD
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />

// BAD
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />

```

### uri 데이터 이미지
rest api를 호충하여 인코딩된 이미지 데이터를 가져올 수 있다.

### 왜 자동으로 크기를 조정하지 않는가?!
React native 는 의도적으로 구현되지 않음.
개발자가 원격 이미지의 크기 (또는 종횡비)를 미리 알면 더 많은 작업을 수행 할 수 있지만 더 나은 사용자 환경을 제공 할 것으로 믿습니다

### 객체로서의 소스
React Native에서 한 가지 재미있는 결정은 src속성의 이름이 지정 source되고 문자열이 아니라 uri속성이 있는 객체를 사용한다는 것이다.

### 첩을 통한 배경 이미지
<ImageBackground>구현이 매우 간단하기 때문에 어떤 경우에는 사용하고 싶지 않을 수도 있다 . 
참조 <ImageBackground>의의 ' 소스 코드를 더 통찰력, 필요할 때 사용자 정의 구성 요소를 만들 수 있습.

## Animation
애니메이션은 훌륭한 사용자 경험을 창출하는 데 매우 중요

### Animated API
AnimatedAPI는 매우 쉽게 간결하게 아주 성능이 좋은 방법으로 재미있는 애니메이션과 상호 작용 패턴의 다양한 표현 할 수 있도록 설계되었다.

#### 애니메이션 구성
Animated가장 일반적으로 사용되는 애니메이션 유형을 제공한다
Animated.timing(). 시간 경과에 따른 값의 애니메이션을 지원하거나 직접 사용할 수 있다. 
감속 / 감속 기능은 일반적으로 객체에서 점진적 가속 및 감속을 전달하기 위해 애니메이션에 사용된다.

#### 애니메이션 작성
애니메이션을 순서대로 또는 동시에 재생하고 결합 할 수 있습니다.

AnimatedAPI는 다음과 같은 몇 가지 방법을 제공한다. 
sequence()하고 delay()단순히 실행하는 애니메이션의 배열을 각각을 자동으로 호출하며 start()/ stop()필요로한다.

#### 애니메이션 값 결합
수 개의 애니메이션 값을 결합하여 새로운 애니메이션 값을 만들뿐만 아니라, 곱하기, 나누기, 또는 모듈을 이용할 수 있다.

#### 보간법
보간법은 일반적으로 선형 보간을 사용하여 입력 범위를 출력 범위에 매핑하지만 여유 함수를 지원한다

#### 동적 값 추적
애니메이션 값은 다른 값을 추적 할 수도 있다. 
toValue애니메이션을 일반 숫자 대신 다른 애니메이션 값으로 설정하면 된다.

#### 추적 제스처
패닝이나 스크롤과 같은 제스처와 다른 이벤트는를 사용하여 애니메이션 된 값으로 직접 매핑 할 수 있다


#### 현재 애니메이션 값에 응답
애니메이션을 현재 값을 읽을 수있는 확실한 방법이 없다. 
현재 값에 대한 응답으로 JavaScript를 실행해야하는 경우 두 가지 방법이 있다.
1. spring.stopAnimation(callback)애니메이션을 중단하고 callback최종 값으로 호출 합니다.
2. spring.addListener(callback)callback애니메이션이 실행되는 동안 비동기 적으로 호출 되어 최근 값을 제공

#### 기본 드라이버 사용
AnimatedAPI는 직렬화 가능하도록 설계되었다.
일반 애니메이션에 기본 드라이버를 사용하는 것은 매우 간단. 
useNativeDriver: true시작시 애니메이션 설정에 추가 하기 만하면 됩니다.



### LayoutAnimation API
LayoutAnimation다음 렌더링 / 레이아웃주기의 모든보기에 사용할 전역 구성 create및 update애니메이션을 사용할 수 있다


## 접근성

### 기본 앱 접근성 (iOS 및 Android)
iOS와 Android는 모두 장애인이 앱에 액세스 할 수 있도록 API를 제공. 
또한 두 플랫폼 모두 시각 장애인 용 화면 판독기 VoiceOver (iOS) 및 TalkBack (Android)과 같은 번들 형 보조 기술을 제공. 
iOS와 Android는 접근 방식이 약간 다르므로 React Native 구현은 플랫폼에 따라 다를 수 있다.


### Apps 액세스 가능
#### 접근성 속성
when true은 보기가 접근성 요소임을 나타냅니다. 
보기가 접근성 요소 인 경우 하위 요소를 선택 가능한 단일 구성 요소로 그룹화합니다. 
기본적으로 모든 터치 가능한 요소에 액세스 할 수 있습니다

#### 접근성보기 아이 모달 (iOS)
VoiceOver가 수신기의 형제 인 뷰 내의 요소를 무시해야하는지 여부를 나타내는 부울 값.

## 누구든지 하는 리액트 : LifeCycle API
### 컴포넌트 초기 생성
constructor : 컴포넌트 생성자 함수
componentWillMount : 컴포넌트가 여러분의 화면에 나가나기 직전에 호출되는 API
componentDidMount : 컴포넌트가 화면에 나타나게 됐을 때 호출
### 컴포넌트 업데이트
componentWillReceiveProps : 컴포넌트가 새로운 props 를 받게됐을 때 호출
static getDerivedStateFromProps() : v16.3 이후에 만들어진 라이프사이클 API 인데요, 
이 API 는 props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우에 사용됩니다.
shouldComponentUpdate : 컴포넌트를 최적화하는 작업에서 매우 유용하게 사용,조건에 따라 false 를 반환하면 해당 조건에는 render 함수를 호출하지 않는다.
componentWillUpdate : shouldComponentUpdate 에서 true 를 반환했을때만 호출
getSnapshotBeforeUpdate() : 발생하는 시점 1. render() 2. getSnapshotBeforeUpdate() 3. 실제 DOM 에 변화 발생 4. componentDidUpdate
componentDidUpdate :컴포넌트에서 render() 를 호출하고난 다음에 발생
### 컴포넌트 제거
componentWillUnmount : 등록했었던 이벤트를 제거하고, 만약에 setTimeout 을 걸은것이 있다면 clearTimeout 을 통하여 제거
### 컴포넌트 에러
componentDidCatch : 에러가 발생하면 componentDidCatch 가 실행















