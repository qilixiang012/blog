
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'YangYuzhong' });
};
exports.reg = function(req,res){
  res.render('reg',{
    title:'注册',
    error: req.flash('info')//通过它保存的变量只会在用户当前和下一次的请求中被访问,之后会被清除,
                            //通过它我们可以很方便地实现页面的通知和错误信息显示功能。

});
};
exports.doreg = function(req,res){
  if (req.body['pwdone'] != req.body['pwdtwo']) {
      //req.flash('error', '两次输入的口令不一致');
      req.flash('info','两次输入的口令不一致');
      return res.redirect('/reg');
  }
  
};
