# 순환 알고리즘의 설계(Desigining Recursion)

**목차**

- [순환 알고리즘의 설계(Desigining Recursion)](#순환-알고리즘의-설계desigining-recursion)
  - [`Recursion`이 갖춰야할 가장 기본적인 조건](#recursion이-갖춰야할-가장-기본적인-조건)
  - [암시적 매개변수를 명시적 매개변수로 바꾸어라](#암시적-매개변수를-명시적-매개변수로-바꾸어라)
    - [예제 1: 순차 탐색](#예제-1-순차-탐색)
    - [매개변수의 명시화: 순차 탐색](#매개변수의-명시화-순차-탐색)
    - [순차 탐색: 다른 버전 (끝점)](#순차-탐색-다른-버전-끝점)
    - [순차 탐색: 다른 버전 (중간점)](#순차-탐색-다른-버전-중간점)
    - [매개변수의 명시화: 최대값 찾기](#매개변수의-명시화-최대값-찾기)
    - [최대값 찾기: 다른 버전 (중간점)](#최대값-찾기-다른-버전-중간점)
  - [이전 검색 (Binary Search)](#이전-검색-binary-search)

## `Recursion`이 갖춰야할 가장 기본적인 조건

---

- 적어도 하나의 **base case**, 즉 순환되지 않고 종료되는 `case`가 있어야 한다.
- 모든 `case`는 결국 **base case**로 수렴해야 한다.
  ```
  # 제일 간단한 Recursion의 구조
  if (true) {
  	# base case는 하나 이상일 수도 있다.
  	base case
  } else {
  	recursion
  }
  ```

## 암시적 매개변수를 명시적 매개변수로 바꾸어라

---

### 예제 1: 순차 탐색

> 배열에서 내가 원하는 어떤 값을 찾을 때 **해당 배열이 정렬이 되어 있다면** **이진 검색**을 사용할 수 있을 것이다. 그러나 따로 정렬이 되어 있지 않고 어떠한 기준 조차 존재하지 않는다면 배열을 순차적으로 하나씩 살펴보면서 내가 원하는 값을 찾는 수 밖에 없다.

이 함수의 미션은 `data[0]`에서 `data[n-1]` 사이에엇 `target`을 검색하는 것이다. 하지만 검색 구간의 시작 인덱스 `0`은 보통 생략한다. 즉 **암시적 매개변수**이다.

```java
int search(int [] data, int n, int target) {
	for (int i=0; i<n; i++) {
		if (data[i] == target) {
			return i;
		}
	}
	return -1;
}
```

여기서 **시작 인덱스** `0`을 암시적 매개변수라고 하는 이유는 명시적으로 표현한 매개변수 `n` 그리고 `data[n-1]`과는 다르게 내가 하고자 하는 탐색의 시작점을 명시적으로 표현한 값이 아니라 배열의 길이가 `n`이니 시작점은 `0`일 것이다 라고 암시적으로 표현했기 때문이다.

이것은 일반적인 표현 방식일 뿐 잘못 됐다는 것이 아니다.

다만, 이를 `Recursion`으로 바꿔 작성하면 시작점이나 끝점과 같은 기준점을 암시적으로 표현하지 않고 명시적으로 표현하는 것이 좋다.

### 매개변수의 명시화: 순차 탐색

다시 돌아가 이 함수의 미션은 `data[0]`에서 `data[n-1]` 사이에엇 `target`을 검색하는 것이다. 즉, 검색구간의 시작점을 **명시적**으로 지정한다.

```java
int search(int [] data, int begin, int end, int target) {
	if (begin > end) {
		return -1;
	} else if (target == data[begin]) {
		return begin;
	} else {
		return search(data, begin+1, end, target);
	}
}
```

위 함수를 말로 조금 풀어보면 배열의 크기가 얼마나 크든 작든 상관없이 `beign`과 `end` 사이에 내가 원하는 `target`이 있는지 확인하고 싶다는 것이다.

- `begin > end`
  `begin`이 `end`보다 크다 라는 것은 더 이상 확인할 배열 요소가 없다는 뜻이다.
- `target == data[begin]`
  배열에서 내가 찾고자 하는 값을 찾은 상황
- 위 두가지 경우를 제외한 나머지에선 시작점의 위치를 바꿔 `Recursion`

두 번째 함수를 `search(data, 0, n-1, target)`으로 호출한다면 첫 번째 함수와 완전히 동일한 일을 한다.

이런 식으로 `Recursion`을 구현할 때 **매개변수를 명시화**하는 것은 해당 `Recursion`을 맨 처음 호출할 때만을 생각하여 매개변수를 표현하는 것이 아닌 자기 자신이 다시 호출될 때 필요한 매개변수들까지 표현할 수 있어야 하기 때문이다.

두 번째 함수와 같이 매개변수의 시작점을 명시화하지 않는다면 해당 함수가 다시 호출될 경우 시작 구간이 달라지는 상황에 대한 표현 방법이 없게 된다. 따라서, `Recursion`에서는 가능하다면 **매개변수를 명시화**하는 것이 좋다.

> 변하지 않는 값에 대해서는 매개변수를 생략하는 것도 하나의 방법이다.

ex. 두 번째 함수에서 `end` 매개변수는 변하지 않는 값이니 `data.length-1`로 표현하는 식

>

### 순차 탐색: 다른 버전 (끝점)

꼭 시작점을 기준으로 삼을 필요는 없다. 끝점을 기준으로 삼아도 동일한 순차 탐색을 할 수 있다.

```java
int search(int [] data, int begin, int end, int target) {
	if (begin > end) {
		return -1;
	} else if (target == data[end]) {
		return end;
	} else {
		return search(data, begin, end-1, target);
	}
}
```

### 순차 탐색: 다른 버전 (중간점)

> 이진 검색과는 다르다.

배열을 반으로 나누어 앞 쪽에서 먼저 찾고 앞 쪽에서 찾지 못했다면 나머지 반을 기준으로 `Recursion`을 호출하여 원하는 값을 찾는 방식

```java
int search(int [] data, int begin, int end, int target) {
	if (begin > end) {
		return -1;
	} else {
		int middle = (begin + end) / 2;
		if (data[middle] == target) {
			return middle;
		}
		int index = search(data, begin, middle-1, target);
		if (index != -1) {
			return index;
		} else {
			return search(data, middle+1, end, target);
		}
	}
}
```

### 매개변수의 명시화: 최대값 찾기

이 함수의 미션은 `data[begin]`에서 `data[end]` 사이에서 최대값을 찾아 반환한다. `begin ≤ end` 라고 가정한다.

```java
int findMax(int [] data, int **begin**, int **end**) {
	if (begin == end) {
		return data[begin];
	} else {
		return Math.max(data[begin], findMax(data, **begin+1**, **end**));
	}
}
```

위 알고리즘의 기본적인 아이디어는 "**첫 번째 값을 제외한 나머지 값들 중에 최대값과 첫 번째 값 중에 더 큰 값을 무엇인가**"이다.

> 데이터의 개수가 0인 것은 문제의 성립이 되질 않으므로 최소 1개 이상의 데이터가 존재한다고 가정한다.

### 최대값 찾기: 다른 버전 (중간점)

이 버전도 동일하다. 시작점을 기준으로 삼지 않고 배열의 중간 지점을 기준으로 삼아 앞 쪽에서 찾은 최대값과 뒤 쪽에서 찾은 최대값을 비교하여 최대값을 구하는 방식이다.

```java
int findMax(int [] data, int **begin**, int **end**) {
	if (begin == end) {
		return data[begin];
	} else {
		int middle = (begin + end) / 2;
		int max1 = findMax(data, **begin**, **middle**);
		int max2 = findMax(data, **middle+1**, **end**);
		return Math.max(max1, max2);
	}
}
```

## 이전 검색 (Binary Search)

---

> 이진 검색은 기본적으로 배열의 데이터가 **크기 순으로 정렬**되어 있다고 가정한다.

`items[begin]`에서 `items[end]` 사이에서 `target`을 검색한다.

```java
public static int binarySearch(String[] items, String target, int begin, int end) {
	if (begin > end) {
		return -1;
	} else {
		int middle = (begin + end) / 2;
		int compResult = target.compareTo(items[middle]);
		if (compResult == 0) {
			return middle;
		} else if (compResult < 0) {
			return binarySearch(items, taget, begin, middle-1);
		} else {
			return binarySearch(items, taget, begin+1, middle);
		}
	}
}
```

1. **가운데 값을 먼저 확인하여 내가 찾는 값인지 확인한다.**
2. **가운데 값이 내가 원하는 값보다 크다면?**
   1. 데이터가 크기 순으로 정렬되어 있기 때문에 가운데를 기준으로 뒤 쪽의 값을 찾을 필요가 없으므로 앞 쪽의 데이터만을 찾으면 된다.
   2. 기준점을 앞 쪽의 데이터로 변경하여 다시 검색 (`middle - 1`)
3. **가운데 값이 내가 원하는 값보다 작다면?**
   1. 데이터가 크기 순으로 정렬되어 있기 때문에 가운데를 기준으로 앞 쪽의 값을 찾을 필요가 없으므로 뒤 쪽의 데이터만 찾으면 된다.
   2. 기준점을 뒤 쪽의 데이터로 변경하여 다시 검색 (`begin + 1`)
