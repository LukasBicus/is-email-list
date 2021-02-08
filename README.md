# is-email-list

Validates strings as email lists. Emails should be separated by comma or semicolon (mix enabled). Uses validator package internally. 

Example of usage:

```js
import {isEmailList} from 'is-email-list'

isEmailList('a@a.com, b@b.com, aaa') // false
isEmailList('a@a.com, b@b.com') // true
```

If you have any idea, how to improve this package, please raise an issue. Happy coding :)
