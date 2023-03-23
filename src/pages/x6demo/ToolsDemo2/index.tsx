import React from "react";
import { Graph } from "@antv/x6";
import "./index.less";

//自定义节点
Graph.registerNode(
  "custom-tools-node",
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
export default class ToolsDemo2 extends React.Component {
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
    });
    //创建节点
    const source = graph.addNode({
      shape: "custom-tools-node",
      x: 40,
      y: 40,
      label: "Source",
      tools: ["button-remove"], //添加小工具--删除按钮
    });

    const target = graph.addNode({
      shape: "custom-tools-node",
      x: 160,
      y: 240,
      label: "Target",
      tools: ["button-remove"], //添加小工具--删除按钮
    });
    //创建边
    graph.addEdge({
      source,
      target,
      vertices: [
        { x: 90, y: 160 },
        { x: 210, y: 160 },
      ],
      tools: ["vertices", "segments"], //添加小工具
      attrs: {
        line: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
        },
      },
    });
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  render() {
    return (
      <div className="tools-basic-app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
