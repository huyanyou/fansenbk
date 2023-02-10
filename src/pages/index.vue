<script lang="ts" setup>
import { TabsInstance } from "@arco-design/web-vue";
import { FreeMode, Navigation, Thumbs, Scrollbar, Pagination } from "swiper";
import TestImg from "@/assets/img/test.jpg";
// useHead({})
const modules = [FreeMode, Navigation, Thumbs];
const modules2 = [Scrollbar];
const modules3 = [Pagination];
const aTabsRef = $ref<TabsInstance>();
let activeKey = $ref("1");
onMounted(() => {});
</script>

<template>
  <NuxtLayout name="universal">
    <div style="max-width: 1366px; margin: 0 auto">
      <section>
        <!-- <ARow>
                    <ACol :flex="1" style="flex-shrink: 1;">
                        <div class="header-introduce">
                            <h1>快速布局新零售<br>深挖全域业绩增长</h1>
                            <p>
                                有赞已帮助
                                <span>539,178</span>
                                个品牌<br>
                                成功与
                                <span>489,204,935</span>
                                名消费者建立可持续客户关系
                            </p>
                            <div>
                                <AButton type="primary" size="large">免费使用</AButton>
                                <AButton type="primary" style="margin-left: 20px;" size="large">了解详情</AButton>
                            </div>
                            <p>或咨询电话详情:31231231231312</p>
                        </div>
                    </ACol>
                    <ACol :flex="1" style="width: 100%;position: relative;flex-shrink: 1;">

                        <swiper-container :grid="{
                            rows: 1,
                        }" :modules="modules" slides-per-view="auto" :speed="500" :loop="true" :css-mode="false">
                            <swiper-slide>
                                <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                            </swiper-slide>
                            <swiper-slide>
                                <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                            </swiper-slide>
                        </swiper-container>
                        <div style="position: absolute;bottom: 0px;right: 0px;width: 100%;display: flex;">
                            <div style="flex: 1;z-index: 2;">2222</div>
                            <div style="flex: 1;">
                                <swiper-container :slides-per-view="4">
                                    <swiper-slide>1</swiper-slide>
                                    <swiper-slide>2</swiper-slide>
                                    <swiper-slide>3</swiper-slide>
                                    <swiper-slide>4</swiper-slide>
                                </swiper-container>
                            </div>
                        </div>

                    </ACol>
                </ARow> -->

        <HomeSwiperOne />
      </section>
      <!--  -->
      <section>
        <!-- <div>
                    <h2>
                        全渠道或 挨打我是大三的
                        <span>与带哦风暴腐败缩放八宝饭分八宝饭考虑</span>
                    </h2>
                    <p>大幅巴士咖啡吧风暴金卡少部分精氨酸v大巴司机被点击萨博附近啊撒v附近啊v时间</p>
                    <ARow>
                        <ACol :flex="1">
                            <swiper-container ref="test" :grid="{
                                rows: 1,
                            }" :space-between="70" slides-per-view="auto" :speed="500" :css-mode="false">
                                <swiper-slide>
                                    <img style="width: 100%;height: 200px;" src="@/assets/img/test.jpg" alt=""
                                        srcset="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                </swiper-slide>
                            </swiper-container>
                        </ACol>
                    </ARow>
                    <ARow :gutter="24">
                        <ACol :span="8">
                            <div class="social">
                                <h1>社交媒体营销</h1>
                                <p>在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化</p>
                                <ALink>dgbiasdgiasdsi</ALink>
                            </div>
                        </ACol>
                        <ACol :span="8">
                            <div class="social">
                                <h1>社交媒体营销</h1>
                                <p>在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化</p>
                                <ALink>dgbiasdgiasdsi</ALink>
                            </div>
                        </ACol>
                        <ACol :span="8">
                            <div class="social">
                                <h1>社交媒体营销</h1>
                                <p>在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化</p>
                                <ALink>dgbiasdgiasdsi</ALink>
                            </div>
                        </ACol>
                    </ARow>
                </div> -->
        <HomeSwiperTwo />
      </section>
      <!--  -->
      <section>
        <!-- <div>
                    <h2>
                        全渠道或 挨打我是大三的
                        <span>与带哦风暴腐败缩放八宝饭分八宝饭考虑</span>
                    </h2>
                    <p>大幅巴士咖啡吧风暴金卡少部分精氨酸v大巴司机被点击萨博附近啊撒v附近啊v时间</p>
                    <ARow>
                        <ACol :flex="1">
                            <swiper-container ref="test" :grid="{
                                rows: 1,
                            }" :space-between="70" slides-per-view="auto" :speed="500" :css-mode="false">
                                <swiper-slide>
                                    <img style="width: 100%;height: 200px;" src="@/assets/img/test.jpg" alt=""
                                        srcset="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                </swiper-slide>
                                <swiper-slide>
                                    <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                </swiper-slide>
                            </swiper-container>
                        </ACol>
                    </ARow>
                    <ARow :gutter="24">
                        <ACol :span="8">
                            <div class="social">
                                <h1>社交媒体营销</h1>
                                <p>在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化</p>
                                <ALink>dgbiasdgiasdsi</ALink>
                            </div>
                        </ACol>
                        <ACol :span="8">
                            <div class="social">
                                <h1>社交媒体营销</h1>
                                <p>在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化</p>
                                <ALink>dgbiasdgiasdsi</ALink>
                            </div>
                        </ACol>
                        <ACol :span="8">
                            <div class="social">
                                <h1>社交媒体营销</h1>
                                <p>在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化</p>
                                <ALink>dgbiasdgiasdsi</ALink>
                            </div>
                        </ACol>
                    </ARow>
                </div> -->
        <HomeSwiperTwo />
      </section>

      <section>
        <!-- <h1>爱护对方i哦啊好哦腐败</h1>
                <h2>打不开对方把u开办复刻版u库房啊v分开啊v分</h2>
                <ARow>
                    <ACol :flex="1">
                        <ACard>
                            <h1>解决方案</h1>
                            <h1>安抚v算法v佛,发i分v安抚v哦啊</h1>
                            <AButton type="primary">去探索</AButton>
                        </ACard>
                    </ACol>
                    <ACol :flex="1">
                        <ACard>
                            <h1>解决方案</h1>
                            <h1>安抚v算法v佛,发i分v安抚v哦啊</h1>
                            <AButton type="primary">去探索</AButton>
                        </ACard>
                    </ACol>
                </ARow> -->
        <HomeSwiperThree />
      </section>

      <section>
        <!-- <h1>test</h1>
                <ARow :gutter="24" justify="center">
                    <ACol :span="4">
                        <ATabs :active-key="activeKey" ref="aTabsRef" class="my-tabs" trigger="hover" :animation="true"
                            default-active-key="2">
                            <ATabPane key="1" title="Tab 1">
                                Content of Tab Panel 1
                            </ATabPane>
                            <ATabPane key="2" title="Tab 2">
                                Content of Tab Panel 2
                            </ATabPane>
                            <ATabPane key="3">
                                <template #title>Tab 3</template>
                                Content of Tab Panel 3
                            </ATabPane>
                        </ATabs>
                    </ACol>
                </ARow>
                <ARow>
                    <ACol :flex="1">
                        <swiper-container :grid="{
                            rows: 1,
                        }" :modules="modules" slides-per-view="auto" :speed="500" :loop="true" :css-mode="false">
                            <swiper-slide>
                                <ARow>
                                    <ACol :flex="1">
                                        <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                    </ACol>
                                    <ACol :flex="1">text</ACol>
                                </ARow>
                            </swiper-slide>
                            <swiper-slide>
                                <ARow>
                                    <ACol :flex="1">
                                        <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                    </ACol>
                                    <ACol :flex="1">text</ACol>
                                </ARow>
                            </swiper-slide>
                            <swiper-slide>
                                <ARow>
                                    <ACol :flex="1">
                                        <img style="width: 100%;" src="@/assets/img/test.jpg" alt="" srcset="">
                                    </ACol>
                                    <ACol :flex="1">text</ACol>
                                </ARow>
                            </swiper-slide>
                        </swiper-container>
                    </ACol>
                </ARow> -->
        <HomeSwiperFour />
      </section>
    </div>

    <section>
      <!-- <div style="max-width: 1366px;margin: 0 auto;">
                <h2>
                    <span>大巴客服毕卡索本菲卡设</span><br>
                    "安抚那里芬兰法拉盛泛滥了"
                </h2>
            </div>

            <ARow :gutter="24" style="margin-left: 0; margin-right: 0;">
                <ACol :span="24" style="padding-left: 0 !important;padding-right: 0 !important;">
                    <div style="max-width: 100%;margin: 0 auto;">
                        <ClientOnly>
                            <swiper-container style="width: 100%;" :slides-perView="1" :space-between="10" :pagination="{
                                clickable: true,
                            }" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}" :modules="modules3" class="mySwiper">
                                <swiper-slide>
                                    <div>
                                        <h1>行之有效的文档资源</h1>
                                        <p>有赞 10 年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议</p>
                                        <ul>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                        </ul>
                                        <ALink>
                                            探索在线文档
                                        </ALink>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <h1>行之有效的文档资源</h1>
                                        <p>有赞 10 年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议</p>
                                        <ul>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                        </ul>
                                        <ALink>
                                            探索在线文档
                                        </ALink>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <h1>行之有效的文档资源</h1>
                                        <p>有赞 10 年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议</p>
                                        <ul>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                        </ul>
                                        <ALink>
                                            探索在线文档
                                        </ALink>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <h1>行之有效的文档资源</h1>
                                        <p>有赞 10 年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议</p>
                                        <ul>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                            <li>
                                                <ALink>teststst</ALink>
                                            </li>
                                        </ul>
                                        <ALink>
                                            探索在线文档
                                        </ALink>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </ClientOnly>

                    </div>
                </ACol>
            </ARow> -->
      <HomeSwiperFive />
    </section>

    <section>
      <!-- <div style="max-width: 1366px;margin: 0 auto;">
                <h2>
                    <span>大巴客服毕卡索本菲卡设</span><br>
                    "安抚那里芬兰法拉盛泛滥了"
                </h2>
            </div>
            <ARow :gutter="24" style="margin-left: 0; margin-right: 0;">
                <ACol :span="24" style="padding-left: 0 !important;padding-right: 0 !important;">
                    <div style="max-width: 100%;margin: 0 auto;">
                        <ClientOnly>
                            <swiper-container style="width: 100%;" :slides-perView="1" :space-between="10" :pagination="{
                                clickable: true,
                            }" :breakpoints="{
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}" :modules="modules3" class="mySwiper">
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div>
                                        <ul>
                                            <li>
                                                <img width="200" :src="TestImg" alt="" srcset="" />
                                            </li>
                                            <li>
                                                <div>
                                                    古井大三的撒
                                                    <span>茶洗腐败</span>
                                                    <h1>2发i哦风暴比偶不</h1>
                                                    <p>腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ARow>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                    <ACol :span="12">
                                                        <div>
                                                            24 万+
                                                        </div>
                                                        <div>
                                                            大三乃堆拉少年
                                                        </div>
                                                    </ACol>
                                                </ARow>
                                            </li>
                                        </ul>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </ClientOnly>

                    </div>
                </ACol>
            </ARow> -->
      <HomeSwiperSix />
    </section>

    <section>
      <HomeAppLink />
    </section>
  </NuxtLayout>
</template>
<style scoped lang="scss"></style>
