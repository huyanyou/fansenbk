<script lang="ts" setup>
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { FreeMode, Navigation, Thumbs, Scrollbar, Pagination } from "swiper";
import TestImg from "@/assets/img/test.jpg";
const modules3 = [Pagination];
</script>

<template>
  <div style="max-width: 1366px; margin: 0 auto">
    <h2>
      <span>大巴客服毕卡索本菲卡设</span><br />
      "安抚那里芬兰法拉盛泛滥了"
    </h2>
  </div>
  <ARow :gutter="24" style="margin-left: 0; margin-right: 0">
    <ACol
      :span="24"
      style="padding-left: 0 !important; padding-right: 0 !important"
    >
      <div style="max-width: 100%; margin: 0 auto">
        <ClientOnly>
          <swiper-container
            style="width: 100%"
            :slides-perView="1"
            :space-between="10"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
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
            }"
            :modules="modules3"
            class="mySwiper"
          >
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                    </ARow>
                  </li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <ul style="list-style-type: none">
                  <li>
                    <img width="200" :src="TestImg" alt="" srcset="" />
                  </li>
                  <li>
                    <div>
                      古井大三的撒
                      <span>茶洗腐败</span>
                      <h1>2发i哦风暴比偶不</h1>
                      <p>
                        腐败风暴萨博佛啊撒拜佛啊撒拜佛八分熟偶拜佛啊的哈萨克的贺卡上都会卡点击撒点姜辣素点击撒拜佛啊撒拜佛
                      </p>
                    </div>
                  </li>
                  <li>
                    <ARow>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
                      </ACol>
                      <ACol :span="12">
                        <div>24 万+</div>
                        <div>大三乃堆拉少年</div>
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
  </ARow>
</template>

<style scoped></style>
