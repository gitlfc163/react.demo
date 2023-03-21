// 1. 节点 nodes 和边 edges 字段 的 JSON 数据
const data = {
    // 节点
    nodes: [
        {
            id: "node1",
            x: 40,
            y: 40,
            width: 100,
            height: 40,
            attrs: {
                body: {
                    fill: "#2ECC71",
                    stroke: "#000",
                    strokeDasharray: "10,2"
                },
                label: {
                    text: "Hello",
                    fill: "#333",
                    fontSize: 13
                }
            }
        },
        {
            id: "node2",
            x: 180,
            y: 240,
            width: 100,
            height: 40,
            attrs: {
                body: {
                    fill: "#F39C12",
                    stroke: "#000",
                    rx: 16,
                    ry: 16
                },
                label: {
                    text: "World",
                    fill: "#333",
                    fontSize: 18,
                    fontWeight: "bold",
                    fontVariant: "small-caps"
                }
            }
        }
    ],
    edges: [
        {
            source: "node1",
            target: "node2"
        }
    ]
};

export default data;