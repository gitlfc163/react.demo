//连线交互

import React from "react";
import { Graph } from "@antv/x6";
import { Settings, State } from "./settings";
import "./index.less";

export default class ConnectingDemo extends React.Component {
  private container!: HTMLDivElement;
  private graph!: Graph;

  componentDidMount() {
    this.initGraph({
      allowBlank: true,
      allowMulti: true,
      allowLoop: true,
      allowNode: true,
      allowEdge: true,
      allowPort: true,
    });
  }
  //渲染画布
  initGraph = (options: State) => {
    if (this.graph) {
      this.graph.dispose();
    }
    const graph = new Graph({
      container: this.container,
      width: 800,
      height: 300,
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
      connecting: {
        ...options, //allowXXX配置
        createEdge() {
          return this.createEdge({
            attrs: {
              line: {
                stroke: "#8f8f8f",
                strokeWidth: 1,
              },
            },
          });
        },
      },
    });

    graph.addNode({
      x: 60,
      y: 50,
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
      ports: {
        groups: {
          in: {
            position: "top",
            attrs: {
              circle: {
                magnet: true,
                stroke: "#8f8f8f",
                r: 5,
              },
            },
          },
          out: {
            position: "bottom",
            attrs: {
              circle: {
                magnet: true,
                stroke: "#8f8f8f",
                r: 5,
              },
            },
          },
        },
        items: [
          {
            id: "port1",
            group: "in",
          },
          {
            id: "port2",
            group: "in",
          },
          {
            id: "port3",
            group: "in",
          },
          {
            id: "port4",
            group: "out",
          },
          {
            id: "port5",
            group: "out",
          },
        ],
      },
    });

    graph.addNode({
      x: 160,
      y: 200,
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
      ports: {
        groups: {
          in: {
            position: "top",
            attrs: {
              circle: {
                magnet: true,
                stroke: "#8f8f8f",
                r: 5,
              },
            },
          },
          out: {
            position: "bottom",
            attrs: {
              circle: {
                magnet: true,
                stroke: "#8f8f8f",
                r: 5,
              },
            },
          },
        },
        items: [
          {
            id: "port1",
            group: "in",
          },
          {
            id: "port2",
            group: "in",
          },
          {
            id: "port3",
            group: "in",
          },
          {
            id: "port4",
            group: "out",
          },
          {
            id: "port5",
            group: "out",
          },
        ],
      },
    });

    //创建一条连接线
    graph.addEdge({
      source: [320, 80],
      target: [400, 250],
      attrs: {
        line: {
          stroke: "#8f8f8f",
          strokeWidth: 1,
        },
      },
    });

    this.graph = graph;
  };
  //allowXXX设置器改变后
  onSettingChanged = (options: State) => {
    this.initGraph(options);
  };

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  render() {
    return (
      <div className="connecting-app">
        <div className="app-side">
          <Settings onChange={this.onSettingChanged} />
        </div>
        <div className="app-content" ref={this.refContainer} />
      </div>
    );
  }
}
