---
id: ros-install
title: ROS-Melodic安装指北
sidebar_label: ros安装
---

## 预备工作
### 1. 换源
点击软件和更新，如下图所示
![](https://s3.bmp.ovh/imgs/2022/05/30/6cc7e9e6ad64c54e.png)

切换为中科大源（或清华源），如下图所示
![](https://s3.bmp.ovh/imgs/2022/05/30/524fd153a6782619.png)

### 2. 勾选下载源
依次勾选前四个选项，如下图所示
![](https://s3.bmp.ovh/imgs/2022/05/30/8b8470b1823f5446.png)

## 安装ros准备工作
1. 添加sources.list
   
    sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

2. 添加密钥
   
    sudo apt install curl
    curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -

> 若报GDP错误，请执行以下命令

    wget https://download.docker.com/linux/ubuntu/gpg
    sudo apt-key add gpg

3. 更新索引
   
    sudo apt update

## 安装ROS
安装ros

    sudo apt install ros-melodic-desktop-full

安装rosinstall工具

    sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential

## ROS配置

1. 写入环境变量

    echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
    source ~/.bashrc

2. init初始化
   
>使用小鱼rosdepc初始化

    sudo apt-get install python3-pip 
    sudo pip3 install rosdepc
    sudo rosdepc init
    rosdepc update

## ROS测试
新建终端输入

    roscore

新建另一终端输入

    rosrun turtlesim turtlesim_node

此时出现如下图所示，则ROS安装成功

![](https://s3.bmp.ovh/imgs/2022/05/30/b01e372cb066ad1a.png)