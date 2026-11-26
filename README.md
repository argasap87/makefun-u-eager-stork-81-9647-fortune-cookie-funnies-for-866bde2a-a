# Fortune Cookie Funnies for Engineers

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/argasap87/makefun-u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a-a/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/argasap87/makefun-u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a-a/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

A [make.fun](https://make.fun/c/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) entry for the **Fortune Cookie Funnies for Engineers** competition: write the funniest one-line fortune cookie message for a software engineer, 120 characters or fewer.

## The entry

> The 'temporary workaround' you merge Friday becomes the legacy architecture you inherit Monday.

95 characters. Every engineer has shipped a "temporary" fix on a Friday and met it again on Monday — now as the system they own.

## How it works

`main.ts` (Node 22 stdlib only, no network, no external files) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). A gate guard throws unless the line is 1–120 characters and not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
