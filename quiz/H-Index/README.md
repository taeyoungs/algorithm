# H-Index

**목차**

- [H-Index](#h-index)
    - [원본 링크](#원본-링크)
  - [문제 설명](#문제-설명)
    - [제한사항](#제한사항)
    - [입출력 예](#입출력-예)
    - [입출력 예 설명](#입출력-예-설명)
  - [아이디어](#아이디어)
  - [해결방법](#해결방법)

### 원본 링크

https://school.programmers.co.kr/learn/courses/30/lessons/42747

## 문제 설명

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과[1](https://school.programmers.co.kr/learn/courses/30/lessons/42747#fn1)에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 `n`편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 `h`번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 `citations`가 매개변수로 주어질 때, 이 과학자의 H-Index를 `return` 하도록 `solution` 함수를 작성해주세요.

### 제한사항

- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

### 입출력 예

| citations       | return |
| --------------- | ------ |
| [3, 0, 6, 1, 5] | 3      |

### 입출력 예 설명

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

## 아이디어

- 논문을 오름차순으로 정렬하면 `h`번 이상 인용된 논문이 `h`편 이상인 케이스를 쉽게 찾을 수 있다.
- 오름차순으로 정렬을 했으니 특정 논문의 다음 논문의 인용 횟수는 무조건 특정 논문의 인용 횟수보다 많다.

## 해결방법

- 논문 `n`편 중, `h`번 이상 인용된 논문이 `h`편 이상인 케이스를 찾아서 반환하면 해당 값이 최댓값이 된다.
- 정렬하여 작은 값부터 큰 값 순서대로 `h`번 이상 인용된 논문이 `h`편 이상인지 확인한다.
  - 이때, 전체 `citations` 길이에서 반복문이 순회한 횟수(`i`)를 빼면 남은 논문의 수를 알 수 있다.
- 위 반복문을 모두 순회했음에도 아무런 값도 반환되지 않았다는 것은 인용 횟수가 없다는 뜻이므로 0을 반환한다.