# Event Driven Architecture

## Typical Event Driven Architecture

- ![EDA](./public/eda.png)

> Producer

> Channel

> Consumer

## As a Point

> Command

- ![Command](./public/command.png)

- Do Something
- Usaully Synchronous
- Sometimes returns a response
- CAlling service needs to know who handles the command

> Query

- ![Query](./public/query.png)

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
