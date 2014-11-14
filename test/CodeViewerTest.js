Aria.classDefinition({
    $classpath: "CodeViewerTest",
    $extends: "aria.jsunit.TemplateTestCase",
    $constructor: function () {
        this.$TemplateTestCase.constructor.call(this);
        this.setTestEnv({
            template: "js.CodeViewer"
        });
    },
    $prototype: {
        runTemplateTest: function () {
            this.end();
        }
    }
});
