<script setup>
import { onMounted, ref } from 'vue'
import MenuView from '@/views/Menu-View.vue'
import ButtonCpnt from '@/components/Button-Cpnt.vue'
import CardCpnt from '@/components/Card-Cpnt.vue'

onMounted(() => {
})
</script>

<template>
  <div class="flx flx-y fill-vh">
    <MenuView>
    </MenuView>
    <div style="display: flex;justify-content: center;flex-direction: column;flex-grow: 1;overflow: auto">
      <div class="flx flx-y flx-center" style="">
        <div style="height: 8em">

        </div>
<!--        <CardCpnt>-->

<!--        </CardCpnt>-->
<!--&lt;!&ndash;        <div class="button bg-min f-size-1" style="width: 50%;">&ndash;&gt;-->
<!--&lt;!&ndash;          你说得对，但是原根是一个数学符号。设m是正整数，a是整数，若a模m的阶等于φ(m)，则称a为模m的一个原根。假设一个数g是P的原根，那么g^i&ndash;&gt;-->
<!--&lt;!&ndash;          mod P的结果两两不同，且有 1 ，归根到底就是g^(P-1) = 1 (mod&ndash;&gt;-->
<!--&lt;!&ndash;          P)当且仅当指数为P-1的时候成立。(这里P是素数)。你的数学很差，我现在每天用原根都能做1e5次数据规模1e6的NTT，每个月差不多3e6次卷积，&ndash;&gt;-->
<!--&lt;!&ndash;          也就是现实生活中3e18次乘法运算，换算过来最少也要算1000年。虽然我只有14岁，但是已经超越了中国绝大多数人(包括你)的水平，这便是原根给我的骄傲的资本。&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <ButtonCpnt>-->
<!--          点击送牢大回家-->
<!--        </ButtonCpnt>-->

      </div>

    </div>
  </div>
  <!--  <div class="fill-h flx-h flx-center">-->
  <!--    <div class="button" style="width: 80%">-->
  <!--      <div class="bg-min flx flx-center" style="padding: 1em;border-radius: 1em;">-->
  <!--        示例文本内容<br>-->
  <!--        示例文本内容<br>-->
  <!--        示例文本内容<br>-->
  <!--        示例文本内容<br>-->
  <!--        示例文本内容<br>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <header>-->
  <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->

  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->

  <!--  <RouterView />-->
</template>

<style scoped>

</style>
