const e=JSON.parse('{"key":"v-406534ef","path":"/posts/react/dva.html","title":"Dva","lang":"en-US","frontmatter":{"icon":"edit","date":"2020-09-16T00:00:00.000Z","category":["前端框架"],"tag":["dva","react"],"description":"Dva dva 一个轻量级的应用框架 1.路由： React-Router 2.架构： Redux 3.异步操作： Redux-saga 将上面三个 React 工具库包装在一起，简化了 API，让开发 React 应用更加方便和快捷 redux 存在的问题 概念太多，并且 reducer, saga, action 都是分离的（分文件） 编辑成本高，需要在 reducer, saga, action 之间来回切换 不便于组织业务模型 (或者叫 domain model) 。比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件。","head":[["meta",{"property":"og:url","content":"https://github.com/wangdongovo/posts/react/dva.html"}],["meta",{"property":"og:title","content":"Dva"}],["meta",{"property":"og:description","content":"Dva dva 一个轻量级的应用框架 1.路由： React-Router 2.架构： Redux 3.异步操作： Redux-saga 将上面三个 React 工具库包装在一起，简化了 API，让开发 React 应用更加方便和快捷 redux 存在的问题 概念太多，并且 reducer, saga, action 都是分离的（分文件） 编辑成本高，需要在 reducer, saga, action 之间来回切换 不便于组织业务模型 (或者叫 domain model) 。比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-02T14:57:24.000Z"}],["meta",{"property":"article:tag","content":"dva"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:published_time","content":"2020-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T14:57:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dva\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-02T14:57:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"redux 存在的问题","slug":"redux-存在的问题","link":"#redux-存在的问题","children":[]},{"level":2,"title":"dva","slug":"dva-1","link":"#dva-1","children":[]},{"level":2,"title":"安装 dva-cli","slug":"安装-dva-cli","link":"#安装-dva-cli","children":[]},{"level":2,"title":"创建应用","slug":"创建应用","link":"#创建应用","children":[]},{"level":2,"title":"Dva 概念","slug":"dva-概念","link":"#dva-概念","children":[]},{"level":2,"title":"数据流向","slug":"数据流向","link":"#数据流向","children":[]},{"level":2,"title":"Models","slug":"models","link":"#models","children":[{"level":3,"title":"State","slug":"state","link":"#state","children":[]},{"level":3,"title":"Action","slug":"action","link":"#action","children":[]},{"level":3,"title":"dispatch 函数","slug":"dispatch-函数","link":"#dispatch-函数","children":[]},{"level":3,"title":"Reducer","slug":"reducer","link":"#reducer","children":[]},{"level":3,"title":"Subscription","slug":"subscription","link":"#subscription","children":[]},{"level":3,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":3,"title":"Model栗子","slug":"model栗子","link":"#model栗子","children":[]},{"level":3,"title":"Model 对象的属性","slug":"model-对象的属性","link":"#model-对象的属性","children":[]}]}],"git":{"createdTime":1677769044000,"updatedTime":1677769044000,"contributors":[{"name":"wd","email":"wd@192.168.0.101","commits":1}]},"readingTime":{"minutes":4.83,"words":1449},"filePathRelative":"posts/react/dva.md","localizedDate":"September 16, 2020","excerpt":"<h1> Dva</h1>\\n<p>dva 一个轻量级的应用框架\\n1.路由： React-Router\\n2.架构： Redux\\n3.异步操作： Redux-saga\\n将上面三个 React 工具库包装在一起，简化了 API，让开发 React 应用更加方便和快捷</p>\\n<h2> redux 存在的问题</h2>\\n<p>概念太多，并且 reducer, saga, action 都是分离的（分文件）</p>\\n<p>编辑成本高，需要在 reducer, saga, action 之间来回切换\\n不便于组织业务模型 (或者叫 domain model) 。比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件。</p>","autoDesc":true}');export{e as data};
