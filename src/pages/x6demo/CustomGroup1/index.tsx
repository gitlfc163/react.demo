//限制子节点的移动

import React from "react";
import { Graph } from "@antv/x6";
import "./index.less";

Graph.registerNode(
  "custom-group-node",
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

export default class CustomGroup1 extends React.Component {
  private container!: HTMLDivElement;

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      background: {
        color: "#F2F7FA",
      },
      //通过 translating.restrict 选项,限制子节点的移动
      translating: {
        restrict(view) {
          if (view) {
            const cell = view.cell;
            if (cell.isNode()) {
              const parent = cell.getParent();
              if (parent) {
                return parent.getBBox();
              }
            }
          }
          return null;
        },
      },
    });
    //子节点
    const child = graph.addNode({
      shape: "custom-group-node",
      x: 100,
      y: 60,
      label: "Child",
      zIndex: 2,
    });
    //父节点
    const parent = graph.addNode({
      shape: "custom-group-node",
      x: 40,
      y: 40,
      width: 240,
      height: 160,
      zIndex: 1,
      label: "Parent\n(try to move me)",
    });
    //添加子节点到父节点
    parent.addChild(child);
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  render() {
    return (
      <div className="restrict-app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
