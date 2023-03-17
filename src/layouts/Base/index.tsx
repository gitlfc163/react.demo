import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import styles from './index.module.less';
import React from 'react';

function GlobalHeader() {
    const navigate = useNavigate();

    return <Layout.Header className={styles.header}>
        <div className={styles.logo} />
        <Menu
            mode="horizontal"
            theme="dark"
            items={
                [
                    {
                        key: "home",
                        label: "首页",
                        onClick: () => navigate('/home')
                    },
                    {
                        key: "about",
                        label: "关于",
                        onClick: () => navigate('/about')
                    },
                    {
                        key: "x6custom",
                        label: "X6demo1",
                        onClick: () => navigate('/x6custom')
                    },
                    {
                        key: "graphdemo",
                        label: "画布大小",
                        onClick: () => navigate('/graphdemo')
                    },
                ]
            } />
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