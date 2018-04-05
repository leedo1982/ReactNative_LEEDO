
# 2주차
## Style 
The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g backgroundColor rather than background-color.
= 스타일 이름과 값은 camal casing를 사용한다.

컨포넌트가 복잡해지기 때문에 StyleSheet.create를 사용하여 한곳에서 정의하여사용하는것이
클린하다.

일반적인 패턴은 컴포넌트가 style prop를 받아서 하위 컴포넌트의 스타일을 지정하는 데 사용것이다. CSS에서 스타일을 "계단식"으로 만들 수 있다.

```javascript
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```
## Height and Width 
컴포넌트의 크기를 설정하는 가장 간단한 방법은 고정 폭과 높이를 스타일에 추가
React Native의 모든 치수는 단위가 없으며 밀도와 무관 한 픽셀을 나타냅니다.

컴포넌트의 스타일에서 flex를 사용하여 사용 가능한 공간에 따라 구성 요소를 동적으로 확장 및 축소시 킵니다. 
일반적으로 flex : 1을 사용하면 컴포넌트에 사용 가능한 공간을 모두 채우고 같은 부모가있는 각 구성 요소간에 균등하게 공유. 
주어진 굴곡이 클수록 siblings에 비해 컴포넌트가 차지하는 공간의 비율이 높아집니다

## Layout with Flexbox
컴포넌트는 flexbox 알고리즘을 사용하여 하위 요소의 레이아웃을 지정할 수 있다.
Flexbox는 다양한 화면 크기에서 일관된 레이아웃을 제공하도록 설계되었다.

flexDirection, alignItems 및 justifyContent의 조합을 사용하여 적절한 레이아웃
컴포넌트의 스타일에 flexDirection을 추가하면 레이아웃의 기본 축이 결정된다. 기본값은 column

컴퍼넌트의 스타일에 justifyContent를 추가하면, 
주축에 따른 자식의 배포가 결정. 
사용 가능한 옵션은 flex-start, center, flex-end, space-around, space-between and space-evenly.


컴퍼넌트의 스타일에 alignItems를 하면 보조 축을 따라 자식 정렬을 결정(기본 축이 행이면 보조 요소는 column,그 반대의 경우도 마찬가지 임). 
사용 가능한 옵션은 flex-start, center, flex-end, and stretch.


## Handling Test Input
TextInput은 사용자가 텍스트를 입력 할 수있는 기본 컴포넌트. 
텍스트가 변경 될 때마다 호출되는 함수를 사용하는 onChangeText prop
텍스트가 제출 될 때 호출되는 함수를 사용하는 onSubmitEditing prop

## Handling Touches
React Native는 모든 종류의 공통 제스처를 처리 할 수있는 구성 요소와보다 발전된 제스처 인식을 허용하는 포괄적인 제스처 응답 시스템을 제공하지만 
사용자가 가장 관심을 가질만한 구성 요소는 기본 버튼

```javascript
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
```
iOS에서는 파란색 라벨,Android에서는 흰색 텍스트가있는 파란색 둥근 사각형. 
버튼을 누르면 "onPress"기능이 호출되며이 경우 경고 팝업이 표시. 
원하는 경우 "색상"소품을 지정하여 단추의 색상을 변경할 수 있슴.

````javascript
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);

````







## Using a ScrollView
ScrollView는 여러 컴포넌트와 뷰를 호스팅 할 수있는 일반 스크롤 컨테이너. 
스크롤 가능한 항목은 동종 일 필요는 없으며 가로 속성을 설정하여 세로 및 가로로 스크롤 

pagingEnabled props을 사용하여 스와이프 제스처는 뷰를 통해 페이징 할 수 있도록 ScrollViews를 구성 가능
보기간에 가로로 스와이프하는 것은 ViewPagerAndroid props 사용하여 Android에서 구현 갸능




## Using List Views





































