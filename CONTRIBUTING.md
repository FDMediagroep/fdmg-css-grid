# Contributing
Thank you for your consideration of contributing to the project. Here you'll find some guidelines for contributing to the project. These guidelines are here to ensure that all contributions are at least of similar quality to ensure a problem-free review and merge.

## Getting started
1. Fork this repo
1. Install dependencies: `npm install`
1. Add your contribution
1. Write unit tests
1. Run unit tests and make sure it succeeds and coverage is at least 80% for the entire project
1. Transpile assets: `npm run release`
1. Commit and push changes
1. Create a Pull Request

## Unit testing
This project has unit tests to ensure its quality. Whenever you contribute code please make sure the tests still succeed. Also make sure that the code/functionality you contributed is also covered in a unit test. We strive to have at least 80% coverage for the entire project.
### Run tests
To run the unit tests simply used the following command.
```
npm test
```
### Update all snapshots
When the snapshots are stale you can use the following command to update the snapshots to reflect the currect situation again. 
```
npm run updateSnapshot
```
Don't forget to commit and push the snapshots as well.
### Update snapshot for single test file
If the project consists of multiple tests with their own snapshots then it is often desired that you only update the snapshot for a particular test file. You can use the following command to run a single test and update the snapshots used in the test.
```
npm run u <test file name>
```
Replace `<test file name>` with the actual test filename.
