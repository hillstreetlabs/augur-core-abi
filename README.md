# augur-core-abi

All Augur ABIs, without any dependencies and fully tree-shakeable.

Also includes deployed Augur addresses, so you don't need to grab them from `augur.js`.

### Why?

To use augur ABIs in your code you have to install augur-core, which has dozens of dependencies. Furthermore, the ABIs are quite large (140kb uncompressed), so if you only want to use one contract in your frontend, it's nice to allow webpack to tree-shake the unused ABIs.

To allow tree-shaking:

```
import { CompleteSets, addresses } from "augur-core-abi";

const networkId = "1";
new Contract(CompleteSets, addresses[networkId].CompleteSets);
```
