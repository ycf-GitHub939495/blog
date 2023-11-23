<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <slot name="header" />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <slot name="aside"/>
        </el-aside>
        <el-container>
          <el-main>
            <slot name="main"/>
          </el-main>
          <el-footer>
            <slot name="footer"/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-container {
  min-height: 1000px;
  position: relative;
  .el-main {
    min-width: 1000px;
    max-width: 1300px;
    background-color: #a38108;
  }
  .el-header {
    background-color: #8deaff;
  }
  .el-footer {
    background-color: #1de0b1;
  }
}

</style>