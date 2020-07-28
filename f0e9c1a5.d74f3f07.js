(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),s=(n(0),n(187)),a=n(191),o=n(192);const l={title:"Assemblers"},i={unversionedId:"concepts/assemblers",id:"concepts/assemblers",isDocsHomePage:!1,title:"Assemblers",description:"Assemblers are used to translate your DTO into the underlying database type and back.",source:"@site/docs/concepts/assemblers.mdx",permalink:"/nestjs-query/docs/concepts/assemblers",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/assemblers.mdx",sidebar:"docs",previous:{title:"Services",permalink:"/nestjs-query/docs/concepts/services"},next:{title:"Services",permalink:"/nestjs-query/docs/persistence/services"}},c=[{value:"When to use Assemblers",id:"when-to-use-assemblers",children:[]},{value:"Why?",id:"why",children:[{value:"Resolvers",id:"resolvers",children:[]},{value:"Services",id:"services",children:[]},{value:"Assemblers",id:"assemblers",children:[]},{value:"Why not use the assembler in the resolver?",id:"why-not-use-the-assembler-in-the-resolver",children:[]}]},{value:"ClassTransformerAssembler",id:"classtransformerassembler",children:[]},{value:"AbstractAssembler",id:"abstractassembler",children:[{value:"Converting the Query",id:"converting-the-query",children:[]},{value:"Converting the DTO",id:"converting-the-dto",children:[]},{value:"Converting the Entity",id:"converting-the-entity",children:[]},{value:"Converting Aggregate Query",id:"converting-aggregate-query",children:[]},{value:"Converting Aggregate Response",id:"converting-aggregate-response",children:[]}]},{value:"AssemblerQueryService",id:"assemblerqueryservice",children:[{value:"Module",id:"module",children:[]},{value:"Auto Generated Resolver",id:"auto-generated-resolver",children:[]},{value:"Manual Resolver",id:"manual-resolver",children:[]}]}],b={rightToc:c};function u({components:e,...t}){return Object(s.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Assemblers are used to translate your DTO into the underlying database type and back."),Object(s.b)("h2",{id:"when-to-use-assemblers"},"When to use Assemblers"),Object(s.b)("p",null,"In most cases an Assembler will not be required because your Entity and DTO will be the same shape."),Object(s.b)("p",null,"The only time you need to define an assembler is when the DTO and Entity are different. The most common scenarios are"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Additional computed fields and you do not want to include the business logic in your DTO definition."),Object(s.b)("li",{parentName:"ul"},"Different field names because of poorly named columns in the database or to make a DB change passive to the end user.")),Object(s.b)("h2",{id:"why"},"Why?"),Object(s.b)("p",null,"Separation of concerns."),Object(s.b)("h3",{id:"resolvers"},"Resolvers"),Object(s.b)("p",null,"Your resolvers only concern is dealing with graphql and translating the request (a DTO) into something the service cares about."),Object(s.b)("p",null,"The resolver should not care about how it is persisted. The underlying Entity ",Object(s.b)("strong",{parentName:"p"},"could")," have additional fields that you do not want to expose in your API, or it may be persisted into multiple stores."),Object(s.b)("p",null,"By separating the resolver from the persistence layer you can evolve your API separate from your database model."),Object(s.b)("h3",{id:"services"},"Services"),Object(s.b)("p",null,"The services concern are operating on a DTO, preventing the leaking of persistence details to the API."),Object(s.b)("p",null," In ",Object(s.b)("inlineCode",{parentName:"p"},"nestjs-query")," services can be composed. In the case of assemblers information is translated using the assembler and delegated to an underlying service."),Object(s.b)("p",null," This alleviates any awkwardness around passing in a DTO and receiving a different object type back. Instead, your service can use an assembler to alleviate these concerns."),Object(s.b)("h3",{id:"assemblers"},"Assemblers"),Object(s.b)("p",null,"The assembler provides a single, testable, place to provide a translation between the DTO and entity, and vice versa."),Object(s.b)("h3",{id:"why-not-use-the-assembler-in-the-resolver"},"Why not use the assembler in the resolver?"),Object(s.b)("p",null,"The resolvers concern is translating graphql requests into the specified DTO."),Object(s.b)("p",null,"The services concern is accepting and returning a DTO based contract. when using an assembler to translate between the DTO and underlying entities."),Object(s.b)("p",null,"If you follow this pattern you ",Object(s.b)("strong",{parentName:"p"},"could")," use the same service with other transports (rest, microservices, etc) as long as the request can be translated into a DTO."),Object(s.b)("h2",{id:"classtransformerassembler"},"ClassTransformerAssembler"),Object(s.b)("p",null,"In most cases the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," package will properly map back and forth. Because of this there is a ",Object(s.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," that leverages the ",Object(s.b)("inlineCode",{parentName:"p"},"plainToClass")," method."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"NOTE")," The ",Object(s.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler")," is the default implementation if an ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," is not manually defined."),Object(s.b)("p",null,"If you find yourself in a scenario where you need to compute values and you dont want to add the business logic to your DTO you can extend the ",Object(s.b)("inlineCode",{parentName:"p"},"ClassTransformerAssembler"),"."),Object(s.b)("p",null,"Lets take a simple example, where we have ",Object(s.b)("inlineCode",{parentName:"p"},"TodoItemDTO")," and we want to compute the ",Object(s.b)("inlineCode",{parentName:"p"},"age"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'}),"import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    // compute the age\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n")),Object(s.b)("p",null,"While this example is fairly trivial, the same pattern should apply for more complex scenarios."),Object(s.b)("h2",{id:"abstractassembler"},"AbstractAssembler"),Object(s.b)("p",null,"To create your own ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," extend the ",Object(s.b)("inlineCode",{parentName:"p"},"AbstractAssembler"),"."),Object(s.b)("p",null,"Lets assume we have the following ",Object(s.b)("inlineCode",{parentName:"p"},"UserDTO"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.dto.ts"',title:'"user.dto.ts"'}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType } from '@nestjs/graphql';\n\n@ObjectType('User')\nclass UserDTO {\n  @FilterableField()\n  firstName!: string;\n\n  @FilterableField()\n  lastName!: string;\n\n  @FilterableField()\n  emailAddress!: string;\n}\n\n")),Object(s.b)("p",null,"But you inherited a DB schema that has names that are not as user friendly."),Object(s.b)(a.a,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"typeorm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'}),"import {Entity, Column} from 'typeorm'\n\n@Entity()\nclass UserEntity {\n  @Column()\n  first!: string;\n\n  @Column()\n  last!: string;\n\n  @Column()\n  email!: string;\n}\n"))),Object(s.b)(o.a,{value:"sequelize",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.entity.ts"',title:'"user.entity.ts"'}),"import { Table, Column, Model } from 'sequelize-typescript';\n\n@Table\nexport class UserEntity extends Model<UserEntity> {\n   @Column\n   first!: string;\n\n   @Column\n   last!: string;\n\n   @Column\n   email!: string;\n}\n\n")))),Object(s.b)("p",null,"To properly translate the ",Object(s.b)("inlineCode",{parentName:"p"},"UserDTO")," into the ",Object(s.b)("inlineCode",{parentName:"p"},"UserEntity")," and back you can extend an ",Object(s.b)("inlineCode",{parentName:"p"},"Assembler")," that the ",Object(s.b)("inlineCode",{parentName:"p"},"QueryService")," will use."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.assembler.ts"',title:'"user.assembler.ts"'}),"import {\n  AbstractAssembler,\n  Assembler,\n  Query,\n  transformQuery,\n  transformAggregateQuery,\n  transformAggregateResponse\n} from '@nestjs-query/core';\nimport { UserDTO } from './dto/user.dto';\nimport { UserEntity } from './user.entity';\n\n// `@Assembler` decorator will register the assembler with `nestjs-query` and\n// the QueryService service will be able to auto discover it.\n@Assembler(UserDTO, UserEntity)\nexport class UserAssembler extends AbstractAssembler<UserDTO, UserEntity> {\n  convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n    return transformQuery(query, {\n      firstName: 'first',\n      lastName: 'last',\n      emailAddress: 'email',\n    });\n  }\n\n  convertToDTO(entity: UserEntity): UserDTO {\n    const dto = new UserDTO();\n    dto.firstName = entity.first;\n    dto.lastName = entity.last;\n    return dto;\n  }\n\n  convertToEntity(dto: UserDTO): UserEntity {\n    const entity = new UserEntity();\n    entity.first = dto.firstName;\n    entity.last = dto.lastName;\n    return entity;\n  }\n\n  convertAggregateQuery(aggregate: AggregateQuery<TestDTO>): AggregateQuery<TestEntity> {\n     return transformAggregateQuery(aggregate, {\n       firstName: 'first',\n       lastName: 'last',\n       emailAddress: 'email',\n    });\n  }\n\n  convertAggregateResponse(aggregate: AggregateResponse<TestEntity>): AggregateResponse<TestDTO> {\n    return transformAggregateResponse(aggregate, {\n      first: 'firstName',\n      last: 'lastName',\n      email: 'emailAddress'\n    });\n  }\n}\n\n")),Object(s.b)("p",null,"The first thing to look at is the ",Object(s.b)("inlineCode",{parentName:"p"},"@Assembler")," decorator. It will register the assembler with ",Object(s.b)("inlineCode",{parentName:"p"},"nestjs-query")," so ",Object(s.b)("inlineCode",{parentName:"p"},"QueryServices")," can look it up later."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"@Assembler(UserDTO, UserEntity)\n")),Object(s.b)("h3",{id:"converting-the-query"},"Converting the Query"),Object(s.b)("p",null,"Next the ",Object(s.b)("inlineCode",{parentName:"p"},"convertQuery")," method."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertQuery(query: Query<UserDTO>): Query<UserEntity> {\n  return transformQuery(query, {\n    firstName: 'first',\n    lastName: 'last',\n    emailAddress: 'email',\n  });\n}\n")),Object(s.b)("p",null,"This method leverages the ",Object(s.b)("inlineCode",{parentName:"p"},"transformQuery")," function from ",Object(s.b)("inlineCode",{parentName:"p"},"@nestjs-query/core"),". This method will remap all fields specified in the field map to correct field name."),Object(s.b)("p",null,"In this example"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"{\n  filter: {\n    firstName: { eq: 'Bob' },\n    lastName: { eq: 'Yukon' },\n    emailAddress: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(s.b)("p",null,"Would be transformed into."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"{\n  filter: {\n    first: { eq: 'Bob' },\n    last: { eq: 'Yukon' },\n    email: { eq: 'bob@yukon.com' }\n  }\n}\n")),Object(s.b)("h3",{id:"converting-the-dto"},"Converting the DTO"),Object(s.b)("p",null,"The next piece is the ",Object(s.b)("inlineCode",{parentName:"p"},"convertToDTO"),", which will convert the entity into a the correct DTO."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertToDTO(entity: UserEntity): UserDTO {\n  const dto = new UserDTO();\n  dto.firstName = entity.first;\n  dto.lastName = entity.last;\n  return dto;\n}\n")),Object(s.b)("h3",{id:"converting-the-entity"},"Converting the Entity"),Object(s.b)("p",null,"The next piece is the ",Object(s.b)("inlineCode",{parentName:"p"},"convertToEntity"),", which will convert the DTO into a the correct entity."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertToEntity(dto: UserDTO): UserEntity {\n  const entity = new UserEntity();\n  entity.first = dto.firstName;\n  entity.last = dto.lastName;\n  return entity;\n}\n")),Object(s.b)("h3",{id:"converting-aggregate-query"},"Converting Aggregate Query"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"convertAggregateQuery")," is used to convert an ",Object(s.b)("inlineCode",{parentName:"p"},"AggregateQuery"),". This examples uses the ",Object(s.b)("inlineCode",{parentName:"p"},"transformAggregateQuery")," helper to map aggregate query fields."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertAggregateQuery(aggregate: AggregateQuery<TestDTO>): AggregateQuery<TestEntity> {\n   return transformAggregateQuery(aggregate, {\n     firstName: 'first',\n     lastName: 'last',\n     emailAddress: 'email',\n  });\n}\n")),Object(s.b)("h3",{id:"converting-aggregate-response"},"Converting Aggregate Response"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"convertAggregateResponse")," is used to convert an ",Object(s.b)("inlineCode",{parentName:"p"},"AggregateResponse"),". This examples uses the ",Object(s.b)("inlineCode",{parentName:"p"},"transformAggregateResponse")," helper to map aggregate response fields."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"convertAggregateResponse(aggregate: AggregateResponse<TestEntity>): AggregateResponse<TestDTO> {\n  return transformAggregateResponse(aggregate, {\n    first: 'firstName',\n    last: 'lastName',\n    email: 'emailAddress'\n  });\n}\n")),Object(s.b)("p",null,"This is a pretty basic example but the same pattern should apply to more complex scenarios."),Object(s.b)("h2",{id:"assemblerqueryservice"},"AssemblerQueryService"),Object(s.b)("p",null,"An ",Object(s.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," is a special type of ",Object(s.b)("inlineCode",{parentName:"p"},"QueryService")," that uses the Assembler to translate between the DTO and Entity."),Object(s.b)("p",null,"The easiest way to create an ",Object(s.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," is to use the ",Object(s.b)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator."),Object(s.b)("p",null,"Before using the decorator you need to register your Assembler with ",Object(s.b)("inlineCode",{parentName:"p"},"nestjs-query")),Object(s.b)("h3",{id:"module"},"Module"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.module.ts" {10}',title:'"user.module.ts"',"{10}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { Module } from '@nestjs/common';\nimport { UserDTO } from './user.dto';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [ /* set up your entity with a nestjs-query persitence package */],\n      assemblers: [UserAssembler],\n      resolvers: [ ],\n    }),\n  ],\n})\nexport class UserModule {}\n\n")),Object(s.b)("h3",{id:"auto-generated-resolver"},"Auto Generated Resolver"),Object(s.b)("p",null,"If you want your assembler to be used by the auto-generated resolver you can specify the ",Object(s.b)("inlineCode",{parentName:"p"},"AssemblerClass")," option."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.module.ts" {10,14}',title:'"user.module.ts"',"{10,14}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { Module } from '@nestjs/common';\nimport { UserDTO } from './user.dto';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [ /* set up your entity with a nestjs-query persitence package */],\n      assemblers: [UserAssembler],\n      resolvers: [\n        {\n          DTOClass: UserDTO,\n          AssemblerClass: UserAssembler\n        }\n      ],\n    }),\n  ],\n})\nexport class UserModule {}\n\n")),Object(s.b)("h3",{id:"manual-resolver"},"Manual Resolver"),Object(s.b)("p",null,"If you are manually defining you resolver or want to use the ",Object(s.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," in another service use the ",Object(s.b)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.resolver.ts" {8}',title:'"user.resolver.ts"',"{8}":!0}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { UserDTO } from './user.dto';\nimport { UserAssembler } from './user.assembler'\n\n@Resolver(() => UserDTO)\nexport class UserResolver extends CRUDResolver(UserDTO) {\n  constructor(@InjectAssemblerQueryService(UserAssembler) readonly service: QueryService<UserDTO>) {\n    super(service);\n  }\n}\n")),Object(s.b)("p",null,"Notice ",Object(s.b)("inlineCode",{parentName:"p"},"QueryService<UserDTO>"),"."))}u.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),b=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return n?s.a.createElement(d,l(l({ref:t},c),{},{components:n})):s.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},188:function(e,t,n){"use strict";function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}t.a=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}},189:function(e,t,n){"use strict";var r=n(0);const s=Object(r.createContext)(void 0);t.a=s},190:function(e,t,n){"use strict";var r=n(0),s=n(189);t.a=function(){const e=Object(r.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},191:function(e,t,n){"use strict";var r=n(0),s=n.n(r),a=n(190),o=n(188),l=n(47),i=n.n(l);const c=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:u,groupId:m}=e,{tabGroupChoices:p,setTabGroupChoices:d}=Object(a.a)(),[g,y]=Object(r.useState)(l);if(null!=m){const e=p[m];null!=e&&e!==g&&u.some(t=>t.value===e)&&y(e)}const O=e=>{y(e),null!=m&&d(m,e)},h=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===g)[0]))}},192:function(e,t,n){"use strict";var r=n(0),s=n.n(r);t.a=function(e){return s.a.createElement("div",null,e.children)}}}]);