### 推入条目到进程词典队列

- 接口描述

```
POST /proc_queue_push HTTP/1.1

{"key":"[键]","value":"[值]"}
```

- 可能的返回

```json
{"code":0,"message":"操作成功","size":10} // size 表示词典队列中的现存的条目数
```

- 说明
    - 压入一个以 [值] 为值的条目到键为 [键] 进程词典队列中
    - [键] 标识队列，用于从队列中提取值
    - [值] 一个字符串
