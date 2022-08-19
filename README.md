# egg-socket

empty

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ pnpm i
$ pnpm dev
$ open http://localhost:7001/

# 浏览器控制台执行进行测试
socket.emit('exchange', {
  target: 'res',
  payload: {
    msg: 'test',
  },
});
```

### Deploy

```bash
$ pnpm start
$ pnpm stop
```

### npm scripts

- Use `pnpm lint` to check code style.
- Use `npm test` to run unit test.
- Use `pnpm autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org