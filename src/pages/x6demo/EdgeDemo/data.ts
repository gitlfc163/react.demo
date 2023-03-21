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
            x: 380,
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
            target: "node2",
            //路径点。边从起始点开始，按顺序经过路径点，最后到达终止点。
            vertices: [
                { x: 100, y: 200 },
                { x: 300, y: 120 },
            ],
            // 路由 router 将对 vertices 进一步处理，并在必要时添加额外的点，然后返回处理后的点
            router: "orth",
            // 连接器 connector 将路由 router 返回的点加工成渲染边所需要的 pathData
            connector: 'rounded',
            //labels用于设置标签文本、位置、样式等
            labels: [
                {
                    attrs: {
                        label: {
                            text: '40%',
                            stroke: '#aaa',
                        },
                    },
                    position: 0.4,
                },
                {
                    attrs: {
                        label: {
                            text: '60%',
                            stroke: '#aaa',
                        },
                    },
                    position: 0.6,
                },
            ],
        },

    ]
};

export default data;