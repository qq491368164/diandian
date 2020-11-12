<template>
    <div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
    div{
        ul{
            list-style: none;
            display: flex;
            li{
                flex: 1;
                justify-content: space-around;
                img{
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
</style>
