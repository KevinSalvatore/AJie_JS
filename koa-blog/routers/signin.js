const router = require("koa-router")();

router.get("/signin", async ctx => {
  // ctx.body = 'signin page';
  await ctx.render("signin");
});

router.post("/signin", async ctx => {
  const { name, password, repeatPass, avatar } = ctx.request.body;
  console.log(name, password, repeatPass, avatar);
  ctx.body = { code: 200 };
});

module.exports = router;
