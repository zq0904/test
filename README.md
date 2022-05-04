### github action 发布 npm 包

- github action

  - private 项目每月有 2000 次的限制 public 项目无限制

  - .github/workflows/xxx.yml

  - zero-test 纯测试 npm 包

  - 单项目仓库 打 tag v8.0.0 推送到 github 走 action
  - 多项目仓库 先在本地 npx changeset 填写变更集 在推送到远程

### codecov + action + jest [![codecov](https://codecov.io/gh/zq0904/test/branch/master/graph/badge.svg?token=jGb6vgIdnc)](https://codecov.io/gh/zq0904/test) [在 monorepo 中使用 Codecov](https://www.curtiscode.dev/post/tools/codecov-monorepo/)

- Travis CI 不再为开源项目提供免费服务 完全弃用转用 action

- Codecov
  - 徽章 在 Settings-> Badge
  - action 执行测试错误是不会推送报告的
