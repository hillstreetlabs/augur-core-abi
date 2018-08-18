# augur-core-abi

All Augur ABIs, without any dependencies and fully tree-shakeable.

### Why?

To use augur ABIs in your code you have to install augur-core, which has dozens of dependencies. Furthermore, the ABIs are quite large (140kb uncompressed), so if you only want to use one contract in your frontend, it's nice to allow webpack to tree-shake the unused ABIs.

To allow tree-shaking:

```
import { CompleteSets } from "augur-core-abi";
```
