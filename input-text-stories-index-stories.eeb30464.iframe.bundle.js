"use strict";(self.webpackChunk_wb_tech_ui_react=self.webpackChunk_wb_tech_ui_react||[]).push([[983],{"./node_modules/@storybook/addon-docs/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable,Lo:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconGallery,X6:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Heading,Xz:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas,_R:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.IconItem,aT:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext,dk:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Description,gw:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.StoryTable,h_:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Meta,oG:()=>_blocks__WEBPACK_IMPORTED_MODULE_0__.Story});var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js")},"./src/components/input-text/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Description:()=>Description,Disabled:()=>Disabled,ErrorStatus:()=>ErrorStatus,ErrorStatusAndMessage:()=>ErrorStatusAndMessage,IconAfter:()=>IconAfter,IconBefore:()=>IconBefore,IconBeforeAndAfter:()=>IconBeforeAndAfter,Label:()=>Label,ReadOnly:()=>ReadOnly,Required:()=>Required,Sandbox:()=>Sandbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var eye=__webpack_require__("./src/components/icons/eye.tsx"),globe=__webpack_require__("./src/components/icons/globe.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),input_text=__webpack_require__("./src/components/input-text/index.tsx");function _createMdxContent(props){var _components=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,esm.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"InputText"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компонент ",(0,jsx_runtime.jsx)(_components.code,{children:"InputText"})," предназначен для строковых данных и поддерживает нативные типы ",(0,jsx_runtime.jsx)(_components.code,{children:"email"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"password"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"search"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"text"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"tel"})," и ",(0,jsx_runtime.jsx)(_components.code,{children:"url"})," соответствующий дизайну и его состояния.\nИмеет максимально нативный API для беспроблемной работы c библиотеками управления формами такие как ",(0,jsx_runtime.jsx)(_components.code,{children:"react-hook-form"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"formik"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"final-form"})," и т.д."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Импорт компонента в код."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { InputText } from '@wb-tech/ui-react';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Ниже приведены примеры основных состояний описанных в дизайн системе."}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{isColumn:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--default"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--label"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--disabled"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--required"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--read-only"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--description"})]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{isColumn:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--error-status"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--error-status-and-message"})]}),"\n",(0,jsx_runtime.jsxs)(dist_esm.Xz,{isColumn:!0,children:[(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--icon-after"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--icon-before"}),(0,jsx_runtime.jsx)(dist_esm.oG,{id:"components-inputs-text--icon-before-and-after"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Параметры"}),"\n",(0,jsx_runtime.jsx)(dist_esm.$4,{of:input_text.o})]})}const index_docs=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},(0,esm.ah)(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};const index_stories={title:"Inputs/Text",component:input_text.o,args:{name:"text-input-name",placeholder:"Placeholder text"},argTypes:{className:{control:"text"},elError:{control:"text"},elDescription:{control:"text"},label:{control:"text"},onChange:{control:!1,table:{category:"Events"}},onBlur:{control:!1,table:{category:"Events"}},onFocus:{control:!1,table:{category:"Events"}},onClick:{control:!1,table:{category:"Events"}}},parameters:{docs:{page:index_docs},design:{type:"figma",url:"https://www.figma.com/file/c2MtpBedt0dYAz20eepwzX/%E2%9D%96-WB-Partners-DS?node-id=5518%3A111977&t=TgfvRSzjWTadnmp1-0"}}};var Template=function Template(props){return(0,jsx_runtime.jsx)(input_text.o,Object.assign({},props))};Template.displayName="Template";var Sandbox=Template.bind({});Sandbox.parameters={actions:{argTypesRegex:"^on.*"}};var Default=Template.bind({});Default.args={};var IconAfter=Template.bind({});IconAfter.args={elAfter:(0,jsx_runtime.jsx)(eye.IconEye,{})};var IconBefore=Template.bind({});IconBefore.args={elBefore:(0,jsx_runtime.jsx)(globe.IconGlobe,{})};var IconBeforeAndAfter=Template.bind({});IconBeforeAndAfter.args={elAfter:(0,jsx_runtime.jsx)(eye.IconEye,{}),elBefore:(0,jsx_runtime.jsx)(globe.IconGlobe,{})};var Label=Template.bind({});Label.args={label:"Field label"};var Disabled=Template.bind({});Disabled.args={label:"Field label",disabled:!0};var Required=Template.bind({});Required.args={label:"Field label",required:!0};var ReadOnly=Template.bind({});ReadOnly.args={label:"Field label",readOnly:!0,value:"Read only value"};var ErrorStatus=Template.bind({});ErrorStatus.args={label:"Field label",isError:!0,value:"Read only value"};var ErrorStatusAndMessage=Template.bind({});ErrorStatusAndMessage.args={label:"Field label",isError:!0,elError:"Error message text",value:"Read only value"};var Description=Template.bind({});Description.args={label:"Field label",elDescription:"Description text"},Sandbox.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},Sandbox.parameters),Default.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},Default.parameters),IconAfter.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},IconAfter.parameters),IconBefore.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},IconBefore.parameters),IconBeforeAndAfter.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},IconBeforeAndAfter.parameters),Label.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},Label.parameters),Disabled.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},Disabled.parameters),Required.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},Required.parameters),ReadOnly.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},ReadOnly.parameters),ErrorStatus.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},ErrorStatus.parameters),ErrorStatusAndMessage.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},ErrorStatusAndMessage.parameters),Description.parameters=Object.assign({storySource:{source:"(props) => <InputText {...props} />"}},Description.parameters);var __namedExportsOrder=["Sandbox","Default","IconAfter","IconBefore","IconBeforeAndAfter","Label","Disabled","Required","ReadOnly","ErrorStatus","ErrorStatusAndMessage","Description"];try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input-text/stories/index.stories.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"src/components/input-text/stories/index.stories.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}}}]);