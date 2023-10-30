"use strict";(self.webpackChunkfarm_docs=self.webpackChunkfarm_docs||[]).push([[6601],{294:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(9496),a=n(5924);const l={tabItem:"tabItem_rlDe"};function o(e){let{children:t,hidden:n,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4656:(e,t,n)=>{n.d(t,{Z:()=>C});var s=n(1163),a=n(9496),l=n(5924),o=n(9866),r=n(3442),i=n(2981),u=n(1267),p=n(1552);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=f(e),[o,r]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[i,u]=d({queryString:n,groupId:s}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,p.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),b=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=n(3537);const h={tabList:"tabList_t2F_",tabItem:"tabItem_TXTv"};function k(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),f=e=>{const t=e.currentTarget,n=p.indexOf(t),s=u[n].value;s!==r&&(c(t),i(s))},m=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:f},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":r===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(k,(0,s.Z)({},e,t)),a.createElement(v,(0,s.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return a.createElement(y,(0,s.Z)({key:String(t)},e))}},8975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>f});var s=n(1163),a=(n(9496),n(9613)),l=n(3067),o=n(4656),r=n(294);const i={},u="@farmfe/js-plugin-postcss",p={unversionedId:"plugins/official-plugins/js-postcss",id:"plugins/official-plugins/js-postcss",title:"@farmfe/js-plugin-postcss",description:"\u652f\u6301 postcss \u7684\u524d\u7f6e\u7f16\u8bd1\u5de5\u4f5c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plugins/official-plugins/js-postcss.mdx",sourceDirName:"plugins/official-plugins",slug:"/plugins/official-plugins/js-postcss",permalink:"/zh/docs/plugins/official-plugins/js-postcss",draft:!1,editUrl:"https://github.com/farm-fe/farm-fe.github.io/tree/main/docs/plugins/official-plugins/js-postcss.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pluginSidebar",previous:{title:"@farmfe/plugin-sass",permalink:"/zh/docs/plugins/official-plugins/sass"},next:{title:"@farmfe/js-plugin-less",permalink:"/zh/docs/plugins/official-plugins/js-less"}},c={},f=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"postcssLoadConfig",id:"postcssloadconfig",level:3},{value:"filters",id:"filters",level:3},{value:"implementation",id:"implementation",level:3}],m={toc:f},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"farmfejs-plugin-postcss"},"@farmfe/js-plugin-postcss"),(0,a.kt)("p",null,"\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss")," \u7684\u524d\u7f6e\u7f16\u8bd1\u5de5\u4f5c"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"npm install @farmfe/js-plugin-postcss postcss")),(0,a.kt)(r.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"yarn add @farmfe/js-plugin-postcss postcss")),(0,a.kt)(r.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"CodeBlock"},"pnpm add @farmfe/js-plugin-postcss postcss"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,6}","{2,6}":!0},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({ /* options */ })\n  ]\n}\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type PostcssPluginOptions = {\n  /**\n   * @default undefined\n   * postcss-load-config options. path default to farm.config.js root.\n   */\n  postcssLoadConfig?: {\n    ctx?: postcssLoadConfig.ConfigContext;\n    path?: string;\n    options?: Parameters<typeof postcssLoadConfig>[2];\n  };\n  filters?: {\n    resolvedPaths?: string[];\n    moduleTypes?: string[];\n  };\n  implementation?: string;\n};\n\n")),(0,a.kt)("h3",{id:"postcssloadconfig"},"postcssLoadConfig"),(0,a.kt)("p",null,"Farm \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss-load-config")," \u6765\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss")," \u914d\u7f6e\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss-load-config")," \u7684\u9009\u9879\u3002 \u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-load-config"},"postcss-load-config"),"\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import path from 'node:path';\nimport { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({\n      postcssLoadConfig: {\n        // load config from client/postcss.config.js\n        path: path.join(process.cwd(), 'client')\n      }\n    })\n  ]\n}\n\nexport default config;\n")),(0,a.kt)("h3",{id:"filters"},"filters"),(0,a.kt)("p",null,"\u54ea\u4e9b\u6587\u4ef6\u5e94\u8be5\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"postcss"),"\u5904\u7406\u3002 \u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"{ moduleTypes: ['css'] }"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolvedPaths"),": \u4ec5\u5904\u7406\u8fd9\u4e9b\u8def\u5f84\u4e0b\u7684\u6587\u4ef6\u3002 \u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moduleTypes"),"\uff1a\u4ec5\u5904\u7406\u5177\u6709\u8fd9\u4e9b\u6a21\u5757\u7c7b\u578b\u7684\u6587\u4ef6\u3002 \u8bf7\u6ce8\u610f\uff0cless/sass \u6587\u4ef6\u5e94\u9996\u5148\u7531 ",(0,a.kt)("inlineCode",{parentName:"li"},"@farmfe/js-plugin-less"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"@farmfe/plugin-sass")," \u5904\u7406\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resolvedPaths")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleTypes")," \u53d6\u5e76\u96c6\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { UserConfig } from '@farmfe/core';\nimport farmJsPluginPostcss from '@farmfe/js-plugin-postcss';\n\nconst config: UserConfig = {\n  plugins: [\n    farmJsPluginPostcss({\n      filters: {\n        // all files end with .custom-css will be processed\n        resolvedPaths: ['\\\\.custom-css$'],\n        moduleTypes: ['css']\n      }\n    })\n  ]\n}\n\nexport default config;\n")),(0,a.kt)("h3",{id:"implementation"},"implementation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"postcss")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"implementation")," \u5305\u540d\u79f0\u3002 \u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss"),"\u3002"))}g.isMDXComponent=!0}}]);