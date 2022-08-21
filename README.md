[![npm version](https://badge.fury.io/js/mahal-test-utils.svg)](https://badge.fury.io/js/mahal-test-utils) [![CI](https://github.com/ujjwalguptaofficial/mahal-test-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/ujjwalguptaofficial/mahal-test-utils/actions/workflows/ci.yml) [![GitHub version](https://badge.fury.io/gh/ujjwalguptaofficial%2Fmahal-test-utils.svg)](https://badge.fury.io/gh/ujjwalguptaofficial%2Fmahal-test-utils)
# mahal-test-utils

Official library for testing [mahal](https://github.com/ujjwalguptaofficial/mahal) application

# Installation

```
npm i @mahaljs/test-utils
```

# Docs

## initiate

component can be initiated by calling `initiate` method

```
import Counter from "../src/components/counter";
import { initiate } from "mahal-test-utils";

const component = await initiate(Counter);
```

## mount

component can be mounted by calling `mount` method

```
import Counter from "../src/components/counter";
import { mount } from "mahal-test-utils";

const component = await mount(Counter);
```

## setInputValue

setInputValue can be used to set the value of an input element. It takes two arguments -

1. input element
2. value to set

```
import Counter from "../src/components/counter";
import { mount } from "mahal-test-utils";

const component = await mount(Counter);
const inputEl = component.find('input');

setInputValue(inputEl, 'hello')
```

## Pass app instance 

Let's say you want to use your app instance because it contains different global value e.g - formatters, global variables etc.

In order to do that you just need to change the context of the available testing methods.

Let's see an example of `mount` -

```
import Counter from "../src/components/counter";
import { mount } from "mahal-test-utils";
import { app } from "../src/index.ts";

const component = await mount.call(app, Counter);
```

