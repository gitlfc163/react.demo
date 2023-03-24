//S2基本示例
import { SheetComponent } from "@antv/s2-react";
import "@antv/s2-react/dist/style.min.css";
import React from "react";
import "./index.less";

import s2DataConfig from "./data";

const s2Options = {
  width: 1200,
  height: 480,
};

//数据

export default class BaseDemo1 extends React.Component {
  render() {
    return (
      <div className="s2-app">
        <SheetComponent dataCfg={s2DataConfig} options={s2Options} />
      </div>
    );
  }
}
