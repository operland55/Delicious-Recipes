# Delicious-Recipes
Recipe 홈페이지 리뉴얼 <https://jocular-concha-3b2ca9.netlify.app/>
## 프로젝트 목표
spoonacular.com 에 제공하는 Api를통해 요리 Recipe 홈페이지 리뉴얼
## 프로젝트에서 사용한 기술
###React
Router,useEffect,간단한 Recoil atom 
###SCSS
패턴을 참고해 컴포넌트별로 나눠 작성했으며, main.scss에 임포트한 후 CSS로 컴파일, responsive도 미리 mixin으로 만들어 간단하게 사용

## 프로젝트의 기능 설명
### Scroll 이벤트
![scroll](https://user-images.githubusercontent.com/76529606/210919545-04a0ed32-d3c7-44ab-81ea-05f240244ebc.jpg)
1. 스크롤을 내리면 내비게이션이 숨겨지는 기능
2. 스크롤을 올리면 숨겨져있던 내비게이션이 다시 나오도록 작성
### Menu, Gallery Filter기능

![filter사진](https://user-images.githubusercontent.com/76529606/210919785-9016c860-37f5-4348-b8f2-e73423129cdb.jpg)
![화면 캡처 2023-01-06 114413](https://user-images.githubusercontent.com/76529606/210919797-8e05c9ea-f442-400b-aace-17bc42a72a18.jpg)

nav 메뉴를 누르면 그거에 맞기 사진이과 메뉴가 나온다

### Search 기능
![화면 캡처 2023-01-06 114449](https://user-images.githubusercontent.com/76529606/210919902-3fada445-856b-44bd-a45e-da6a2fb21be2.jpg)

#### 원하는 음식을 검색하면 화면에 나타난다

![화면 캡처 2023-01-06 114509](https://user-images.githubusercontent.com/76529606/210919962-87fe3d08-f0be-4b1b-86f2-9ef6994a5ec4.jpg)

#### 화면에 나타난 음식들중 마음에 드는 것 중에서 선택을 하면 화면에 Recipe 박스가 나오게 만들었다

![화면 캡처 2023-01-06 114531](https://user-images.githubusercontent.com/76529606/210920042-f3912ed1-ab23-4bf4-bbec-651d57bb49e5.jpg)

#### 만약 오타나 또는 없는 음식이면 없는 데이터라고 화면에 
