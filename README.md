

## 組件通信總結

### 1. 組件間的關係
        1. 父子組件
        2. 兄弟組件(非嵌套)
        3. 祖孫組件(跨級)

### 2. 幾種通信方式
        1. props :
            1. children props
            2. render props
        2. 消息訂閱發布:
            pubs-sub , event等等
        3. 集中式管理
            redux , dva等
        4. conText:
            生產者、消費者模式
### 3. 比較好的搭配方式
        1. 父子組件: props
        2. 兄弟組件: 消息訂閱-發布，集中式管理
        3. 祖孫組件(跨級組件):消息訂閱-發布，集中式管理，conText(開發用的少，封裝插件用得多)