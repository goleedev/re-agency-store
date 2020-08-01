import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="youtube">
      <a href="https://www.youtube.com/channel/UCU76Tl3OEO9l0yGeYIJO5lg">오성TV</a>
      </Menu.Item>
    <Menu.Item key="blog">
      <a href="https://m.blog.naver.com/PostList.nhn?blogId=olhun12">블로그</a>
    </Menu.Item>
    <SubMenu title={<span>매물</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu