import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Cook",
  description: "How to Cook - 程序员做饭指南",
  lang: "zh-CN",
  base: "/cook/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "做菜之前", link: "/tips/" },
      { text: "菜谱", link: "/dishes/" },
    ],
    sidebar: {
      "/tips/": [
        {
          text: "基础知识",
          items: [
            { text: "厨房准备", link: "/tips/厨房准备" },
            { text: "如何选择现在吃什么", link: "/tips/如何选择现在吃什么" },
          ],
        },
        {
          text: "学习技巧",
          items: [
            { text: "高压力锅", link: "/tips/learn/高压力锅" },
            { text: "去腥", link: "/tips/learn/去腥" },
            { text: "食品安全", link: "/tips/learn/食品安全" },
            { text: "微波炉", link: "/tips/learn/微波炉" },
            { text: "学习焯水", link: "/tips/learn/学习焯水" },
            { text: "学习炒与煎", link: "/tips/learn/学习炒与煎" },
            { text: "学习凉拌", link: "/tips/learn/学习凉拌" },
            { text: "学习腌", link: "/tips/learn/学习腌" },
            { text: "学习蒸", link: "/tips/learn/学习蒸" },
            { text: "学习煮", link: "/tips/learn/学习煮" },
          ],
        },
        {
          text: "进阶知识",
          items: [
            { text: "辅料技巧", link: "/tips/advanced/辅料技巧" },
            { text: "高级专业术语", link: "/tips/advanced/高级专业术语" },
            { text: "油温判断技巧", link: "/tips/advanced/油温判断技巧" },
          ],
        },
      ],
      "/dishes/": [
        {
          text: "早餐",
          items: [
            { text: "牛奶燕麦", link: "/dishes/breakfast/牛奶燕麦" },
            { text: "水煮玉米", link: "/dishes/breakfast/水煮玉米" },
            { text: "蒸水蛋", link: "/dishes/breakfast/蒸水蛋" },
            { text: "茶叶蛋", link: "/dishes/breakfast/茶叶蛋" },
            { text: "燕麦鸡蛋饼", link: "/dishes/breakfast/燕麦鸡蛋饼" },
            { text: "鸡蛋三明治", link: "/dishes/breakfast/鸡蛋三明治" },
          ],
        },
        {
          text: "汤与粥",
          items: [
            { text: "大米粥", link: "/dishes/soup/大米粥" },
            { text: "小米粥", link: "/dishes/soup/小米粥" },
            { text: "桂圆红枣粥", link: "/dishes/soup/桂圆红枣粥" },
            { text: "紫菜蛋花汤", link: "/dishes/soup/紫菜蛋花汤" },
            { text: "西红柿鸡蛋汤", link: "/dishes/soup/西红柿鸡蛋汤" },
            { text: "玉米排骨汤", link: "/dishes/soup/玉米排骨汤/玉米排骨汤" },
            { text: "疙瘩汤", link: "/dishes/soup/疙瘩汤/疙瘩汤" },
          ],
        },
        {
          text: "主食",
          items: [
            { text: "电饭煲蒸米饭", link: "/dishes/staple/米饭/电饭煲蒸米饭" },
            { text: "煮锅蒸米饭", link: "/dishes/staple/米饭/煮锅蒸米饭" },
            { text: "烙饼", link: "/dishes/staple/烙饼/烙饼" },
            { text: "炒方便面", link: "/dishes/staple/炒方便面" },
            { text: "炒年糕", link: "/dishes/staple/炒年糕" },
            { text: "蛋炒饭", link: "/dishes/staple/蛋炒饭" },
            { text: "汤面", link: "/dishes/staple/汤面" },
            { text: "西红柿鸡蛋挂面", link: "/dishes/staple/西红柿鸡蛋挂面/西红柿鸡蛋挂面" },
            { text: "扬州炒饭", link: "/dishes/staple/扬州炒饭/扬州炒饭" },
          ],
        },
        {
          text: "素菜",
          items: [
            { text: "炒茄子", link: "/dishes/vegetable_dish/炒茄子" },
            { text: "炒青菜", link: "/dishes/vegetable_dish/炒青菜" },
            { text: "凉拌黄瓜", link: "/dishes/vegetable_dish/凉拌黄瓜" },
            { text: "手撕包菜", link: "/dishes/vegetable_dish/手撕包菜/手撕包菜" },
            { text: "麻婆豆腐", link: "/dishes/vegetable_dish/麻婆豆腐/麻婆豆腐" },
            { text: "葱煎豆腐", link: "/dishes/vegetable_dish/葱煎豆腐" },
            { text: "地三鲜", link: "/dishes/vegetable_dish/地三鲜" },
            { text: "素炒豆角", link: "/dishes/vegetable_dish/素炒豆角" },
            { text: "糖拌西红柿", link: "/dishes/vegetable_dish/糖拌西红柿/糖拌西红柿" },
            { text: "酸辣土豆丝", link: "/dishes/vegetable_dish/酸辣土豆丝" },
            { text: "西红柿炒鸡蛋", link: "/dishes/vegetable_dish/西红柿炒鸡蛋" },
            { text: "西葫芦炒鸡蛋", link: "/dishes/vegetable_dish/西葫芦炒鸡蛋/西葫芦炒鸡蛋" },
            { text: "洋葱炒鸡蛋", link: "/dishes/vegetable_dish/洋葱炒鸡蛋/洋葱炒鸡蛋" },
          ],
        },
        {
          text: "荤菜",
          items: [
            { text: "红烧肉", link: "/dishes/meat_dish/红烧肉/红烧肉" },
            { text: "西红柿牛腩", link: "/dishes/meat_dish/西红柿牛腩/西红柿牛腩" },
            { text: "红烧排骨", link: "/dishes/meat_dish/红烧排骨/红烧排骨" },
            { text: "红烧牛肉", link: "/dishes/meat_dish/红烧牛肉/红烧牛肉" },
            { text: "萝卜炖牛腩", link: "/dishes/meat_dish/萝卜炖牛腩" },
            { text: "菌菇炖乌鸡", link: "/dishes/meat_dish/菌菇炖乌鸡" },
            { text: "蒜苔炒肉末", link: "/dishes/meat_dish/蒜苔炒肉末" },
            { text: "尖椒炒牛肉", link: "/dishes/meat_dish/尖椒炒牛肉" },
          ],
        },
        {
          text: "水产",
          items: [
            { text: "蒜蓉虾", link: "/dishes/aquatic/蒜蓉虾/蒜蓉虾" },
            { text: "清蒸鲈鱼", link: "/dishes/aquatic/清蒸鲈鱼/清蒸鲈鱼" },
            { text: "红烧鱼", link: "/dishes/aquatic/红烧鱼" },
            { text: "红烧鱼头", link: "/dishes/aquatic/红烧鱼头" },
            { text: "红烧鲤鱼", link: "/dishes/aquatic/红烧鲤鱼" },
          ],
        },
        {
          text: "半成品加工",
          items: [
            { text: "速冻馄饨", link: "/dishes/semi-finished/速冻馄饨" },
            { text: "速冻水饺", link: "/dishes/semi-finished/速冻水饺" },
            { text: "速冻汤圆", link: "/dishes/semi-finished/速冻汤圆/速冻汤圆" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/yanyue404/cook" }],
    footer: {
      message: "用代码的视角看待烹饪",
      copyright: "Copyright © 2024-present yanyue404",
    },
  },
});
