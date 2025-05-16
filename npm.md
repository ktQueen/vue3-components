<!--
 * @Description:
 * @Date: 2025-05-16 16:19:42
 * @LastEditTime: 2025-05-16 20:05:38
-->

npm login(username,password,email)，登陆
npm beta(npm publish --tag beta)，发布 beta
npm publish ,发布
npm unpublish ，不允许删除超过 24 小时的包
npm unpublish --force，一天内实在要删除加--force 强制删除，即使删除了，再发布也需要改版本，版本是唯一的标识，官网没有删除这个标识
npm deprecate preject "message"，这个代替 unpublish 的弊端，不会撤销一个包，但是会在用户尝试安装这个包的时候提示信息，比较优雅，升级或者降级版本

npm version 自动控制版本号
major：主版本号的更新//1.0.3
minor：次版本号的更新//0.1.3
patch：布丁号//0.0.4
