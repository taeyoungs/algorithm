# 삼총사

**목차**

- [삼총사](#삼총사)
    - [원본 링크](#원본-링크)
  - [문제 설명](#문제-설명)
    - [제한사항](#제한사항)
    - [입출력 예](#입출력-예)
    - [입출력 예 설명](#입출력-예-설명)
  - [아이디어](#아이디어)
  - [해결방법](#해결방법)

### 원본 링크

https://school.programmers.co.kr/learn/courses/30/lessons/131705

## 문제 설명

한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

한국중학교 학생들의 번호를 나타내는 정수 배열 `number`가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

### 제한사항

- 3 ≤ `number`의 길이 ≤ 13
- 1,000 ≤ `number`의 각 원소 ≤ 1,000
- 서로 다른 학생의 정수 번호가 같을 수 있습니다.

### 입출력 예

| number                   | result |
| ------------------------ | ------ |
| [-2, 3, 0, 2, -5]        | 2      |
| [-3, -2, -1, 0, 1, 2, 3] | 5      |
| [-1, 1, -1, 1]           | 0      |

### 입출력 예 설명

- **입출력 예 #1**

  문제 예시와 같습니다.

- **입출력 예 #2**

  학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.

- **입출력 예 #3**

  삼총사가 될 수 있는 방법이 없습니다.

## 아이디어

- 3가지 정수로 이루어진 정수 번호 쌍을 전부 구해 삼총사가 될 수 있는 즉, 더해서 0이 나오는 쌍을 구한다.

## 해결방법

1. 3중 `for` 문을 통해 삼총사가 될 수 있는 정수 번호 쌍을 전부 구하는 방식
2. `Recursion`을 이용하여 정수 번호 쌍을 전부 구하는 방식
