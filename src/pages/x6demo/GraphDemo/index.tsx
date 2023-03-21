import React, { Component } from 'react'

import { Graph } from '@antv/x6'
import { SplitBox } from '@antv/x6-react-components'
import '@antv/x6-react-components/es/split-box/style/index.css'
import './index.less'
import data from './data'

export default class GraphDemo extends Component {
  private container1!: HTMLDivElement
  private container2!: HTMLDivElement
  private container3!: HTMLDivElement

  componentDidMount() {
    new Graph({
      container: this.container1,
      //背景设置
      background: {
        color: '#F2F7FA',
      },
      //网格设置
      grid: {
        visible: true,
        type: 'doubleMesh',
        size:10,//网格大小
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
      //画布大小自适应
      autoResize: true,
    })

    new Graph({
      container: this.container2,
      background: {
        color: '#F2F7FA',
      },
      //画布大小自适应
      autoResize: true,
    })

    const graph3=new Graph({
      container: this.container3,
      panning:true,//画布的拖拽
      mousewheel:true,//画布的缩放
      //画布大小自适应
      autoResize: true,
    })
    graph3.fromJSON(data);

    //添加节点
    graph3.addNode({
      shape: "rect",
      x: 290,
      y: 220,
      label:"addNode",
      width: 100,
      height: 40,
    });
  }
  
  refContainer1 = (container: HTMLDivElement) => {
    this.container1 = container
  }

  refContainer2 = (container: HTMLDivElement) => {
    this.container2 = container
  }

  refContainer3 = (container: HTMLDivElement) => {
    this.container3 = container
  }

  render() {
    return (
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
    )
  }
}
