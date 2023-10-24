<template>
  <div>
    <div class="create-nav">
      <button title="返回" class="goBack" @click="goBack"><i class="iconfont icon-fanhui"></i></button>
      <el-input v-model="state.title" placeholder="请输入标题" class="title-input" size="large" clearable />
      <button title="保存" class="save" @click="saveDraft">
        <i class="iconfont icon-baocun"></i><span>保存草稿</span>
      </button>
      <button title="发布" class="publish" @click="publishArticle">
        <i class="iconfont icon-fabu"></i><span>发布文章</span>
      </button>
    </div>
    <MdEditor
      v-model="state.content"
      class="creation"
      :toolbars="toolbars"
      :tableShape="[8, 12]"
      @onSave="onSave"
      @onUploadImg="onUploadImg"
    >
    </MdEditor>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import router from "../../router";
import { addDraft, addArticle } from "@/api/creation";
import { throttle } from "lodash";

// 编辑器数据
const state = reactive({
  title: "",
  content: "",
  label: "",
});
let draftSaved = ref(false);
// 编辑器头部按钮
const toolbars = [
  0,
  "bold",
  "underline",
  "italic",
  "-",
  "title",
  "strikeThrough",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  1,
  "=",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
];

// 验证文章标题以及内容是否为空
const validateArticle = () => {
  if (state.title === "" || state.content === "") {
    ElMessage.warning("文章标题或内容不能为空");
    return false;
  }
  return true;
};
// 清除数据
const clearEditorState = () => {
  state.title = "";
  state.content = "";
  state.label = "";
};
// 返回按钮
const goBack = () => {
  if (draftSaved.value) {
    router.back();
  } else {
    ElMessageBox.confirm("您的文章尚未保存，是否返回？", "", {
      distinguishCancelAndClose: true,
      confirmButtonText: "保存",
      cancelButtonText: "离开",
      type: "warning",
    })
      .then(() => {
        saveDraft();
        if (state.title !== "" && state.content !== "") {
          router.back();
        }
      })
      .catch((action) => {
        if (action === "cancel") {
          clearEditorState();
          router.back();
        }
      });
  }
};
// 上传图片 ------  还没搞
const onUploadImg = async (files, callback) => {
  //   const res = await Promise.all(
  //     files.map((file) => {
  //       return new Promise((rev, rej) => {
  //         const form = new FormData();
  //         form.append("file", file);
  //         axios
  //           .post("/api/img/upload", form, {
  //             headers: {
  //               "Content-Type": "multipart/form-data",
  //             },
  //           })
  //           .then((res) => rev(res))
  //           .catch((error) => rej(error));
  //       });
  //     })
  //   );
  //   callback(res.map((item) => item.data.url));
};
// 保存-----校验文章
const onSave = (v: string) => {
  if (v === "") {
    ElMessage({
      message: "文章内容不能为空",
      type: "warning",
    });
  } else {
    ElMessage({
      message: "保存成功",
      type: "success",
    });
    draftSaved.value = true;
  }
};
// 保存草稿
const saveDraft = async () => {
  if (validateArticle()) {
    try {
      const response = await addDraft(state);
      if (response.code === 1001) {
        // 在这里处理请求的响应
        ElMessage({
          message: response.message,
          type: "success",
        });
        draftSaved.value = true;
      }
    } catch (error) {
      ElMessage.error("草稿箱保存失败~");
    }
  }
};
// 发布文章
const publishArticle = async () => {
  if (validateArticle()) {
    try {
      const response = await addArticle(state);
      if (response.code === 1001) {
        // 在这里处理请求的响应
        ElMessage({
          message: "发布成功~",
          type: "success",
        });
        clearEditorState();
        router.back();
      }
    } catch (error) {
      ElMessage.error("发布失败");
    }
  }
};
// 监听文章内容变化
watch(
  () => state.content,
  throttle((newValue, oldValue) => {
    if (newValue !== oldValue) {
      draftSaved.value = false;
    }
  }, 2000)
);
</script>
<style lang="scss" scoped>
button {
  margin: 0 5px;
}
.create-nav {
  height: 50px;
  display: flex;
  padding: 5px 0;
  .goBack {
    padding: 0.4rem 1.25rem;
    outline: none;
    transition: all 0.3s;
    border: 2px solid rgb(216, 231, 218);
    &:hover {
      color: $border-color;
      border-color: $border-color;
    }
  }
  .title-input {
    flex: 1;
    margin: 0 5px;
    border: 1px solid transparent;
    transition: all 0.5s;
    &:hover {
      border: 1px solid $border-color;
      border-radius: 6px;
    }
  }
  .save,
  .publish {
    outline: none;
    border: 2px solid rgb(216, 231, 218);
    padding: 0.4rem 1.25rem;
    .iconfont {
      margin-right: 5px;
      vertical-align: -1px;
    }
    &:hover {
      color: $border-color;
      border-color: $border-color;
    }
  }
}
.creation {
  text-align: left;
  height: 692px;
}
.iconfont {
  font-size: 20px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
<style lang="scss">
.md-editor-toolbar-wrapper {
  padding: 0.5em 0.625em;
}
.md-editor-toolbar-item .md-editor-icon {
  width: 1.875em;
  height: 1.875em;
}
</style>
