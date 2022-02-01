# Remind developers to remove enzyme when a file is updated. (warn-on-enzyme)

The codebase currently tests using Enzyme and react testing library. New tests should not use Enzyme. Old tests should be updated to no longer use Enzyme.
## Rule Details

This rule aims to modernize the tests.

Examples of **incorrect** code for this rule:

```js

import { mount } from 'enzyme'
import { anythingElse } from 'enzyme'

```

Examples of **correct** code for this rule:

```js

// no enzyme imports
// react testing library is preferred
// for example:

import { render, screen } from '@testing-library/react'

```

### Options

By default the rule checks for any imports from 'enzyme'. If there are other related imports that should be blocked later, they can be added.

```js

[{ importsToCheckFor: ['enzyme', 'otherThing', 'yetAnother'] }]

```
