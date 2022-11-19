# server
🔔 서비스명 : 스읍-팡!(롤모델의 습관을 루팡한다!)

🔔 서비스 한줄소개 : 롤모델의 습관을 훔쳐 변화를 위한 습관을 형성할 수 있는 습관 기록 서비스!

<br>

## 팀원 역할 분담

|  | ||
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                                          **황서경**                                                          |                                                          **김규원**                                                          |                                                          **조하얀**                                                          |
|                                       [@Seokyeong237](https://github.com/Seokyeong237)                                       |                                        [@kkyu0718](https://github.com/kkyu0718)                                        |                                          [@yanh2](https://github.com/yanh2)                                          |
|                                                           DB 설계                                                            |                                                           DB 설계                                                            |                                                           DB 설계                                                            |
|                                                   API 명세서 작성 및 구현                                                    |                                                   API 명세서 작성 및 구현                                                    |                                                   API 명세서 작성 및 구현                                                    |
|                                                        프로젝트 세팅                                                         |      리드미 작성                                                                                                                                   |                                                                                                        |

<br />
<aside>

```
❗️Git workflow

main <— develop <— feat/이슈번호-기능, fix/이슈번호-기능, refactor/이슈번호-기능

ex) feat/3-create-user

1. local - feat/이슈번호-기능 에서 각자 작업
2. 작업 완료 후 remote - develop 에 PR
3. 코드 리뷰 후 Confirm 받고 Merge
4. remote - develop 에 Merge 될 때 마다 모든 팀원 remote - develop pull 받아 최신 상태 유지
```

</aside>

- **develop 브랜치란?**
  'develop' 브랜치는 통합 브랜치의 역할을 하며, 평소에는 이 브랜치를 기반으로 개발을 진행하며 모든 기능이 정상적으로 동작할 수 있는 안정적인 상태를 유지해야 한다. 모든 기능이 추가되고 버그가 수정되어 배포 가능한 상태라면 'main' 브랜치에 merge 한다.

<br>

### **Commit Convention**

| 태그 이름  | 설명                                                                 |
| ---------- | -------------------------------------------------------------------- |
| [Feat]     | 새로운 기능 구현                                                     |
| [Fix]      | 버그, 오류 수정                                                      |
| [Hotfix]   | issue나 QA에서 급한 버그 수정                                        |
| [Docs]     | 문서 수정                                                            |
| [Test]     | 테스트 코드 추가 및 업데이트                                         |
| [Chore]    | 코드 수정, 내부 파일 수정                                            |
| [Del]      | 불필요한 코드 삭제                                                   |
| [Refactor] | 전면 수정                                                            |
| [Merge]    | 다른 브랜치를 merge 할 때 사용                                       |
| [Add]      | Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시 |
| [Rename]   | 파일 이름 변경 시 사용                                               |
| [Move]     | 프로젝트 내 파일이나 코드의 이동                                     |

커밋 메시지는 영어/한글 자유롭게~

<br>

### Code Convention

- Naming Convention

  1. 변수나 함수명은 `camelCase`를 사용한다.
  2. 함수의 경우 동사+명사 사용

  - ex) getInformation()

  3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성

  - ex) isNum

  4. DB 이름은 `PascalCase`를 사용한다.
  5. Class / Interface / Type / Namespace / Enum 명은 `PascalCase`를 사용한다.
  6. 약어는 되도록 사용하지 않는다.

  - 부득이하게 약어가 필요하다고 판단되는 경우 팀원과 상의를 거친다.

- 주석

  1. 한 줄 주석은 // 를 사용한다.

  ```jsx
  // 한줄 주석일 때

  /**
   * 여러줄
   * 주석일 때
   */
  ```

  2. 함수에 대한 주석

  ```jsx
  /**
   * @route POST /record
   * @desc Create Record
   * @access Public
   */
  ```

  3. Bracket 사용 시 내부에 주석을 작성한다.

  ```jsx
  if (a == 5) {
    // 주석
  }
  ```

- Bracket
  prettier eslint로 통일합시다
  if문 안에 한 문장 밖에 없더라도 bracket으로 감싸줍시다

  ```jsx
  // good
  if (foo) {
  }

  // bad
  if (foo) {
  }
  ```

## 프로젝트 폴더 구조

```
---📁src
------📄index.ts
------📁controller
---------📄index.ts
---------📄HomeController.ts
---------📄HabitController.ts
---------📄UserController.ts
------📁interface
---------📁home
---------📁habit
---------📁user
------📁module
---------📄responseMessage.ts
---------📄statusCode.ts
---------📄util.ts
------📁route
---------📄index.ts
---------📄HomeRouter.ts
---------📄HabitRouter.ts
---------📄UserRouter.ts
------📁service
---------📄index.ts
---------📄HomeService.ts
---------📄HabitService.ts
---------📄UserService.ts
```