<template>
    <div>
        <ul class="hshop">
            <li>
                <img src="../img/categroy.jpg" alt="" class="hshopimg">
            </li>
            <li class="hshopLi">
                <img src="../img/search.png" alt="">
                <input type="text" name="" id="" placeholder="汉服">
            </li>
            <li>
                <img src="../img/information.jpg" alt="" class="hshopimg">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="less">
.hshop{
    width: 100%;
    height: 92px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    li{
        img.hshopimg{
            width: 90px;
            height: 60px;
        }
    };
    li.hshopLi{
        flex: 1;
        background: #EEEEEE;
        height: 60px;
        display: flex;
        align-items: center;
        border-radius: 6px;
        input{
            height: 50px;
            flex: 1;
            margin-left: 20px;
            background: #EEEEEE;
            font-size: 28px;
        }
        img{
            margin-left: 20px;
            width: 30px;
            height: 30px;
        }
    }
}
</style>
