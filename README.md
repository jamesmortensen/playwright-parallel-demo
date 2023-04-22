# playwright-parallel-demo

This is just a small demo that shows how to run playwright tests on multiple runners in GitHub Actions in order to quickly scale them up.


## Install

Install node modules

```
$ npm install
```


## Run tests

```
$ npm run test:login
```

## Run tests in parallel

This shards the tests, splitting them up into repeatable groups of 4. This command runs the first group of tests.

```
$ npx playwright test --shard=1/4
```

And this runs the second group:

```
$ npx playwright test --shard=2/4
```

And so forth...

Being able to execute the tests in groups enables us to execute these commands in GitHub Action runners using the matrix feature to spawn multiple Ubuntu runners.

To see this in action, go to the Playwright Parallel Tests workflow, and trigger it using workflow dispatch, and then compare the runtimes with the Playwright Tests workflow by also triggering it using workflow dispatch.


## License

Copyright (c) James Mortensen, 2023 MIT License

