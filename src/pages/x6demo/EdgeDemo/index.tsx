//边示例

import React, { Component } from "react";

import { Color, Graph } from "@antv/x6";
import { Button } from "antd";

import { SplitBox } from "@antv/x6-react-components";
import "@antv/x6-react-components/es/split-box/style/index.css";
import "./index.less";
import data from "./data";

const commands = [
  {
    key: "prop",
    label: "prop",
  },
  {
    key: "attr",
    label: "attr",
  },
];

export default class GraphDemo extends Component {
  private container1!: HTMLDivElement;
  private container2!: HTMLDivElement;
  private container3!: HTMLDivElement;
  private graph3!: Graph;

  componentDidMount() {
    new Graph({
      container: this.container1,
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
      //画布大小自适应
      autoResize: true,
    });

    new Graph({
      container: this.container2,
      background: {
        color: "#F2F7FA",
      },
      //画布大小自适应
      autoResize: true,
    });

    this.graph3 = new Graph({
      container: this.container3,
      panning: true, //画布的拖拽
      mousewheel: true, //画布的缩放
      //画布大小自适应
      autoResize: true,
    });
    this.graph3.fromJSON(data);
  }

  refContainer1 = (container: HTMLDivElement) => {
    this.container1 = container;
  };

  refContainer2 = (container: HTMLDivElement) => {
    this.container2 = container;
  };

  refContainer3 = (container: HTMLDivElement) => {
    this.container3 = container;
  };
  change = (command: string) => {
    const edges = this.graph3.getEdges();
    switch (command) {
      case "prop":
        edges.forEach((edge) => {
          const x = Math.floor(Math.random() * 600);
          const y = Math.floor(Math.random() * 200);
          edge.prop("vertices", [[x, y]]);
        });
        break;
      case "attr":
        edges.forEach((edge) => {
          const color = Color.random().toHex();
          edge.attr("line/stroke", color);
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <>
        <div className="app-btns">
          <Button.Group>
            {commands.map((item) => (
              <Button onClick={() => this.change(item.key)} key={item.key}>
                {item.label}
              </Button>
            ))}
          </Button.Group>
        </div>

        <div className="auto-resize-app">
          <SplitBox split="horizontal">
            <div className="full">
              <div ref={this.refContainer1} />
            </div>
            <SplitBox split="vertical">
              <div className="full">
                <div ref={this.refContainer2} />
              </div>
              <div className="full">
                <div ref={this.refContainer3} />
              </div>
            </SplitBox>
          </SplitBox>
        </div>
      </>
    );
  }
}
