import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import styles from './index.module.less';
import React from 'react';
import GetMenuData from "../MenuData"

function GlobalHeader() {
   
    return <Layout.Header className={styles.header}>
        <div className={styles.logo} />
        <Menu
            mode="horizontal"
            theme="dark"
            items={GetMenuData()} />
    </Layout.Header>
}

function GlobalContent() {
    return <Layout.Content className={styles.main}>
        <div className={styles.mainContainer} >
            {/* 子路由组件 */}
            <Outlet />
        </div>
    </Layout.Content>;
}

function GlobalFooter() {
    return <Layout.Footer className={styles.footer}>用 vite 创建 react18 项目</Layout.Footer>

}

export default function Index() {

    return <Layout className={styles.baseLayout}>
        <GlobalHeader />
        <GlobalContent />
        <GlobalFooter />
    </Layout>
}