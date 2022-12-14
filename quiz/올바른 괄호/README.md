# 올바른 괄호

**목차**

- [올바른 괄호](#올바른-괄호)
  - [원본 링크](#원본-링크)
  - [문제 설명](#문제-설명)
    - [제한사항](#제한사항)
    - [입출력 예](#입출력-예)
    - [입출력 예 설명](#입출력-예-설명)
  - [아이디어](#아이디어)
  - [해결방법](#해결방법)

### 원본 링크

https://school.programmers.co.kr/learn/courses/30/lessons/12909

## 문제 설명

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 `s`가 주어졌을 때, 문자열 `s`가 올바른 괄호이면 `true`를 `return` 하고, 올바르지 않은 괄호이면 `false`를 `return` 하는 `solution` 함수를 완성해 주세요.

### 제한사항

- 문자열 `s`의 길이 : 100,000 이하의 자연수
- 문자열 `s`는 '(' 또는 ')' 로만 이루어져 있습니다.

### 입출력 예

| s        | answer |
| -------- | ------ |
| "()()"   | true   |
| "(())()" | true   |
| ")()("   | false  |
| "(()("   | false  |

### 입출력 예 설명

- **입출력 예 #1,2,3,4**

  문제의 예시와 같습니다.

## 아이디어

- `Iterator`인 문자열의 특성을 이용
- 반복문을 순회하기 전에 미리 올바른 괄호가 될 수 없는 조건들을 체크
- 반복문을 순회하면서도 중간에 올바른 괄호가 될 수 없는 경우를 체크, 이렇게 되면 반복문 전체를 순회하지 않아도 탈출이 가능하다.

## 해결방법

- 시작 괄호가 오른쪽 괄호이거나 마지막 괄호가 왼쪽 괄호 그리고 괄호가 1개 밖에 없는 경우는 모두 올바른 괄호 조건을 만족할 수 없으므로 `false`를 반환한다.
- 괄호를 쌓는 스택(`stack` 변수)을 하나 만든다.
- 스택에서 올바른 괄호가 짝지어질 때마다 짝지어진 괄호를 제거한다.
  - `stack[stack.length - 1]`: 스택 마지막 요소
  - `s[i]`: 스택에 삽입할 요소
  - 두 요소를 짝 지었을 때 올바른 괄호라면 두 요소를 모두 제거한다.
- 위 작업을 계속해서 진행하고 있기 때문에 오른쪽 괄호(`')'`)가 두 번 스택에 들어왔다는 건 이미 올바른 괄호의 조건을 만족할 수 없다는 뜻이기에 `false`를 반환한다.
- 반복문을 순회하고도 스택에 괄호가 남아 있다면 `false`, 괄호가 남아있지 않다면 `true`를 반환한다.
