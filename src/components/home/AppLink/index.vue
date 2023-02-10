<script setup lang="ts">
const treeData = [
  {
    title: "Trunk 0-0",
    key: "0-0",
    children: [
      {
        title: "Leaf",
        key: "0-0-1",
      },
      {
        title: "Branch 0-0-2",
        key: "0-0-2",
      },
      {
        title: "Branch 0-0-3",
        key: "0-0-3",
      },
      {
        title: "Branch 0-0-4",
        key: "0-0-4",
      },
    ],
  },
];
</script>
<template>
  <div>
    <ASpace ref="arcoSpaceRef" direction="vertical" style="display: block">
      <!-- 产品介绍底部 -->
      <ARow class="bottom-content">
        <ACol :flex="3">
          <!-- <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList> -->
          <!-- <ACollapse>
                        <ACollapseItem header="硬件产品" :bordered="false">
                            <AList>
                                <template #header>
                                    硬件产品
                                </template>
                            </AList>
                        </ACollapseItem>
                    </ACollapse> -->
          <ATree class="my-tree" :data="treeData" />
        </ACol>
        <ACol :flex="3">
          <!-- <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList> -->
          <ATree class="my-tree" :data="treeData" />
        </ACol>
        <ACol :flex="3">
          <!-- <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList> -->
          <ATree class="my-tree" :data="treeData" />
        </ACol>
        <ACol :flex="3">
          <!-- <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList> -->
          <ATree class="my-tree" :data="treeData" />
        </ACol>
        <ACol :flex="3">
          <!-- <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList> -->
          <ATree class="my-tree" :data="treeData" />
        </ACol>
        <ACol :flex="3">
          <!-- <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList> -->
          <ATree class="my-tree" :data="treeData" />
        </ACol>
        <ACol :flex="3"></ACol>
        <ACol :flex="3"></ACol>
      </ARow>
      <ADivider dashed />
    </ASpace>
  </div>
</template>
<style scoped lang="scss">
.arco-space {
  max-width: 1366px;
  margin: auto auto;
}

.bottom-content {
  :deep(.arco-list-header) {
    border-bottom: 0;
  }

  :deep(.arco-list) {
    border: 0;
    --link-6: rgba(61, 61, 61, 0.81);
  }

  :deep(.arco-list-content > .arco-list-item) {
    border-bottom: 0;
  }
}

.my-tree {
  :deep(.arco-tree-node-switcher) {
    display: none !important;
  }

  :deep(.arco-tree-node) {
    justify-content: center;
  }

  :deep(
      > div.arco-tree-node.arco-tree-node-is-tail.arco-tree-node-expanded
        > span.arco-tree-node-title:hover
    ) {
    color: unset !important;
    background-color: unset !important;
    pointer-events: none;
    // cursor: pointer !important;
  }

  :deep(.arco-tree-node-is-tail) {
    cursor: default !important;
  }
}
</style>
