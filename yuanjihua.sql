/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50145
Source Host           : localhost:3306
Source Database       : yuanjihua

Target Server Type    : MYSQL
Target Server Version : 50145
File Encoding         : 65001

Date: 2018-06-19 19:18:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  `content` longblob,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for case
-- ----------------------------
DROP TABLE IF EXISTS `case`;
CREATE TABLE `case` (
  `case_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `period` varchar(255) DEFAULT NULL,
  `time_end` datetime DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `time_need` varchar(255) DEFAULT NULL,
  `tech_get` varchar(255) DEFAULT NULL,
  `join_in` varchar(255) DEFAULT NULL,
  `finished` tinyint(4) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`case_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of case
-- ----------------------------
INSERT INTO `case` VALUES ('1', 'XX项目开发', '电商实战开发', '第四期', '2018-06-28 00:00:00', '分配任务，进行团队开发，本次活动涉及后台管理系统，移动端PC端联调，界面搭建等', '为期一个月', 'IOS,ANDROID,PP,H5', '根据能力分配任务，请加微信介绍一下自己的情况，微信：hello', '0', '../public/img/m_img/c1.png');
INSERT INTO `case` VALUES ('2', 'XX项目开发', '电商实战开发', '第四期', '2018-06-28 00:00:00', '分配任务，进行团队开发，本次活动涉及后台管理系统，移动端PC端联调，界面搭建等', '为期一个月', 'IOS,ANDROID,PP,H5', '根据能力分配任务，请加微信介绍一下自己的情况，微信：hello', '0', '../public/img/m_img/c2.png');
INSERT INTO `case` VALUES ('3', 'XX项目开发', '电商实战开发', '第四期', '2018-06-28 00:00:00', '分配任务，进行团队开发，本次活动涉及后台管理系统，移动端PC端联调，界面搭建等', '为期一个月', 'IOS,ANDROID,PP,H5', '根据能力分配任务，请加微信介绍一下自己的情况，微信：hello', '1', '../public/img/m_img/c1.png');
INSERT INTO `case` VALUES ('4', 'XX项目开发', '电商实战开发', '第四期', '2018-06-28 00:00:00', '分配任务，进行团队开发，本次活动涉及后台管理系统，移动端PC端联调，界面搭建等', '为期一个月', 'IOS,ANDROID,PP,H5', '根据能力分配任务，请加微信介绍一下自己的情况，微信：hello', '0', '../public/img/m_img/c2.png');
INSERT INTO `case` VALUES ('5', 'XX项目开发', '电商实战开发', '第四期', '2018-06-28 00:00:00', '分配任务，进行团队开发，本次活动涉及后台管理系统，移动端PC端联调，界面搭建等', '为期一个月', 'IOS,ANDROID,PP,H5', '根据能力分配任务，请加微信介绍一下自己的情况，微信：hello', '0', '../public/img/m_img/c1.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `uname` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `introduction` text,
  `head_img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '亦可赛艇', 'admin1', 'admin1', ' “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”\r\n                    “我从未见过有如此厚颜无耻之人！！！”', '../public/img/m_img/head1.jpg');

-- ----------------------------
-- Table structure for _mysql_session_store
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of _mysql_session_store
-- ----------------------------
