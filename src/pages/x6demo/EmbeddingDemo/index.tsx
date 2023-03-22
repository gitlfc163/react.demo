//嵌套节点

import React from "react";
import { Graph } from "@antv/x6";
import "./index.less";

//自定义节点
Graph.registerNode(
  "custom-node",
  {
    inherit: "rect",
    width: 100,
    height: 40,
    attrs: {
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
        fill: "#fff",
        rx: 6,
        ry: 6,
      },
    },
  },
  true
);

export default class Example extends React.Component {
  private container!: HTMLDivElement;

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      //背景设置
      background: {
        color: "#F2F7FA",
      },
      //网格设置
      grid: {
        visible: true,
        type: "doubleMesh",
        size: 10, //网格大小
        args: [
          {
            color: "#eee", // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: "#ddd", // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
      //embedding开启嵌套节点(或组合节点)
      embedding: {
        enabled: true,
        findParent({ node }) {
          // 获取移动节点的包围盒
          const bbox = node.getBBox();
          // 找到 data 中配置 { parent: true } 的节点，并且移动节点和找到的节点包围盒相交时，返回 true
          return this.getNodes().filter((node) => {
            const data = node.getData<{ parent: boolean }>();
            if (data && data.parent) {
              const targetBBox = node.getBBox();
              return bbox.isIntersectWithRect(targetBBox);
            }
            return false;
          });
        },
      },
    });

    graph.addNode({
      shape: "custom-node",
      x: 40,
      y: 140,
      width: 120,
      height: 60,
      label: "Child\n(unembed)",
      zIndex: 10,
    });

    graph.addNode({
      shape: "custom-node",
      x: 500,
      y: 100,
      width: 120,
      height: 60,
      label: "Child\n(unembed)",
      zIndex: 10,
    });

    graph.addNode({
      shape: "custom-node",
      x: 200,
      y: 80,
      width: 240,
      height: 160,
      zIndex: 1,
      label: "Parent",
      data: {
        parent: true, //设置该节点为父节点,允许嵌套子节点
      },
    });

    graph.on("node:change:parent", ({ node }) => {
      node.attr({
        label: {
          text: "Child\n(embed)",
        },
      });
    });
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  render() {
    return (
      <div className="embedding-app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
