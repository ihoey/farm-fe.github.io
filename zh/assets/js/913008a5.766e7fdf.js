"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[9136],{294:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(9496),a=n(5924);const l={tabItem:"tabItem_rlDe"};function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:n},t)}},4656:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(1163),a=n(9496),l=n(5924),s=n(9866),i=n(3442),o=n(2981),u=n(1267),c=n(1552);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=f(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,u]=g({queryString:n,groupId:r}),[p,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,l]),tabValues:l}}var v=n(3537);const b={tabList:"tabList_t2F_",tabItem:"tabItem_TXTv"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:f},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=d(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},3679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var r=n(1163),a=(n(9496),n(9613)),l=n(3067),s=n(4656),i=n(294);const o={},u="@farmfe/js-plugin-svgr",c={unversionedId:"plugins/official-plugins/js-svgr",id:"plugins/official-plugins/js-svgr",title:"@farmfe/js-plugin-svgr",description:"\u652f\u6301\u5c06 SVG \u7f16\u8bd1\u6210 React \u7ec4\u5efa",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/js-svgr.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-svgr",permalink:"/zh/docs/plugins/official-plugins/js-svgr",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-svgr.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/js-plugin-sass",permalink:"/zh/docs/plugins/official-plugins/js-sass"},next:{title:"@farmfe/js-plugin-dts",permalink:"/zh/docs/plugins/official-plugins/js-dts"}},p={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"svgrOptions",id:"svgroptions",level:3},{value:"filters",id:"filters",level:3}],m={toc:f},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"farmfejs-plugin-svgr"},"@farmfe/js-plugin-svgr"),(0,a.kt)("p",null,"\u652f\u6301\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"SVG")," \u7f16\u8bd1\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," \u7ec4\u5efa"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"npm install @farmfe/js-plugin-svgr")),(0,a.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"yarn add @farmfe/js-plugin-svgr")),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"pnpm add @farmfe/js-plugin-svgr"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,6}","{2,6}":!0},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({ /* options */ })\n  ]\n}\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface FarmSvgrPluginOptions {\n  svgrOptions?: SvgrOptions;\n  filters?: {\n    resolvedPaths?: string[];\n  };\n}\n")),(0,a.kt)("h3",{id:"svgroptions"},"svgrOptions"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://react-svgr.com/docs/options/"},"svgr \u9009\u9879"),"\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({\n      svgrOptions: {\n        loadPaths: [path.resolve(process.cwd(), 'styles')]\n      }\n    })\n  ]\n}\n\nexport default config;\n")),(0,a.kt)("h3",{id:"filters"},"filters"),(0,a.kt)("p",null,"\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"svgr")," \u5904\u7406\u3002 \u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"{resolvedPaths: ['\\\\.svg$'] }"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolvedPaths"),": \u4ec5\u5904\u7406\u8fd9\u4e9b\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002 \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginSvgr from '@farmfe/js-plugin-svgr';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginSvgr({\n      filters: {\n        // all files end with .custom-svg will be processed\n        resolvedPaths: ['\\\\.custom-svg$'],\n      }\n    })\n  ]\n}\n\nexport default config;\n")))}d.isMDXComponent=!0}}]);