## Modules

<dl>
<dt><a href="#module_connect">connect</a></dt>
<dd></dd>
<dt><a href="#module_createStore">createStore</a> ⇒ <code>Node</code> | <code>function</code></dt>
<dd><p>Creates an global store.</p>
</dd>
<dt><a href="#module_provider">provider</a></dt>
<dd></dd>
</dl>

<a name="module_connect"></a>

## connect
<a name="module_connect..actionCallback"></a>

### connect~actionCallback(actionCallback)
To dispatch values to global store.

**Kind**: inner method of [<code>connect</code>](#module_connect)  

| Param | Type | Description |
| --- | --- | --- |
| actionCallback | <code>function</code> | A function that receives dispatch function as a param |

<a name="module_createStore"></a>

## createStore ⇒ <code>Node</code> \| <code>function</code>
Creates an global store.

**Returns**: <code>Node</code> - - Returns a wrapper provider component<code>function</code> - - A "connect" function to connect a component with global state  

| Param | Type | Description |
| --- | --- | --- |
| defaultState | <code>Object</code> | The default state of the application need to create the store |


* [createStore](#module_createStore) ⇒ <code>Node</code> \| <code>function</code>
    * [~dispatch(options)](#module_createStore..dispatch)
    * [~connect(select, component)](#module_createStore..connect) ⇒ <code>Node</code>

<a name="module_createStore..dispatch"></a>

### createStore~dispatch(options)
To update values in global store.

**Kind**: inner method of [<code>createStore</code>](#module_createStore)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | A object with the details to update values in global store |
| options.key | <code>string</code> | KeyPath to which the value has to be assigned, separated by '.' |
| options.payload | <code>Object</code> | Value to be set against the provided Keypath |

<a name="module_createStore..connect"></a>

### createStore~connect(select, component) ⇒ <code>Node</code>
Connects the passed component with the global store.

**Kind**: inner method of [<code>createStore</code>](#module_createStore)  
**Returns**: <code>Node</code> - - A wrapper React element  

| Param | Type | Description |
| --- | --- | --- |
| select | <code>function</code> | To map global state to props, should return an JSON object |
| component | <code>Node</code> | A React element, to which the props has to be passed |

<a name="module_provider"></a>

## provider

* [provider](#module_provider)
    * [~Provider](#module_provider..Provider)
        * [new Provider()](#new_module_provider..Provider_new)

<a name="module_provider..Provider"></a>

### provider~Provider
**Kind**: inner class of [<code>provider</code>](#module_provider)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| defaultState | <code>object</code> | The default state of the application need to create the store, if not passed as part of createStore |
| children | <code>Node</code> | React element for which the store should be made available |

<a name="new_module_provider..Provider_new"></a>

#### new Provider()
Provider Component.

