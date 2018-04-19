
# 4주차

## Components and APIs

특정한 작업을 하는 라이브러리를 찾으려면 Awesome React Native 를 확인

### Basic Components(기본 컨포넌트)
* View:  UI를 구현하기 위한 가장 기본
* Text : 텍스트 표시용 
* Image : 이미지 표시용
* TextInput : 키보드를 통해 엡에 텍스트 입력용
* ScrollView : 여러 구성요소 및 View를 호스트 하는 스크롤 컨테이너
* StyleSheet : CSS 스타일 시트와 유사한 추상 레이어를 제공함

### User Interface
* Button :  터치 처리용
* Picker : IOS 및 Android에서 기본 선택용
* Slider : 값 범위에서 단일값을 선택하기 위함
* Switch : boolean 처리

### List Views
* FlatList : 실행 가능한 스크롤 가능 목록 렌더링 용
* SectionList : 단락 목록용

### iOS-specific
ActionSheetIOS : 액션시트 또는 공유 시트 표시
AletIOS : 알림 대화 상자 및 사용자 입력 프롬프트
DataPickerIOS : 날짜 / 시간 선택기
ImagePickerIOS : 이미지 선택 도구
NavigatorIOS : 탐색 스택 구현용
ProgressViewIOS : 프로그래스 뷰
PushNotificationIOS : 앱 푸시 처리
SegmentedControllerIOS : 좌우 선택용
TabBarIOS : 툴바

### Android-specific
BackHandler : 뒤로 탐색위함
DataPickerAndroid : 날짜 선택기
DrawerLayoutAndroid : Drawer 
PermissionsAndroid : 권한 과련
ProgressBarAndroid : 진행상태바
TimePickerAndroid : 시간 선택기
ToastAndroid : 알림
ToolbarAndroid : 툴바 
ViewPagerAndroid : 뷰간 좌우를 바꿀 수 있는 컨테이너

### Others
Activitydicator : 순환 로드 표시기
Alert : 경고 대화 상자
Animated : 애니메이셔
CameraRoll : 카메라 롤
Clipboard : 클림보트 컨텐츠 설정
Dimensions : 장치 크기를 가져음
KeyboardAvoidingView : 가상 키보드
Linking : 앱 링크와 사용 작용할 수 있는 일반 인터페이스
Modal : 모달
PixelRatio : 장치 픽셀 밀도에 대한 엑세스
RefreshControl : 스크롤뷰 추가
StatusBar : 상태표시중
WebView : 네이티브 뷰


## Platform Specific Code

React Native 는 코드를 쉽게 구성하고 풀랫폼별로 분리하는 두가지 방법을 제공한다.

1. Platform 모듈 사용하기 .

```javascript

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});

```


```javascript

import {Platform} from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}

```

2. platform-specific file extensions 사용하기 .

플랫폼 특정 코드가 더 복잡한 경우 코드를 별도의 파일로 분리하는 것을 고려해야합니다. 
React Native는 파일에 확장자 가 .ios.있거나 .android.
확장자 가있는 경우이를 감지 하고 다른 구성 요소에서 필요한 경우 관련 플랫폼 파일을로드합니다.






```javascript
# BigButton.ios.js
# BigButton.android.js


const BigButton = require('./BigButton');

```


## 화면간 이동
모바일 앱은 거의 단일 화면으로 구성된다.
여러 화면의 표시 및 관리는 일반적으로 navigator 로 처리된다.

navigotor 을 시작 한다면 React Navigation 을 사용하는 것이 좋다 .
React Navigation은 iOS와 Android 모두에서 일반적인 스택 탐색 및 탭 탐색 
패턴을 제공하는 기능과 함께 사용하기 쉬운 탐색 솔루션을 제공한다. 
이것은 redux 와 같은 상태 관리 라이브러리와 통합 할 때 극대화 된다.

step1 : 라이블 러리 설
```javascript
npm install --save react-navigation
```

step2 : 
```javascript 
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}
```

### NavigatorIOS
몇 가지 중요한 차이점과 함께 화면을 나타내는 경로를 사용. 
렌더링 될 실제 구성 요소 component는 경로 의 키를 사용하여 지정 될 수 있으며이 구성 요소에 전달되어야하는 모든 소품을 지정할 수 있다 









