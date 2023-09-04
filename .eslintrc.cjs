module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "./.eslintrc-auto-import.json"
    ],
    overrides: [],
    parser: "vue-eslint-parser",   //在默认配置基础上需要修改解析器为 vue-eslint-parser ，不然在检测执行中出现 error Parsing error: '>' expected 的解析错误
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser"
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        "vue/multi-word-component-names": "off", // 禁用vue文件强制多个单词命名
        "@typescript-eslint/no-explicit-any": ["off"], //允许使用any
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowedNames: ["that"], // this可用的局部变量名称
            },
        ],
        "@typescript-eslint/ban-ts-comment": "off", //允许使用@ts-ignore
        "@typescript-eslint/no-non-null-assertion": "off", //允许使用非空断言
        "no-console": [
            //提交时不允许有console.log
            "warn",
            {
                allow: ["warn", "error"],
            },
        ],
        "no-debugger": "warn", //提交时不允许有debugger
    },
};
