"use strict";(self.webpackChunk_wb_tech_ui_react=self.webpackChunk_wb_tech_ui_react||[]).push([[968],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Lo:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconGallery,X6:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Heading,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,_R:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconItem,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,dk:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Description,gw:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.StoryTable,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/components/checkbox-group/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Column:()=>Column,Row:()=>Row,Sandbox:()=>Sandbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var components_checkbox=__webpack_require__("./src/components/checkbox/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),checkbox_group=__webpack_require__("./src/components/checkbox-group/index.tsx");function _createMdxContent(props){var _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"Checkbox Group"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент для организации визуальных групп чекбоксов."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Импорт компонента в код."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { CheckboxGroup } from '@wb-tech/ui-react';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Ниже приведены примеры всех состояний описанных в дизайн системе."}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-checkboxes-checkbox-group--row"})}),"\n",(0,jsx_runtime.jsx)(dist_esm.Xz,{children:(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-checkboxes-checkbox-group--column"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Параметры"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{of:checkbox_group.c})]})}const index_docs=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},(0,esm.ah)(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};const index_stories={title:"Checkboxes/Checkbox Group",component:checkbox_group.c,subcomponents:{Checkbox:components_checkbox.X},args:{legend:"My checkbox family",children:[(0,jsx_runtime.jsx)(components_checkbox.X,{name:"checkbox-1"},"checkbox-1"),(0,jsx_runtime.jsx)(components_checkbox.X,{name:"checkbox-2",label:"My checkbox 2"},"checkbox-2"),(0,jsx_runtime.jsx)(components_checkbox.X,{name:"checkbox-3",label:"My checkbox 3",description:"Description checkbox 3"},"checkbox-3")]},argTypes:{className:{control:"text"},legend:{control:"text"},children:{control:!1}},parameters:{docs:{page:index_docs},design:{type:"figma",url:"https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=6633%3A127623&t=bJms1tK1Y27PyXbH-0"}}};var Template=function Template(props){return(0,jsx_runtime.jsx)(checkbox_group.c,Object.assign({},props))};Template.displayName="Template";var Sandbox=Template.bind({}),Row=Template.bind({});Row.args={direction:"row"};var Column=Template.bind({});Column.args={direction:"column"},Sandbox.parameters=Object.assign({storySource:{source:"(props) => <CheckboxGroup {...props} />"}},Sandbox.parameters),Row.parameters=Object.assign({storySource:{source:"(props) => <CheckboxGroup {...props} />"}},Row.parameters),Column.parameters=Object.assign({storySource:{source:"(props) => <CheckboxGroup {...props} />"}},Column.parameters);var __namedExportsOrder=["Sandbox","Row","Column"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/checkbox-group/stories/index.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/checkbox-group/stories/index.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);