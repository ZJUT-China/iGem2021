**The codebase of ZJUT-iGem**


- [1.ToDo](#1todo)
  - [1.1 pages](#11-pages)
  - [1.2 component](#12-component)
- [2.file structure](#2file-structure)
- [3.member list](#3member-list)
- [4.team norms](#4team-norms)
  - [4.1命名规范](#41命名规范)
  - [4.2html规范](#42html规范)
    - [4.2.1id的使用](#421id的使用)
    - [4.2.2class的使用](#422class的使用)
    - [4.2.3代码格式规范](#423代码格式规范)
  - [4.3css规范](#43css规范)
    - [4.3.1避免采用id选择器](#431避免采用id选择器)
    - [4.3.2（可选）采用css变量设置某些重复属性值](#432可选采用css变量设置某些重复属性值)
  - [4.4(可选)代码模块化，有顺序](#44可选代码模块化有顺序)
  - [4.5javascript规范](#45javascript规范)
    - [4.5.1代码规范](#451代码规范)
  - [4.6注释规范](#46注释规范)

## 1.ToDo

### 1.1 pages

### 1.2 component

- [ ] landing
- [ ] loading

## 2.file structure
```
|-- wiki
    |-- package-lock.json
    |-- readme.md
    |-- 团队规范.md
    |-- bootstrap
    |   |-- CHANGELOG.md
    |   |-- Gruntfile.js
    |   |-- LICENSE
    |   |-- package.json
    |   |-- README.md
    |   |-- dist
    |   |   |-- css
    |   |   |   |-- bootstrap-theme.css
    |   |   |   |-- bootstrap-theme.css.map
    |   |   |   |-- bootstrap-theme.min.css
    |   |   |   |-- bootstrap-theme.min.css.map
    |   |   |   |-- bootstrap.css
    |   |   |   |-- bootstrap.css.map
    |   |   |   |-- bootstrap.min.css
    |   |   |   |-- bootstrap.min.css.map
    |   |   |-- fonts
    |   |   |   |-- glyphicons-halflings-regular.eot
    |   |   |   |-- glyphicons-halflings-regular.svg
    |   |   |   |-- glyphicons-halflings-regular.ttf
    |   |   |   |-- glyphicons-halflings-regular.woff
    |   |   |   |-- glyphicons-halflings-regular.woff2
    |   |   |-- js
    |   |       |-- bootstrap.js
    |   |       |-- bootstrap.min.js
    |   |       |-- npm.js
    |   |-- fonts
    |   |   |-- glyphicons-halflings-regular.eot
    |   |   |-- glyphicons-halflings-regular.svg
    |   |   |-- glyphicons-halflings-regular.ttf
    |   |   |-- glyphicons-halflings-regular.woff
    |   |   |-- glyphicons-halflings-regular.woff2
    |   |-- grunt
    |   |   |-- .jshintrc
    |   |   |-- .stylelintrc
    |   |   |-- browsers.js
    |   |   |-- bs-commonjs-generator.js
    |   |   |-- bs-glyphicons-data-generator.js
    |   |   |-- bs-lessdoc-parser.js
    |   |   |-- bs-raw-files-generator.js
    |   |   |-- change-version.js
    |   |   |-- configBridge.json
    |   |   |-- generate-sri.js
    |   |   |-- karma.conf.js
    |   |-- js
    |   |   |-- affix.js
    |   |   |-- alert.js
    |   |   |-- button.js
    |   |   |-- carousel.js
    |   |   |-- collapse.js
    |   |   |-- dropdown.js
    |   |   |-- modal.js
    |   |   |-- popover.js
    |   |   |-- scrollspy.js
    |   |   |-- tab.js
    |   |   |-- tooltip.js
    |   |   |-- transition.js
    |   |-- less
    |       |-- alerts.less
    |       |-- badges.less
    |       |-- bootstrap.less
    |       |-- breadcrumbs.less
    |       |-- button-groups.less
    |       |-- buttons.less
    |       |-- carousel.less
    |       |-- close.less
    |       |-- code.less
    |       |-- component-animations.less
    |       |-- dropdowns.less
    |       |-- forms.less
    |       |-- glyphicons.less
    |       |-- grid.less
    |       |-- input-groups.less
    |       |-- jumbotron.less
    |       |-- labels.less
    |       |-- list-group.less
    |       |-- media.less
    |       |-- mixins.less
    |       |-- modals.less
    |       |-- navbar.less
    |       |-- navs.less
    |       |-- normalize.less
    |       |-- pager.less
    |       |-- pagination.less
    |       |-- panels.less
    |       |-- popovers.less
    |       |-- print.less
    |       |-- progress-bars.less
    |       |-- responsive-embed.less
    |       |-- responsive-utilities.less
    |       |-- scaffolding.less
    |       |-- tables.less
    |       |-- theme.less
    |       |-- thumbnails.less
    |       |-- tooltip.less
    |       |-- type.less
    |       |-- utilities.less
    |       |-- variables.less
    |       |-- wells.less
    |       |-- mixins
    |           |-- alerts.less
    |           |-- background-variant.less
    |           |-- border-radius.less
    |           |-- buttons.less
    |           |-- center-block.less
    |           |-- clearfix.less
    |           |-- forms.less
    |           |-- gradients.less
    |           |-- grid-framework.less
    |           |-- grid.less
    |           |-- hide-text.less
    |           |-- image.less
    |           |-- labels.less
    |           |-- list-group.less
    |           |-- nav-divider.less
    |           |-- nav-vertical-align.less
    |           |-- opacity.less
    |           |-- pagination.less
    |           |-- panels.less
    |           |-- progress-bar.less
    |           |-- reset-filter.less
    |           |-- reset-text.less
    |           |-- resize.less
    |           |-- responsive-visibility.less
    |           |-- size.less
    |           |-- tab-focus.less
    |           |-- table-row.less
    |           |-- text-emphasis.less
    |           |-- text-overflow.less
    |           |-- vendor-prefixes.less
    |-- component
    |   |-- landing.html
    |   |-- loading.html
    |   |-- nBar.txt
    |-- images
    |   |-- 纹路.jpg
    |-- jquery
    |   |-- AUTHORS.txt
    |   |-- bower.json
    |   |-- LICENSE.txt
    |   |-- package.json
    |   |-- README.md
    |   |-- dist
    |   |   |-- jquery.js
    |   |   |-- jquery.min.js
    |   |   |-- jquery.min.map
    |   |   |-- jquery.slim.js
    |   |   |-- jquery.slim.min.js
    |   |   |-- jquery.slim.min.map
    |   |-- external
    |   |   |-- sizzle
    |   |       |-- LICENSE.txt
    |   |       |-- dist
    |   |           |-- sizzle.js
    |   |           |-- sizzle.min.js
    |   |           |-- sizzle.min.map
    |   |-- src
    |       |-- ajax.js
    |       |-- attributes.js
    |       |-- callbacks.js
    |       |-- core.js
    |       |-- css.js
    |       |-- data.js
    |       |-- deferred.js
    |       |-- deprecated.js
    |       |-- dimensions.js
    |       |-- effects.js
    |       |-- event.js
    |       |-- jquery.js
    |       |-- manipulation.js
    |       |-- offset.js
    |       |-- queue.js
    |       |-- selector-native.js
    |       |-- selector-sizzle.js
    |       |-- selector.js
    |       |-- serialize.js
    |       |-- traversing.js
    |       |-- wrap.js
    |       |-- ajax
    |       |   |-- jsonp.js
    |       |   |-- load.js
    |       |   |-- script.js
    |       |   |-- xhr.js
    |       |   |-- var
    |       |       |-- location.js
    |       |       |-- nonce.js
    |       |       |-- rquery.js
    |       |-- attributes
    |       |   |-- attr.js
    |       |   |-- classes.js
    |       |   |-- prop.js
    |       |   |-- support.js
    |       |   |-- val.js
    |       |-- core
    |       |   |-- access.js
    |       |   |-- camelCase.js
    |       |   |-- DOMEval.js
    |       |   |-- init.js
    |       |   |-- isAttached.js
    |       |   |-- nodeName.js
    |       |   |-- parseHTML.js
    |       |   |-- parseXML.js
    |       |   |-- ready-no-deferred.js
    |       |   |-- ready.js
    |       |   |-- readyException.js
    |       |   |-- stripAndCollapse.js
    |       |   |-- support.js
    |       |   |-- toType.js
    |       |   |-- var
    |       |       |-- rsingleTag.js
    |       |-- css
    |       |   |-- addGetHookIf.js
    |       |   |-- adjustCSS.js
    |       |   |-- curCSS.js
    |       |   |-- finalPropName.js
    |       |   |-- hiddenVisibleSelectors.js
    |       |   |-- showHide.js
    |       |   |-- support.js
    |       |   |-- var
    |       |       |-- cssExpand.js
    |       |       |-- getStyles.js
    |       |       |-- isHiddenWithinTree.js
    |       |       |-- rboxStyle.js
    |       |       |-- rnumnonpx.js
    |       |       |-- swap.js
    |       |-- data
    |       |   |-- Data.js
    |       |   |-- var
    |       |       |-- acceptData.js
    |       |       |-- dataPriv.js
    |       |       |-- dataUser.js
    |       |-- deferred
    |       |   |-- exceptionHook.js
    |       |-- deprecated
    |       |   |-- ajax-event-alias.js
    |       |   |-- event.js
    |       |-- effects
    |       |   |-- animatedSelector.js
    |       |   |-- Tween.js
    |       |-- event
    |       |   |-- focusin.js
    |       |   |-- support.js
    |       |   |-- trigger.js
    |       |-- exports
    |       |   |-- amd.js
    |       |   |-- global.js
    |       |-- manipulation
    |       |   |-- buildFragment.js
    |       |   |-- getAll.js
    |       |   |-- setGlobalEval.js
    |       |   |-- support.js
    |       |   |-- wrapMap.js
    |       |   |-- _evalUrl.js
    |       |   |-- var
    |       |       |-- rscriptType.js
    |       |       |-- rtagName.js
    |       |-- queue
    |       |   |-- delay.js
    |       |-- traversing
    |       |   |-- findFilter.js
    |       |   |-- var
    |       |       |-- dir.js
    |       |       |-- rneedsContext.js
    |       |       |-- siblings.js
    |       |-- var
    |           |-- arr.js
    |           |-- class2type.js
    |           |-- document.js
    |           |-- documentElement.js
    |           |-- flat.js
    |           |-- fnToString.js
    |           |-- getProto.js
    |           |-- hasOwn.js
    |           |-- indexOf.js
    |           |-- isFunction.js
    |           |-- isWindow.js
    |           |-- ObjectFunctionString.js
    |           |-- pnum.js
    |           |-- push.js
    |           |-- rcheckableType.js
    |           |-- rcssNum.js
    |           |-- rnothtmlwhite.js
    |           |-- slice.js
    |           |-- support.js
    |           |-- toString.js
    |-- js
    |   |-- main.js
    |-- models
    |   |-- cas9.glb
    |   |-- cas9.stl
    |-- pages
    |   |-- home.html
    |-- style
    |   |-- common.css
    |   |-- loading.css
    |   |-- nBar.css
    |-- three.js
        |-- package-lock.json
```

## 3.member list

## 4.team norms

### 4.1命名规范

采用驼峰命名法(暂定)

采用具有相关含义的词汇进行命名，方便阅读

### 4.2html规范

#### 4.2.1id的使用

  id唯一，每个id对应唯一的一个元素，避免同一个id对应多个元素
  
  若是没有用到元素的id时，不设置id值
  
  若是想要设置css，请使用class
  
  ```html
 <p id="p1"></p>
 <p id="p2"></p>
 <p id="p3"></p>
  ```
  
#### 4.2.2class的使用

  class属性用于设置css，将大量相同样式设置为一个属性，用到时直接设置class属性
  
#### 4.2.3代码格式规范

  同级元素缩进空格相同，子元素与父元素相比缩进4个空格
  
  若元素标签内包含子元素标签则采取换行缩进
  
  此外，不要在标签中采用style设置css属性
  
  ***注意，一定要有闭标签***

 ```html
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
      </head>
      <body>
          <div>
              <div style="--s=1;">
                  <p>hello world!</p>
              </div>
          </div>
          <div style="--s=2;">
              <p>hello world!</p>
          </div>
      </body>
  </html>
  ```

  ```css
   div{
       left:clac(var(--s)*100px-100px)；
       width:100px;
       height:100px;
   }
  ```

### 4.3css规范

#### 4.3.1避免采用id选择器

  以class属性设置css样式能很大程度减少代码量

#### 4.3.2（可选）采用css变量设置某些重复属性值

  运用css变量能减少修改代码时的工作量

  ```css
  :root{
      --bgcolor:black;
      --boxcolor:skyblue;
  }
  body{
<<<<<<< HEAD
      background-color: --bgcolor;
  }
  .box1{
      background-color: --boxcolor;
  }
  .box2{
      background-color: --boxcolor;
=======
      background-color: var(--bgcolor);
  }
  .box1{
      background-color: var(--boxcolor);
  }
  .box2{
      background-color: var(--boxcolor);
>>>>>>> bd436fc374fbaf8a3b858fae0fafee2e1b2cbe8b
  }
  ```
  
### 4.4(可选)代码模块化，有顺序
  
  模块化：将代码划分为几个模块，将正文样式、排版样式等通用样式写在一个css中命名为common.css;将某些专有样式设置写在一个文件，必如loading动画的css设置，命名为loading.css

  有顺序：编写css代码时，依照一定的顺序(默认为元素的先后顺序)。通用型样式写在最前方。

  ```html
    <body>
        <div >
            <div class="text1 box1">
                <p>hello world!</p>
            </div>
        </div>
        <div class="text1 box2">
            <p >hello world!</p>
        </div>
    </body>
  
  ```

  ```css
  *{
      margin:0;
      padding:0;
  }
  body{
      background-color:black;
  }
  .text1{
      font-family:Sans-serif,Monospace;
      font-size:5vh;
  }
  .box1{
      height:50vh;
      width:50vh;
      background-color:blue;
  }
  .box2{
      height:100vh;
      width:100vh;
      background-color:yellow;
  }
  ```

### 4.5javascript规范

#### 4.5.1代码规范

注意代码层级，同级缩进相同，两层级间相差4个空格

对于for、if等语句花括号不要省略

一句代码结束注意换行

```javascript
function((e)=>{
    var i=0;
    let box1=document.getEementById("box1");
    for(;i<10;i++){
        i+=i;
    }
    box1.value=i;
})
```

*其余待定（等待确定使用框架种类）*

### 4.6注释规范

在实现某特定功能或效果的代码块的最上方标明实现了什么

```html
 //导航栏
 <div class="top box1">
     <ul class="topboard">
         <li><a href="javascript:void(0)">home</a></li>
         <li><a href="javascript:void(0)">project</a></li>
         <li><a href="javascript:void(0)">team</a></li>
     </ul>
 </div>
 ```
 ```css
 *{
    margin:0;
    padding:0;
 }
 .box1{
    border-radius: 5px;
    opacity: 0.5;
 }
 //导航栏样式
 .top{
     width:100%;
 }
 .topboard{
     display: flex;
     width: 100%;
     min-width: 122px;
     justify-content: space-around;
     background-color: black;
     /* height: 30px; */
 }
 .topboard li{
     list-style: none;
     text-align: center;
     float: left;
     width: 33%;
 }
 .topboard li a{
    text-decoration: none;
    display: block;
    font-size: 5vh;
    color: white;
    border-style: white;
    width: 100%;
    justify-content: space-around;
    border-right: white;
 }
 .topboard li a:hover{
    background-color: rgb(240, 222, 222,0.1);
 }
 ```
