//自定义点击事件

import React from "react";
import { Graph } from "@antv/x6";
import "./index.less";

//自定义节点
Graph.registerNode(
  "custom-click-node",
  {
    markup: [
      {
        tagName: "rect",
        selector: "body",
      },
      {
        tagName: "text",
        selector: "label",
      },
      {
        tagName: "g",
        children: [
          {
            tagName: "text",
            selector: "btnText",
          },
          {
            tagName: "rect",
            selector: "btn",
          },
        ],
      },
    ],
    attrs: {
      btn: {
        refX: "100%",
        refX2: -28,
        y: 4,
        width: 24,
        height: 18,
        rx: 10,
        ry: 10,
        fill: "rgba(255,255,0,0.01)",
        stroke: "red",
        cursor: "pointer",
        event: "node:delete",
      },
      btnText: {
        fontSize: 14,
        fill: "red",
        text: "x",
        refX: "100%",
        refX2: -19,
        y: 17,
        cursor: "pointer",
        pointerEvent: "none",
      },
      body: {
        stroke: "#8f8f8f",
        strokeWidth: 1,
        fill: "#fff",
        rx: 6,
        ry: 6,
        refWidth: "100%",
        refHeight: "100%",
      },
      label: {
        fontSize: 14,
        fill: "#333333",
        refX: "50%",
        refY: "50%",
        textAnchor: "middle",
        textVerticalAnchor: "middle",
      },
    },
  },
  true
);

export default class CustomEvent extends React.Component {
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

    const source = graph.addNode({
      shape: "custom-click-node",
      x: 40,
      y: 80,
      width: 120,
      height: 40,
      attrs: {
        label: {
          text: "Source",
        },
      },
    });

    const target = graph.addNode({
      shape: "custom-click-node",
      x: 360,
      y: 80,
      width: 120,
      height: 40,
      attrs: {
        label: {
          text: "Target",
        },
      },
    });

    graph.addEdge({
      source,
      target,
      attrs: {
        line: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
        },
      },
    });

    graph.on("node:delete", ({ view, e }: any) => {
      e.stopPropagation();
      view.cell.remove();
    });
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  render() {
    return (
      <div className="custom-click-app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
