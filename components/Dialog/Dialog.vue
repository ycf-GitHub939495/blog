<script setup lang="ts">
import { computed, onUpdated } from "vue";

//对话框属性
interface DialogProps<T> {
  title: string
  type: 'add' | 'edit' | 'detail'
  dialog: {
    visible: boolean
    width: string | number
  }
  labels: string[]
  data: T
}

//定义props
const props = defineProps<DialogProps<any>>()
const dialogs = props.dialog
// const state = props.data
const dialogData = computed(() => props.data)

//定义emits
const emits = defineEmits<{
  open: []
  opened: []
  close: []
  closed: []
  openAutoFocus: []
  closeAutoFocus: []
  confirm: []
}>()

//计算属性
const keys = computed(() => Object.keys(dialogData.value))

//生命周期
onUpdated(() => {
  console.log(dialogData.value);
  console.log(props);
  // console.log(state);
  console.log(keys);
})

//自定义事件函数
const open = () => {
  emits('open')
}

const opened = () => {
  emits('opened')
}

const close = () => {
  emits('close')
}

const closed = () => {
  emits('closed')
}

const openAutoFocus = () => {
  emits('openAutoFocus')
}

const closeAutoFocus = () => {
  emits('closeAutoFocus')
}

//自定义方法
const handleCancel = () => {
  dialogs.visible = false
  // emits('update:value', props.value)
}

const handleConfirm = () => {
  dialogs.visible = false
  emits("confirm")
  // emits('update:value', props.value)
}
</script>

<template>
  <el-dialog
    @open="open"
    @close="close"
    @opened="opened"
    @closed="closed"
    @close-auto-focus="closeAutoFocus"
    @open-auto-focus="openAutoFocus"
    v-model="dialogs.visible"
    :title="title"
    :width="dialogs.width"
  >
    <!-- 添加   -->
    <el-form v-if="type === 'add'">
      <el-form-item v-for="(item, index) in labels" :label="item" :key="index" label-width="100">
        <el-input v-model="dialogData[keys[index]]" :placeholder="'请输入' + item" />
      </el-form-item>
    </el-form>
    <!--  编辑  -->
    <el-form v-else-if="type === 'edit'">
      <el-form-item v-for="(item, index) in labels" :label="item" :key="index" label-width="100">
        <el-input v-model="dialogData[keys[index]]" :placeholder="'请输入' + item" />
      </el-form-item>
    </el-form>
    <!--  详情  -->
    <div v-else>
      <p v-for="(item, index) in labels" :key="index">
        <strong>{{ item + ': ' }}</strong>
        {{ dialogData[keys[index]] }}
      </p>
    </div>
    <!--  取消和确认按钮  -->
    <template #footer>
      <span class="dialog-footer" v-if="type === 'add' || type === 'edit'">
        <el-button @click="handleCancel"> 取消 </el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>