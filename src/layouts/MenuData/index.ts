
import { useNavigate } from "react-router-dom";

//导航菜单
function GetMenuData() {
    const navigate = useNavigate();
    const menuData = [
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
            label: "画布Demo",
            onClick: () => navigate('/graphdemo')
        },
        {
            key: "nodedemo",
            label: "节点Demo",
            onClick: () => navigate('/nodedemo')
        }, {
            key: "edgedemo",
            label: "边Demo",
            onClick: () => navigate('/edgedemo')
        }, {
            key: "portsdemo",
            label: "连接桩",
            onClick: () => navigate('/portsdemo')
        }, {
            key: "connectingdemo",
            label: "连线交互",
            onClick: () => navigate('/connectingdemo')
        }, {
            key: "ebeddingdemo",
            label: "组合示例",
            onClick: () => navigate('/ebeddingdemo')
        }, {
            key: "customevent",
            label: "自定义事件",
            onClick: () => navigate('/customevent')
        },
    ];
    return menuData;
}


export default GetMenuData;