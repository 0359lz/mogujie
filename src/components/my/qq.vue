<template>
    <div>
        <div class="qq">
            <img src="//imgcache.qq.com/ptlogin/v4/style/42/images/logo_upice.png?v=20180125">
            <span>亿万用户已选择QQ帐号登录应用</span>
            <button>一键登录</button>
        </div>
        <div class="qx">
            <p>蘑菇街将获得以下权限:</p>
            <ul>
                <li>
                    <img src="./images/0.png">
                    <span class="qxSpan">访问你的详细资料 (必选)</span>
                </li>
                <li>
                    <img src="./images/0.png">
                    <span class="qxSpan">访问你的基础资料 (必选)</span>
                </li>
                <li class="qb">
                    <img src="./images/1.png">
                    <span>查看全部</span>
                </li>
            </ul>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="less">
    .qq{
        width: 680px;
        height: 420px;
        margin: auto;
        padding-top: 60px;
        img{
            display: block;
            width: 168px;
            margin: auto;
        }
        span{
            display: block;
            font-size: 28px;
            color: #777;
            margin-top: 32px;
            text-align: center;
        }
        button{
            width: 600px;
            height: 72px;
            background: #12B7F5;
            color: #fff;
            font-size: 28px;
            border-radius: 10px;
            border: none;
            outline: none;
            display: block;
            margin: 0 auto;
        }
    }
    .qx{
        width: 600px;
        height: 280px;
        margin: auto;
        margin-top: 40px;
        p{
            font-size: 28px;
        }
        ul{
            margin-top: 8px;
            height: 200px;
            border: 2px solid #ccc;
            border-top: none;
            li{
                height: 60px;
                border-top: 2px solid #ccc;
                img{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    padding-top: 20px;
                }
                span.qxSpan{
                    display: inline-block;
                    font-size:20px;
                    color: #777;
                    margin-left: 30px;
                }
            }
            .qb{
                height: 100px;
                text-align: center;
                // .span{
                //     margin: 0;
                // }
            }
        }
    }
</style>
