# Event Driven Architecture

## Index

1. Command And Query
2. Event
3. Event Driven Architecture
4. Event Sourcing And CQRS

## As a Point

### 1.Command And Query

> Command

![Command](./public/command.png)

- Do Something
- Usaully Synchronous
- Sometimes returns a response
- CAlling service needs to know who handles the command

> Query

![Query](./public/query.png)

- Retrieve data
- Almost always synchronous
- Always returns a response
- Calling service needs to know who handles the query

> Command And Query Problem

- Performance

  - 두개의 방식모두 동기방식으로 운영 -> 느려짐

- Coupling

  - 두개의 방식모두 다른 서비스를 호출 -> 만약 서비스가 바뀐다면 -> 결합성 이슈 생길수 있음

- Scalability
  - 두개의 방식모두 다른 서비스를 호출 -> 한개의 인스턴스라면, 내부에서 많은 통신일 일어나게 됨(busy) -> 다른 인스턴스로 확장할순 있지만 어려움(관리)

### 2. Event

![Event](./public/event.png)

> Complete Event

- Contains all the relevant data
- Usually entity data
- 보통의 데이터를 뜻함

```json
    "event_type"    : "CustomerCreated"
    "customer_id"   : 1
    "first_name"    : "lee"
    ...
```

> Pointer Event

- Retrieve Complete Data in Stored Database

```json
    "event_type"    : "CustomerCreated"
    "customer_id"   : 1
```

## 3. Event Driven Architecture

![EDA](./public/eda.png)

> Producer

- 이벤트 생성 시 다른 채널로 해당 이벤트를 전송/발송 한다

> Channel

- RabbitMQ
- Kafka
- Usually Use Queue

> Consumer

- Execute Event
- Sometimes Return value (ACK)
- Push / Pull 메커니즘 사용

> Advantages of EDA

- Performance
  - EDA is an Asynchronous Architecture (the opposite Command and Query)
  - The Channel Does not wait for response from consumer
  - Solution of Performance (Command and Query)
- Coupling
  - producer -> Channel
  - Channel은 topic기준 queue로 관리가 됨
- Scalability

  - Many Consumer can listen events from channel

- EDA와 Pubsub의 차이점
  - EDA는 전체적인 개념임 -> 이벤트 기반의 구조를 뜻함
  - Pubsub은 Publisher / Subscribe 기반의 메시징 시스템을 뜻함 -> 더 소규모 개념임
  - EDA와 pubsub은 유사한 개념이나, EDA 구조안에 pubsub 개념이 있다고 생각하면 됨

```txt
    우리 시스템은 Event Driven Architecture를 사용하고 있으며,
    그 안에서 배달 시스템은 Pubsub 구조를 채택하고 있다.
```

### Event Sourcing And CQRS

> Example Employee Table in RDB

| emp_id | first_name | last_name | address | role     | date_join  |
| ------ | ---------- | --------- | ------- | -------- | ---------- |
| 1      | john       | smith     | seoul   | backend  | 2009-04-23 |
| 2      | sahra      | adsf      | busan   | frontend | 2001-05-23 |
| 3      | culre      | basf      | incheon | data     | 2003-09-23 |

> 해당 테이블로 알수 없는 질문

- john의 이전 role은 무엇인가요? -> 알수없음
- sahra의 이전 주소는 어디인가? -> 알수없음
- culre의 이전이름이 있다면 무엇인가? -> 알수없음
- 이러한 Log성 데이터가 필요하다 -> CQRS로 이방식을 해결할 수 있다.
